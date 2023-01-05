const {Catagory, Articles, Treatment, Aliment}= require("../models/content");
const { all } = require("../routes/treatmentRouter");
const alimentController = {
    addAliment: async (req,res) => {
      try{
       const newAliment = new Aliment(req.body);
       const saveAliment = await newAliment.save();
       if (req.body.catagory_id) {
        const catagory_id = Catagory.findById(req.body.catagory_id);
        await catagory_id.updateOne({ $push: { aliments: saveAliment._id } });
      }
      if (req.body.articles_id) {
        const articles_id = Articles.findById(req.body.articles_id);
        await articles_id.updateOne({ $push: { aliments: saveAliment._id } });
      }
      if (req.body.Treatment_id) {
        const Treatment_id = Treatment.findById(req.body.Treatment_id);
        await Treatment_id.updateOne({ $push: { aliments: saveAliment._id } });
      }
      
      
      res.status(200).json(saveAliment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllAliment: async (req, res) => {
    try {
      const allaliment = await Aliment.find();
        if(!allaliment){
          res.status(404).json
        }
      
      res.status(200).json(allaliment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAAliment: async (req, res) => {
    try {
      const aliment = await Aliment.findById(req.params.id).populate("catagory_id");
      if(!aliment){
        res.status(404).json(err)
      }
      res.status(200).json(aliment);
    
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateAliment: async (req, res) => {
    try {
      const aliment = await Aliment.findById(req.params.id);
      await aliment.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  
     deleteAliment: async (req, res) => {
    try {
      await Articles.updateMany(
        { aliments: req.params.id },
        { $pull: {aliments: req.params.id } }
      );
      await Catagory.updateMany(
        { aliments: req.params.id },
        { $pull: {aliments: req.params.id } }
      )
      await Treatment.updateMany(
        { aliments: req.params.id },
        { $pull: {aliments: req.params.id } }
      )
      
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
}
module.exports= alimentController;