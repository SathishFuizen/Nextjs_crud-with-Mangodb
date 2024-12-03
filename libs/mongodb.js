import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://nimmanasathish31:Sathish1234@cluster0.t1kyiif.mongodb.net/",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("db connected123...")
    }catch(err){
        console.log(err)
    }

}
export default connectMongoDB;



