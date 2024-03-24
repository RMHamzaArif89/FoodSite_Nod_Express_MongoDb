const express=require('express')
const app=express()

app.use(express.static('static'))
app.use(express.static('upload'))


//require the connection with db
require('./db/conn')

// read the json format
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set('view engine','ejs')
app.set('views','views')





app.listen(3000,()=>{
    console.log('port is listening')
})