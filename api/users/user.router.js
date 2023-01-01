const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUsers,
    login
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create-user", createUser);
router.get("/get-users", getUsers);
router.get("/get-user-by-id/:idUser", getUserById);
router.post("/update-user", updateUser);
router.delete("/delete-user/:idUser", deleteUser);
router.post("/login", login);

module.exports = router;