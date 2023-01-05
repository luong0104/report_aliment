const treatmentController = require('../controlller/treatmentController');

const router= require('express').Router();


router.post('/', treatmentController.addTreatment);
router.get('/', treatmentController.getAllTreatment);
router.get('/:id', treatmentController.getAnTreatment);
router.put('/:id', treatmentController.updateTreatment);
router.delete('/:id', treatmentController.deleteTreatment);


module.exports= router;