const catagoryController = require('../controlller/catagoryCotroller');
const {verifyToken,
    verifyTokenAndUserAuthorization,
    verifyTokenAndAdmin}= require("../controlller/sessionCtroller");
const router= require('express').Router();
router.post('/',verifyTokenAndAdmin,catagoryController.addCatagory);
router.get('/',verifyToken, catagoryController.getAllCatagory);
router.get('/:id',verifyToken, catagoryController.getAnCatagory);
router.put('/:id', verifyTokenAndAdmin, catagoryController.updateCatagory);
router.delete('/:id', verifyTokenAndAdmin,catagoryController.updateCatagory);

module.exports= router;