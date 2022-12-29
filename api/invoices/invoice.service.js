const pool = require("../../config/database");
module.exports = {
    createInvoice: (data, callBack) => {
        pool.query('insert into invoice (totalPrice, idInvoiceStatus, day, idUser) values(?,?,?,?)', [
            data.totalPrice,
            data.idInvoiceStatus,
            data.day,
            data.idUser,
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
}