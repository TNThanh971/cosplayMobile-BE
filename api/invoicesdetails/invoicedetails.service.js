const pool = require("../../config/database");
module.exports = {
    createInvoiceDetail: (data, callBack) => {
        pool.query(
            'insert into invoice_detail(idProduct, quantity, idInvoice, product_rental_price, startDay, amountOfDay) values (?,?,?,?,?,?)', [
                data.idProduct,
                data.quantity,
                data.idInvoice,
                data.product_rental_price,
                data.startDay,
                data.amountOfDay
            ],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getInvoiceDetail: (idInvoice, callBack) => {
        pool.query(
            'select * from invoice_detail where idInvoice =?', [idInvoice],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}