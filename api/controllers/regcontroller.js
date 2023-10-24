const reg = require("../models/reg")
const Reg=require("../models/reg")
const helpers=require("../helpers/message")



exports.registration=async(req,res)=>{
    //console.log(req.body)
   
    const{username,password}=req.body 
    const usercheck=await Reg.findOne({username:username})
    try{

        if(usercheck===null){const record=new Reg({username:username,
            password:password})
record.save()
res.json({
message:helpers.messages.creation,
apiData:record,
status:helpers.status.status201
})}
else{res.json({
    message:"username allready taken",
    status:helpers.status.status400
})
}
    }catch(error){
        res.json({
        
            message:error.message,
            status:helpers.status.status400
  
        })


    }
}

exports.logincheck=async(req,res)=>{
    //console.log(req.body)
    const{username,password}=req.body
    try{
    const record=await Reg.findOne({username:username})
    //console.log(record)
    if(record!==null){
        if(record.password==password){
            res.json({
            status:helpers.status.status200,
            apiData:record
        })}
        
        else{
           res.json({
            status:helpers.status.status400,
            message:"wrong credentials"
        })
        }
     }
     else{
       res.json({
        status:helpers.status.status400,
        message:"wrong credentials"
    })

    }
    }catch(error){
        res.json({
            status:helpers.status.status400,
            message:error.message
        })
    }

}
