const {
    createCart,
    updateCart,
    getCart,
    deleteCart
} = require("./cart.service");

module.exports = {
    createCart: (req, res) => {
        const body = req.body;
        console.log(body);
        createCart(body, (err, results) => {
            if (err) {
                console.log(err);
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
    updateCart: (req, res) => {
        const body = req.body;
        console.log(body);
        updateCart(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update cart"
                });
            }
            return res.json({
                success: 1,
                message: 'Updated successfully',
                data: results
            });
        });
    },
    getCart: (req, res) => {
        const idUser = req.params.idUser;
        console.log(idUser);
        getCart(idUser, (err, results) => {
            if (err) {
                console.log(err);
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
    deleteCart: (req, res) => {
        const body = req.body;
        console.log(body);
        deleteCart(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },

}