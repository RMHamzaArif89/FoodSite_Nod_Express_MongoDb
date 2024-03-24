const mongoose=require('mongoose')
const validator=require('validator')

const categoriesSchema= new mongoose.Schema({
    name:{
        type:String,
        // required:true

    },
    type:{
        type:String
    },
    img:{
        type:String,
        // unique:true
    }

})


// mongoose collection name specfied
const categoriesDetail= new mongoose.model("categoriesDetail",categoriesSchema)




module.exports=categoriesDetail;
