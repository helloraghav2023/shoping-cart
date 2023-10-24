const mongoose=require("mongoose")



const productschema=mongoose.Schema({
    name:String,
    desc:String,
    price:String,
    img:String,
    quantity:String,
    status:{type:String,default:"IN-STOCK"}
})





module.exports=mongoose.model("product",productschema)