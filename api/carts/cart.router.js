const {
    createCart,
    updateCart,
    getCart,
    deleteCart
} = require("./cart.controller");
const router = require("express").Router();

router.post("/create-cart", createCart);
router.post("/update-cart", updateCart);
router.get("/get-cart/:idUser", getCart);
router.delete("/delete-cart", deleteCart);

module.exports = router;