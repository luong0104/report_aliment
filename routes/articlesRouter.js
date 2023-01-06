const articlesController = require('../controlller/articlesController');
const {verifyToken,
verifyTokenAndUserAuthorization,
verifyTokenAndAdmin}= require("../controlller/sessionCtroller");
const router= require("express").Router();
router.post('/',verifyTokenAndAdmin, articlesController.addArticle);
router.get('/', verifyToken,articlesController.getAllArtiles);
router.get('/:id',verifyToken, articlesController.getAnArticles);
router.put('/:id', verifyTokenAndAdmin,articlesController.updateArticles);
router.delete('/:id',verifyTokenAndAdmin, articlesController.deleteArticles);
module.exports= router;