const alimentController = require('../controlller/alimentController');
const {verifyToken,
verifyTokenAndUserAuthorization,
verifyTokenAndAdmin,}= require("../controlller/sessionCtroller");
const router = require("express").Router();
router.post('/',verifyTokenAndAdmin, alimentController.addAliment);
router.get('/',verifyToken, alimentController.getAllAliment);
router.get('/:id', verifyToken,alimentController.getAAliment);
router.put('/:id',verifyTokenAndAdmin,alimentController.updateAliment);
router.delete('/:id', verifyTokenAndAdmin,alimentController.deleteAliment);


module.exports= router;