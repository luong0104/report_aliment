const catagoryController = require('../controlller/catagoryCotroller');
const sessionCtroller= require("../controlller/sessionCtroller");
const router= require('express').Router();
router.post('/',sessionCtroller.verifyTokenAndAdmin,catagoryController.addCatagory);
router.get('/',sessionCtroller.verifyToken, catagoryController.getAllCatagory);
router.get('/:id',sessionCtroller.verifyToken, catagoryController.getAnCatagory);
router.put('/:id', sessionCtroller.verifyTokenAndAdmin, catagoryController.updateCatagory);
router.delete('/:id', sessionCtroller.verifyTokenAndAdmin,catagoryController.updateCatagory);

module.exports= router;