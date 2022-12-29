const {
    getProducts,
    getProductsById,
    getProductsByType,
    updateQuantityProduct
} = require("./product.controller");
const router = require("express").Router();

router.get("/get-products", getProducts);
router.get("/get-products-by-id/:idProduct", getProductsById);
router.get("/get-products-by-type/:idProductType", getProductsByType);
router.patch("/update-products-quantity", updateQuantityProduct);

module.exports = router;