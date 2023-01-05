const express= require('express')
const  cors= require('cors')
const dotenv = require('dotenv')
const morgan= require('morgan')
const helmet = require("helmet");
const bodyparser= require('body-parser')
const mongoose= require('mongoose')
const { json } = require('express/lib/response')
const authrouter= require("./routes/authRouter")
const treatmentRouter= require("./routes/treatmentRouter");
const articlesRouter= require("./routes/articlesRouter");
const catagoryRouter= require("./routes/catagoryRouter");
const alimentRouter= require("./routes/alimentRouter");
const userRouter= require("./routes/userRouter")
const cmtRouter= require("./routes/commentRouter")
dotenv.config();
const app= express();
app.use(bodyparser.json());
app.use(cors());
app.use(morgan("common"));
const PORT= process.env.PORT ||5000
mongoose.connect(process.env.MONGO_URL,()=>{
    try{
        console.log('connect success')
}catch(err){
    console.log('connect failed')
}

})
app.use(helmet());
app.use("/v1/auth", authrouter)
app.use("/v1/treatment", treatmentRouter)
app.use("/v1/articles", articlesRouter);
app.use("/v1/catagory", catagoryRouter);
app.use("/v1/aliment", alimentRouter);
app.use("/v1/user", userRouter);
app.use("/v1/cmt", cmtRouter)
app.listen(PORT, (req, res)=>{
      console.log(`PORT${PORT}`)
})
app.use('/', (req,res)=>{
    res.send('heelolll');
})
