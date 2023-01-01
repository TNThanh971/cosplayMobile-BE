const {
    getProducts,
    getProductsById,
    getProductsByType,
    updateQuantityProduct
} = require("./product.service");
const {} = require("./product.service");

module.exports = {
    getProducts: (req, res) => {
        getProducts((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getProductsById: (req, res) => {
        const idProduct = req.params.idProduct;
        console.log(idProduct);
        getProductsById(idProduct, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getProductsByType: (req, res) => {
        const idProductType = req.params.idProductType;
        console.log(idProductType);
        getProductsByType(idProductType, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getProductsByName: (req, res) => {
        const productName = req.body;
        console.log(productName);
        getProductsByType(body.productName, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateQuantityProduct: (req, res) => {
        const body = req.body;
        console.log(body);
        updateQuantityProduct(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update product quantity"
                });
            }
            return res.json({
                success: 1,
                message: 'Updated successfully'
            });
        });
    }
}