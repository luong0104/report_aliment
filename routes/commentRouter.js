const cmtController = require('../controlller/commentController');
const {verifyToken,
    verifyTokenAndUserAuthorization,
    verifyTokenAndAdmin}= require("../controlller/sessionCtroller");
const router= require('express').Router();


router.post('/',verifyTokenAndAdmin,cmtController.addComment);
router.get('/', verifyToken,cmtController.getAllComents);
router.get('/:id',verifyToken, cmtController.getAComent);
router.put('/:id',verifyTokenAndAdmin, cmtController.updatecmt);
router.delete('/:id',verifyTokenAndAdmin, cmtController.deletecmt);


module.exports= router;