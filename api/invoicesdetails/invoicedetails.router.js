const {
    createInvoiceDetail,
    getInvoiceDetail
} = require("./invoicedetails.controller");

const router = require("express").Router();
router.post("/create-invoice-detail", createInvoiceDetail);
router.get("/get-invoice-detail/:idInvoice", getInvoiceDetail);

module.exports = router;