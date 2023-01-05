const catagoryController = require('../controlller/catagoryCotroller');

const router= require('express').Router();
router.post('/',catagoryController.addCatagory);
router.get('/', catagoryController.getAllCatagory);
router.get('/:id', catagoryController.getAnCatagory);
router.put('/:id', catagoryController.updateCatagory);
router.delete('/:id', catagoryController.updateCatagory);

module.exports= router;