const pool = require("../../config/database");
module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into user(firstName, address, email, password, phoneNumber) values(?,?,?,?,?)', [
                data.firstName,
                data.address,
                data.email,
                data.password,
                data.phoneNumber
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            'select idUser, firstName, address, email, password, phoneNumber,bankAccountNumber, bankName from user', [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserById: (idUser, callBack) => {
        pool.query(
            'select idUser, firstName,  email, password, phoneNumber, address from user where idUser=?', [
                idUser
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query('update user set firstName =?, email=?, phoneNumber=?, address =?, password = ?, bankName = ?, bankAccountNumber = ? where idUser = ?', [
                data.firstName,
                data.email,
                data.phoneNumber,
                data.address,
                data.password,
                data.bankName,
                data.bankAccountNumber,
                data.idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (idUser, callBack) => {
        pool.query(
            'delete from user where idUser = ?', [
                idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByEmail: (email, callBack) => {
        pool.query('select idUser, firstName, address, email, password, phoneNumber from user where email = ?', [email], (error, results) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
};