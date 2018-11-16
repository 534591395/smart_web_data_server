/**
 * 商品表模型
 */
module.exports = app => {
    const ShopGoods = app.model.import('../tables/shop_goods');
    return ShopGoods;
}