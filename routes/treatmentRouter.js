const treatmentController = require('../controlller/treatmentController');
const sessionCtroller= require("../controlller/sessionCtroller");
const router= require('express').Router();


router.post('/',sessionCtroller.verifyTokenAndAdmin, treatmentController.addTreatment);
router.get('/', sessionCtroller.verifyToken,treatmentController.getAllTreatment);
router.get('/:id',sessionCtroller.verifyToken, treatmentController.getAnTreatment);
router.put('/:id', sessionCtroller.verifyTokenAndAdmin,treatmentController.updateTreatment);
router.delete('/:id',sessionCtroller.verifyTokenAndAdmin, treatmentController.deleteTreatment);


module.exports= router;