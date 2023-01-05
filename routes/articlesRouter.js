const articlesController = require('../controlller/articlesController');
const router= require("express").Router();
router.post('/', articlesController.addArticle);
router.get('/', articlesController.getAllArtiles);
router.get('/:id', articlesController.getAnArticles);
router.put('/:id', articlesController.updateArticles);
router.delete('/:id', articlesController.deleteArticles);
module.exports= router;