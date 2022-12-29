const {
    createInvoice,
    getInvoiceByIdUser
} = require("./invoice.controller");
const router = require("express").Router();

router.post("/create-invoice", createInvoice);
router.get("/get-invoice-by-id-user/:idUser", getInvoiceByIdUser);
module.exports = router;