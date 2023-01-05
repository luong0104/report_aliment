const cmtController = require('../controlller/commentController');

const router= require('express').Router();


router.post('/', cmtController.addComment);
router.get('/', cmtController.getAllComents);
router.get('/:id', cmtController.getAComent);
router.put('/:id', cmtController.updatecmt);
router.delete('/:id', cmtController.deletecmt);


module.exports= router;