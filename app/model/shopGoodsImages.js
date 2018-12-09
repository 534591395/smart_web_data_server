/**
 * 商品图片表模型
 */
module.exports = app => {
    const ShopGoodsImages = app.model.import('../tables/shop_goodsimages');
    return ShopGoodsImages;
}