const mongoose = require('mongoose');
//loai san pham
const catagorySchema= new mongoose.Schema({
    name_catagory:{
        type:String,
        required:true,
        unique: true
    },
    aliments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aliment"
    }
})
// bai viet
const articlesSchema= new mongoose.Schema({
    tiltle:{
        type: String
    },
    content: {
        type: String
    },
    aliments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aliment"
    }, link:{
        type: String
    }
})
//can benh

const treatmentSchema= new mongoose.Schema({
    name_treatment:{
        type: String
    },
    aliments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aliment"
    }   
},
)
//san pham
const alimentSchema= new mongoose.Schema({
    name_aliment:{
        type: String,
        required: true
    },
    catagory_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Catagory"
    },
    articles_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Articles"
    },
    Treatment_id:{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Treatment"
    },
    image:{
        type: String
        
    },
    content:{
        type: String
    }
},
{timestamps: true})
const Treatment= mongoose.model("Treatment", treatmentSchema)
const Articles= mongoose.model("Articles", articlesSchema);
const Catagory= mongoose.model("Catagory", catagorySchema);
const Aliment= mongoose.model("Aliment", alimentSchema)


module.exports= {Catagory, Articles, Treatment, Aliment}