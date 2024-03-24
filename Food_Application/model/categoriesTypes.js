const mongoose=require('mongoose')
const validator=require('validator')

const catFormsSchema= new mongoose.Schema({
    name:{
        type:String,
        // required:true

    },
    type:{
        type:String
    },
    price:{
        type:String
    },
    detail:{
        type:String
    },
    img:{
        type:String,
        // unique:true
    },
    

})


// mongoose collection name specfied
catFormsSchema.index({name:'text',description:'text'})
const catTypes= new mongoose.model("categoryForms",catFormsSchema)




module.exports=catTypes;