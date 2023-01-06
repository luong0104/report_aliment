const articlesController = require('../controlller/articlesController');
const sessionCtroller= require("../controlller/sessionCtroller");
const router= require("express").Router();
router.post('/',sessionCtroller.verifyTokenAndAdmin, articlesController.addArticle);
router.get('/', sessionCtroller.verifyToken,articlesController.getAllArtiles);
router.get('/:id',sessionCtroller.verifyToken, articlesController.getAnArticles);
router.put('/:id', sessionCtroller.verifyTokenAndAdmin,articlesController.updateArticles);
router.delete('/:id',sessionCtroller.verifyTokenAndAdmin, articlesController.deleteArticles);
module.exports= router;