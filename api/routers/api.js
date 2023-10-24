const router=require("express").Router()
const { Router } = require("express")
const regc=require("../controllers/regcontroller")
const productc=require("../controllers/productcontroller")
const multer=require("multer")


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

let upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*4}
})


router.post("/reg",regc.registration)
router.post("/logincheck",regc.logincheck)
router.post("/productadd",upload.single("file"),productc.add)
router.get("/allproducts",productc.allproducts)
router.get("/singleproduct/:id",productc.singleproduct)
router.put("/productupdate/:id",upload.single("file"),productc.productupdate)    //remember this method is always put for update
router.get("/stockdata",productc.stockdata)
router.post("/cartproducts",productc.cartproducts)
router.get("/singleproductdelete/:id",productc.singleproductdelete)
router.get("/moredetailssingleproducts/:id",productc.moredetails)




module.exports=router