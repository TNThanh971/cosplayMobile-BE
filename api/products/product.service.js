const pool = require("../../config/database");
module.exports = {
    getProducts: callBack => {
        pool.query(
            'select * from product', [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            });
    },
    getProductsById: (idProduct, callBack) => {
        pool.query(
            'select * from product where idProduct = ?', [idProduct],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            });
    },
    getProductsByType: (idProductType, callBack) => {
        pool.query(
            'select * from product where idProductType=?', [idProductType],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateQuantityProduct: (data, callBack) => {
        pool.query(
            'update product set productQuantity = ? where idProduct = ? ', [
                data.productQuantity,
                data.idProduct
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}