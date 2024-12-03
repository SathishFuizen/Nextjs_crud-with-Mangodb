import mongoose,{Schema} from "mongoose";
const topicSchema=new Schema({
    name:{
        type:String,
        required:true
       
    },
    age:{
        type:Number,
        required:true
       
    },
    category:{
        type:String,
        required:true
        
    }
},{
    timestamps:true,
})
const ProductModel=mongoose.models.Deal || mongoose.model("Deal",topicSchema)
export default ProductModel
