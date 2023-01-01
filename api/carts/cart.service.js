const pool = require("../../config/database");
module.exports = {
    createCart: (data, callBack) => {
        pool.query('insert into cart(idUser, idProduct, cartProductQuantity) values(?,?,?)', [
                data.idUser,
                data.idProduct,
                data.cartProductQuantity
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCart: (data, callBack) => {
        pool.query('update cart set (cartProductQuantity) values(?) where idUser=? and idProduct=?', [
                data.cartProductQuantity,
                data.idUser,
                data.idProduct
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    // final String product_id;
    // final String product_name;
    // final int product_rental_price;
    // final String product_img;
    // final int product_quantity;
    // final int product_weight;
    // final int cart_product_quantity;
    //select p.idProduct, p.productName,p.productRentalPrice, p.productUrlImage, p.productQuantity, p.productWeight, c.cartProductQuantity from cart as c, product as p where idUser = ? and c.idProduct = p.idProduct '
    getCart: (idUser, callBack) => {
        pool.query(
            'select p.*, c.cartProductQuantity from cart as c, product as p where idUser = ? and c.idProduct = p.idProduct ', [
                idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteCart: (data, callBack) => {
        pool.query(
            'delete from cart where idUser = ? and idProduct =?', [
                data.idUser, data.idProduct
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}