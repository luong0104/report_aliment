const userController = require("../controlller/userController")
const sessionCtroller= require("../controlller/sessionCtroller")
const router= require('express').Router();
// chỉ có access của admin mơi có quyền xem, xóa , tìm kiếm nhười dùng tất cả người dùng
router.get("/", sessionCtroller.verifyTokenAndAdmin, userController.GetAll);
router.delete("/:id", sessionCtroller.verifyTokenAndAdmin, userController.deleteUser);
router.get("/find/:username",sessionCtroller.verifyTokenAndAdmin, userController.findUser);
//chỉ có admin với access của chính user đó mới chỉnh được thuộc tính 
router.put("/update/:id", sessionCtroller.verifyTokenAndUserAuthorization, userController.UpdateUser);
module.exports= router;