const { create } = require("../users/user.service");
const {
    createInvoice,
    getInvoiceByIdUser
} = require("./invoice.service");

module.exports = {
    createInvoice: (req, res) => {
        const body = req.body;
        console.log(body);
        createInvoice(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getInvoiceByIdUser: (req, res) => {
        const idUser = req.body;
        console.log(idUser);
        getInvoiceByIdUser(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}