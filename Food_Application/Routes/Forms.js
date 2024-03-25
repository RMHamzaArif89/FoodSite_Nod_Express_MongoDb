const express=require('express')
const router=express.Router()
const multer=require('multer')


const categoriesDetail = require('../model/catgories')
const catForms=require('../model/categoriesTypes')





// img upload
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "./upload")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      return cb(null,`${uniqueSuffix}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage:Storage })










router.get('/addCategories',(req,res)=>{
let category=[]
    res.render('addCategories',{category})
})
//admin Categories
router.post('/addcategory',upload.single('img'),async(req,res)=>{
    
    const data=new categoriesDetail({
        name:req.body.name,
        type:req.body.type,
        img:req.file.filename
    })
    try{
        // console.log(req.body.name)
    
    await categoriesDetail.create(data)
    res.redirect('/categories')

}catch(e){
    res.status(400).send(e)
}
})






//add forms
router.get('/addForms',(req,res)=>{
    let category=[]
    res.render('addCategoriesTypes',{category})
})
router.post('/addCatForms',upload.single('img'),async(req,res)=>{
    
    const data=new catForms({
        name:req.body.name,
        type:req.body.type,
        price:req.body.price,
        detail:req.body.detail,
        img:req.file.filename
    })
    try{
        // console.log(req.body.name)
    
    await catForms.create(data)
   res.redirect('/categoryForms')

}catch(e){
    res.status(400).send(e)
}
})






module.exports=router;
