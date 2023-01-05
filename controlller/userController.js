const {User , Comment} = require("../models/user")

const userController = {
  GetAll: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(404).json("Incorrect user");
      }
      res.status(200).json("User deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  findUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
        res.status(404).json("Incorrect username");
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  UpdateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).json("update success");
    } catch (err) {
      res.status(400).json("update failed ");
    }
  },
};

module.exports = userController;
