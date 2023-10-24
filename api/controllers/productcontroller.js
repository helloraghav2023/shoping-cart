const Product=require("../models/product")
const message=require("../helpers/message")


exports.add=(req,res)=>{
  // console.log(req.file)
//console.log(req.body)
     const imgname=req.file.filename
     const{name,desc,price,quantity}=req.body
     try{
     const record=new Product({
        name:name,
    desc:desc,
    price:price,
    img:imgname,
    quantity:quantity,
     })
     record.save()
     res.json({
        status:message.status.status201,
        message:"successfully created",
        apidata:record
     })
    }catch(error){
        res.json({
            status:message.status.status400,
            message:error.message
        })
    }
}

exports.allproducts=async(req,res)=>{
    try{
    const record=await Product.find()
    res.json({
        status:message.status.status200,
        apidata:record
    })
}catch(error){
    res.json({
    status:message.status.status500,
    message:error.message
    })
}

}

exports.singleproduct=async(req,res)=>{
    //console.log(req.params.id)
    try{
    const id=req.params.id
const record=await Product.findById(id)
//console.log(record)
res.json({
    status:message.status.status200,
    apidata:record
})
    }catch(error){
        res.json({
        status:message.status.status500,
        message:error.message
    })
    }
}

exports.productupdate=async(req,res)=>{
    //console.log(req.params.id)
   // console.log(req.body)
    //console.log(req.file)
    if(req.file){
        try{
       
            const id=req.params.id
            const imgname=req.file.filename
            const{name,desc,price,quantity,status}=req.body
            await Product.findByIdAndUpdate(id,{
                name:name,
            desc:desc,
            price:price,
            quantity:quantity,
            status:status,
             img:imgname
            })
            res.json({
                status:message.status.status200,
                message:"successfully created"
            })
        }catch(error){
            res.json({
            status:message.status.status400,
            message:error.message
            })
        
        }
            
    }else{
        try{
       
            const id=req.params.id
            //const imgname=req.file.filename
            const{name,desc,price,quantity,status}=req.body
            await Product.findByIdAndUpdate(id,{
                name:name,
            desc:desc,
            price:price,
            quantity:quantity,
            status:status,
             //img:imgname
            })
            res.json({
                status:message.status.status200,
                message:"successfully created"
            })
        }catch(error){
            res.json({
            status:message.status.status400,
            message:error.message
            })
        
        }

    }
    
    
}

exports.stockdata=async(req,res)=>{
    try{
   const record= await Product.find({status:"IN-STOCK"})
   //console.log(record)
   res.json({
    status:message.status.status200,
    apidata:record
   })
}catch(error){
    res.jaon({
    status:message.status.status500,
    message:error.message

})}

}


exports.cartproducts=async(req,res)=>{
    //console.log(req.body)
   try{
    const {ids}=req.body
    const record=await Product.find({_id:{$in:ids}})
    //console.log(record)
    res.json({
        status:message.status.status200,
        apidata:record
    })
   }catch(error){
    res.json({
        status:message.status.status400,
        message:error.message

    })

   }
    
}
exports.singleproductdelete=async(req,res)=>{
    try{
    //console.log(req.params.id)
    const id=req.params.id
    await Product.findByIdAndDelete(id)
    res.json({
        status:message.status.status201,
        message:"successfully deleted"
    })
}catch(error){
    res.json({
        status:message.status.status500,
        message:error.message

    })

}}

exports.moredetails=async(req,res)=>{
    //console.log(req.params.id)
    try{
    const id=req.params.id
    const record=await Product.findById(id)
    res.json({
        
        status:message.status.status201,
        apidata:record
    })
    }catch(error){
        res.json({
        status:message.status.status500,
        message:error.message
    })
    }
}
