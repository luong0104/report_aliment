const cmtController = require('../controlller/commentController');
const sessionCtroller= require("../controlller/sessionCtroller");
const router= require('express').Router();


router.post('/',sessionCtroller.verifyTokenAndAdmin,cmtController.addComment);
router.get('/', sessionCtroller.verifyToken.cmtController.getAllComents);
router.get('/:id',sessionCtroller.verifyToken, cmtController.getAComent);
router.put('/:id',sessionCtroller.verifyTokenAndAdmin, cmtController.updatecmt);
router.delete('/:id',sessionCtroller.verifyTokenAndAdmin, cmtController.deletecmt);


module.exports= router;