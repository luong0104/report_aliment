const treatmentController = require('../controlller/treatmentController');
const {verifyToken,
    verifyTokenAndUserAuthorization,
    verifyTokenAndAdmin}= require("../controlller/sessionCtroller");
const router= require('express').Router();


router.post('/',verifyTokenAndAdmin, treatmentController.addTreatment);
router.get('/', verifyToken,treatmentController.getAllTreatment);
router.get('/:id',verifyToken, treatmentController.getAnTreatment);
router.put('/:id', verifyTokenAndAdmin,treatmentController.updateTreatment);
router.delete('/:id',verifyTokenAndAdmin, treatmentController.deleteTreatment);


module.exports= router;