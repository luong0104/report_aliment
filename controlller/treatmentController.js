const {Catagory, Articles, Treatment, Aliment}= require("../models/content")
const treatmentController = {
  //THÊM MỚI 
    addTreatment: async (req,res) => {
      try{
       const newTreatment = new Treatment(req.body);
       const saveTreatment = await newTreatment.save();
       res.status(200).json(saveTreatment);
      }catch(err){
         res.status(500).json(err);
      }
    },
    ///LẤY RA TẤT CẢ
    getAllTreatment: async (req, res) => {
        try {
          const treatment = await Treatment.find();
          res.status(200).json(treatment);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      ///LẤY RA THEO YÊU CẦU(TÌM KIẾM)
      getAnTreatment: async (req, res) => {
        try {
          const treatment = await Treatment.findById(req.params.id).populate("aliments");
          if(!treatment){
           return res.status(404).json("Incorrect Treatment");
          }
          res.status(200).json(treatment);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      //SỬA ĐỎI THUỘC TÍNH
      updateTreatment: async (req, res) => {
        try {
          const treatment = await Treatment.findById(req.params.id);
          await treatment.updateOne({ $set: req.body });
          if(!treatment){
            return res.status(400).json("Incorrect treatment")
          }
          res.status(200).json("Updated successfully!");
        } catch (err) {
       res.status(500).json(err); }
      },
      //XÓA DỮ LIỆU
      deleteTreatment: async (req, res) => {
        try {
          await Aliment.updateMany({ Treatment_id: req.params.id }, { Treatment_id: null });
        const treatment =  await Treatment.findByIdAndDelete(req.params.id);
        if(!treatment){
          return res.status(404).json(' treatment does not exist')
        }
          res.status(200).json("Deleted successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
      },
}
module.exports= treatmentController;
