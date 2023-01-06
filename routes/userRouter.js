const userController = require("../controlller/userController")
const {verifyToken,
    verifyTokenAndUserAuthorization,
    verifyTokenAndAdmin}= require("../controlller/sessionCtroller")
const router= require('express').Router();
// chỉ có access của admin mơi có quyền xem, xóa , tìm kiếm nhười dùng tất cả người dùng
router.get("/", verifyTokenAndAdmin, userController.GetAll);
router.delete("/:id", verifyTokenAndAdmin, userController.deleteUser);
router.get("/find/:username",verifyTokenAndAdmin, userController.findUser);
//chỉ có admin với access của chính user đó mới chỉnh được thuộc tính 
router.put("/update/:id", verifyTokenAndUserAuthorization, userController.UpdateUser);
module.exports= router;