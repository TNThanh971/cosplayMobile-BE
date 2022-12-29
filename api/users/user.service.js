const pool = require("../../config/database");
module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into user(firstName, lastName, gender, email, password, phoneNumber) values(?,?,?,?,?,?)', [
                data.firstName,
                data.lastName,
                data.gender,
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
            'select idUser, firstName, lastName, gender, email, password, phoneNumber from user', [],
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
            'select idUser, firstName, lastName, gender, email, password, phoneNumber from user where idUser=?', [
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
        pool.query('update user set firstName =?, lastName=?, gender=?, email=?, password=?, phoneNumber=? where idUser=?', [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.phoneNumber,
                data.idUser
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
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
        pool.query('select * from user where email = ?', [email], (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
};