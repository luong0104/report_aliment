const userController = require("../controlller/userController")

const router= require('express').Router();
router.get("/", userController.GetAll);
router.delete("/:id", userController.deleteUser);
router.get("/find/:username", userController.findUser);
router.put("/update/:id", userController.UpdateUser);
module.exports= router;