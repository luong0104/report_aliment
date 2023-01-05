const {Catagory, Articles, Treatment, Aliment}= require("../models/content")
const articlesController = {
    addArticle: async (req,res) => {
      try{
       const newArticles = new Articles(req.body);
       const saveArticles = await newArticles.save();
       res.status(200).json(saveArticles);
      }catch(err){
         res.status(500).json(err);
      }
    },
    getAllArtiles: async (req, res) => {
        try {
          const article = await Articles.find();
          res.status(200).json(article);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      getAnArticles: async (req, res) => {
        try {
          const articles = await Articles.findById(req.params.id).populate("aliments");
          res.status(200).json(articles);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      updateArticles: async (req, res) => {
        try {
          const articles = await Articles.findById(req.params.id);
          await articles.updateOne({ $set: req.body });
          res.status(200).json("Updated successfully!");
        } catch (err) {
       res.status(500).json(err); }
      },
      deleteArticles: async (req, res) => {
        try {
          await Aliment.updateMany({ articles_id: req.params.id }, { articles_id: null });
          await Articles.findByIdAndDelete(req.params.id);
          res.status(200).json("Deleted successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
      },
}
module.exports= articlesController;
