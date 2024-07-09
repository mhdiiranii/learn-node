const express = require("express");
const userControler = require("./../controler/userControler");

const router = express.Router();

router.route("/:id").get(userControler.getOneUser).patch(userControler.patchUser).delete(userControler.deleteUser);

router.route("/").get(userControler.getAllUser).post(userControler.addNewUser);

module.exports = router;
