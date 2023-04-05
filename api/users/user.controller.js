const {
    create,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        //console.log(body);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results[1]
            });
        });
    },
    getUserById: (req, res) => {
        const idUser = req.query.idUser;
        console.log(idUser);
        getUserById(idUser, (err, results) => {
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
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: results
            });
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'Updated successfully',
                data: results
            });
        });
    },
    deleteUser: (req, res) => {
        const idUser = req.params.idUser;
        deleteUser(idUser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Deleted successfully"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        console.log(body);
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
            const result = (body.password, results.password);
            if (result) {
                //results.password = undefined;
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    data: results,
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "invalid email or password"
                });
            }
        });
    },
};