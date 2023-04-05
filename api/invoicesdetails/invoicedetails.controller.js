const {
    createInvoiceDetail,
    getInvoiceDetail
} = require("./invoicedetails.service");

module.exports = {
    createInvoiceDetail: (req, res) => {
        const body = req.body;
        console.log(body);
        createInvoiceDetail(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    getInvoiceDetail: (req, res) => {
        const idInvoice = req.params.idInvoice;
        getInvoiceDetail(idInvoice, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}