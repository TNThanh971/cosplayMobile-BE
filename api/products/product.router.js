const {
    getProducts,
    getProductsById,
    getProductsByType,
    getProductsByName,
    updateQuantityProduct
} = require("./product.controller");
const router = require("express").Router();

router.get("/get-products", getProducts);
router.get("/get-products-by-id/:idProduct", getProductsById);
router.get("/get-products-by-type/:idProductType", getProductsByType);
router.get("/get-products-by-name", getProductsByName);
router.post("/update-products-quantity", updateQuantityProduct);

module.exports = router;