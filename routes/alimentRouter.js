const alimentController = require('../controlller/alimentController');
const sessionCtroller= require("../controlller/sessionCtroller");
const router = require("express").Router();
router.post('/',sessionCtroller.verifyTokenAndAdmin, alimentController.addAliment);
router.get('/',sessionCtroller.verifyToken, alimentController.getAllAliment);
router.get('/:id', sessionCtroller.verifyToken,alimentController.getAAliment);
router.put('/:id',sessionCtroller.verifyTokenAndAd,alimentController.updateAliment);
router.delete('/:id', sessionCtroller.verifyTokenAndAd,alimentController.deleteAliment);


module.exports= router;