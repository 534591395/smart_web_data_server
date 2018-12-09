/**
 * 管理平台-商品管理
 * @param app
 * @returns {GoodsController}
 * 
 * ctx.model.Op ===> http://docs.sequelizejs.com/manual/tutorial/querying.html#operators-security
 * 
 * const Op = Sequelize.Op

[Op.and]: {a: 5}           // 且 (a = 5)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 或 a = 6)
[Op.gt]: 6,                // id > 6
[Op.gte]: 6,               // id >= 6
[Op.lt]: 10,               // id < 10
[Op.lte]: 10,              // id <= 10
[Op.ne]: 20,               // id != 20
[Op.eq]: 3,                // = 3
[Op.not]: true,            // 不是 TRUE
[Op.between]: [6, 10],     // 在 6 和 10 之间
[Op.notBetween]: [11, 15], // 不在 11 和 15 之间
[Op.in]: [1, 2],           // 在 [1, 2] 之中
[Op.notIn]: [1, 2],        // 不在 [1, 2] 之中
[Op.like]: '%hat',         // 包含 '%hat'
[Op.notLike]: '%hat'       // 不包含 '%hat'
[Op.iLike]: '%hat'         // 包含 '%hat' (不区分大小写)  (仅限 PG)
[Op.notILike]: '%hat'      // 不包含 '%hat'  (仅限 PG)
[Op.regexp]: '^[h|a|t]'    // 匹配正则表达式/~ '^[h|a|t]' (仅限 MySQL/PG)
[Op.notRegexp]: '^[h|a|t]' // 不匹配正则表达式/!~ '^[h|a|t]' (仅限 MySQL/PG)
[Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (仅限 PG)
[Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (仅限 PG)
[Op.like]: { [Op.any]: ['cat', 'hat']} // 包含任何数组['cat', 'hat'] - 同样适用于 iLike 和 notLike
[Op.overlap]: [1, 2]       // && [1, 2] (PG数组重叠运算符)
[Op.contains]: [1, 2]      // @> [1, 2] (PG数组包含运算符)
[Op.contained]: [1, 2]     // <@ [1, 2] (PG数组包含于运算符)
[Op.any]: [2,3]            // 任何数组[2, 3]::INTEGER (仅限PG)

[Op.col]: 'user.organization_id' // = 'user'.'organization_id', 使用数据库语言特定的列标识符, 本例使用 PG
 */

'use strict';

const BaseController = require('../../core/baseController');
const moment = require('moment');

class GoodsController extends BaseController {
  // 创建\修改商品  
  async create(ctx) {
    const {goodsID,name, title,goodsType,imgurl,price,priceMarket,stock,note,goodsStatus,sortNo,opBy,goodsImages,recommendFlag}= ctx.request.body;
    const opAt = moment();
    // 修改商品
    if (goodsID) {
        const goods = await ctx.model.ShopGoods.findById(goodsID);
        if (!goods) {
            this.failure('保存失败，未查询到商品相关信息！');
            return;
        } else {
            goods.update({
                name, title,goodsType,imgurl,price,priceMarket,stock,note,goodsStatus,sortNo,opBy,opAt,recommendFlag
            });
            await ctx.model.query("DELETE FROM `shop_goodsImages` where goodsID = :goodsID", { replacements: { goodsID }, type: ctx.model.QueryTypes.DELETE });
            for (let index in goodsImages) {
                await ctx.model.ShopGoodsImages.create({
                    goodsID: goodsID, imgurl: goodsImages[index].url, name: goodsImages[index].name, sortNo: index
                });
            }
        }
    }
    // 新增商品 
    else {
        await ctx.model.ShopGoods.create({
            name, title,goodsType,imgurl,price,priceMarket,stock,note,goodsStatus,sortNo,opBy,opAt,recommendFlag
        });
        for (let index in goodsImages) {
            await ctx.model.ShopGoodsImages.create({
                goodsID: goodsID, imgurl: goodsImages[index].url, name: goodsImages[index].name, sortNo: index
            });
        }
    }
    this.success("保存成功！");
  }  
  // 商品列表  
  async list(ctx) {
    const { title, page, limit, type } = ctx.query;
    if (
        typeof limit === 'undefined' || 
        typeof page === 'undefined' 
    ) {
        this.failure('查询参数错误');
        return;
    }
    const limitNum = Number(limit);
    const offset = (Number(page) - 1) * limitNum;
    const Op = ctx.model.Op;
    // findAndCountAll http://www.nodeclass.com/api/sequelize.html  从数据库中查找多个元素，返回数据与记录总数
    const result = await ctx.model.ShopGoods.findAndCountAll({
        where: {
            [Op.or]: [
                {
                    // 商品标题
                    name: {
                        [Op.like]: `%${title}%`
                    }
                }, 
                {
                    // 商品名称
                    title: {
                        [Op.like]: `%${title}%`
                    }
                }
            ],
            // 商品类型
            goodsType: {
                [Op.like]: `%${type}%`
            }
        },
        offset: offset,
        limit: limitNum
    });
    this.success('查询成功', result.rows, result.count);
  }
}

module.exports = GoodsController;