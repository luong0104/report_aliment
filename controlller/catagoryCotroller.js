const {Catagory, Articles, Treatment, Aliment}= require("../models/content")
const catagoryController = {
    addCatagory: async (req,res) => {
      try{
       const newCatagory = new Catagory(req.body);
       const saveCatagory = await newCatagory.save();
       res.status(200).json(saveCatagory);
      }catch(err){
         res.status(500).json(err);
      }
    },
    getAllCatagory: async (req, res) => {
        try {
          const catagory = await Catagory.find();
          res.status(200).json(catagory);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      getAnCatagory: async (req, res) => {
        try {
          const catagory = await Catagory.findById(req.params.id).populate("aliments");
          res.status(200).json(catagory);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      updateCatagory: async (req, res) => {
        try {
          const catagory = await Catagory.findById(req.params.id);
          await catagory.updateOne({ $set: req.body });
          res.status(200).json("Updated successfully!");
        } catch (err) {
       res.status(500).json(err); }
      },
      deleteCatagory: async (req, res) => {
        try {
          await Aliment.updateMany({ catagory_id: req.params.id }, { catagory_id: null });
          await Catagory.findByIdAndDelete(req.params.id);
          res.status(200).json("Deleted successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
      },
}
module.exports= catagoryController;
