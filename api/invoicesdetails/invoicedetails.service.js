const pool = require("../../config/database");
module.exports = {
    createInvoiceDetail: (data, callBack) => {
        pool.query(
            'insert into invoice_detail(idProduct, quantity, idInvoice, productRentalPrice) values (?,?,?,?)', [
                data.idProduct,
                data.quantity,
                data.idInvoice,
                data.productRentalPrice
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
            'select i.*, p.productName, p.productUrlImage, p.productPrice,p.productWeight,p.productSize from invoice_detail i, product p where idInvoice =? and i.idProduct = p.idProduct', [idInvoice],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}