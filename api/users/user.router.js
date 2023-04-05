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
router.get("/get-user-by-id", getUserById);
router.put("/update-user", updateUser);
router.post("/update-user", updateUser);
router.patch("/update-user", updateUser);
router.delete("/delete-user/:idUser", deleteUser);
router.post("/login", login);

module.exports = router;