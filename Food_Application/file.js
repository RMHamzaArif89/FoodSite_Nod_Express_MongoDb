const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const validator=require('validator')
const path=require('path')
const session=require('express-session')
const multer=require('multer')
const flash = require('express-flash')
const cookieParser=require('cookie-parser')
const jwt=require('jsonwebtoken')





app.use(express.static('static'))
app.use("/upload",express.static('upload'))


//require the connection with db
require('./db/conn')

//categories
const categoriesDetail = require('./model/catgories')
const catTypes=require('./model/categoriesTypes')

// read the json format
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set('view engine','ejs')
app.set('views','views')


//home index
app.get('/home',async(req,res)=>{
    const category=await categoriesDetail.find({}).limit(5)
    const cat1=await catTypes.find({name:'burger'}).sort({_id:-1}).limit(5)
    const cat2=await catTypes.find({name:'sand'}).sort({_id:-1}).limit(5)
    const cat3=await catTypes.find({name:'beef'}).sort({_id:-1}).limit(5)
    const newCat=await catTypes.find({}).sort({_id:-1}).limit(5)

    res.render('index',{category,cat1,cat2,cat3,newCat})
})


app.listen(3000,()=>{
    console.log('port is listening')
})