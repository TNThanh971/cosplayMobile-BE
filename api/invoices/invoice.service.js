const pool = require("../../config/database");
module.exports = {
    createInvoice: (data, callBack) => {
        pool.query('insert into invoice (totalPrice, idInvoiceStatus, day, idUser,userFullName, phoneNumber, userAddress, invoiceFeeTransport, invoiceFeePond, amountOfDay, email ) values(?,?,?,?,?,?,?,?,?,?,?)', [
            data.totalPrice,
            data.idInvoiceStatus,
            data.day,
            data.idUser,
            data.userFullName,
            data.phoneNumber,
            data.userAddress,
            data.invoiceFeeTransport,
            data.invoiceFeePond,
            data.amountOfDay,
            data.email
        ], (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },

    getInvoiceByIdUser: (idUser, callBack) => {
        pool.query('select * from invoice where idUser=?', [idUser], (error, results) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        });
    },
    getInvoiceInserted: (idUser, callBack) => {
        pool.query('SELECT idInvoice FROM invoice ORDER BY idInvoice DESC where idUser=?', [idUser], (error, results) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
}