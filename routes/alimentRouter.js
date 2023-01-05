const alimentController = require('../controlller/alimentController');

const router = require("express").Router();
router.post('/',alimentController.addAliment);
router.get('/', alimentController.getAllAliment);
router.get('/:id', alimentController.getAAliment);
router.put('/:id', alimentController.updateAliment);
router.delete('/:id', alimentController.deleteAliment);


module.exports= router;