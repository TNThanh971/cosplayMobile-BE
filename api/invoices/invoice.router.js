const {
    createInvoice,
    getInvoiceByIdUser,
    getInvoiceInserted
} = require("./invoice.controller");
const router = require("express").Router();

router.post("/create-invoice", createInvoice);
router.get("/get-invoice-by-id-user/:idUser", getInvoiceByIdUser);
router.get("/get-invoice-inserted/:idUser", getInvoiceInserted);

module.exports = router;