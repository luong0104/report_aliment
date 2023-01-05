const {User , Comment} = require("../models/user")
const cmtController = {
    
    addComment: async (req, res) => {
      try {
        const newCmt = new Comment(req.body);
        const savecmt = await newCmt.save();
        if (req.body.username) {
          const username = User.findById(req.body.username);
          await username.updateOne({ $push: { comments: savecmt._id } });
        }
        res.status(200).json(savecmt);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    
    getAllComents: async (req, res) => {
      try {
        const allcmts = await Comment.find();
        res.status(200).json(allcmts);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    
    getAComent: async (req, res) => {
      try {
        const cmt = await Comment.findById(req.params.id).populate("username");
        res.status(200).json(cmt);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    
    updatecmt: async (req, res) => {
      try {
        const cmt = await Comment.findById(req.params.id);
        await cmt.updateOne({ $set: req.body });
        res.status(200).json("Updated successfully!");
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    
    deletecmt: async (req, res) => {
      try {
        await User.updateMany(
          { comments: req.params.id },
          { $pull: { comments: req.params.id } }
        );
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully");
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };
  
  module.exports = cmtController;