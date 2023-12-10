const express=require("express")
const path=require("path")
const hbs=require('hbs')
const collection = require("./mongoDb")
const templatesPath = path.join(__dirname,"../templates")

const app = express()

app.use(express.json())
app.set('view engine','hbs')
app.set("views",templatesPath)
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render("register")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post('/signup',async (req,res)=>{

    const data = {
        name: req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("home")

})

app.post('/login',async (req,res)=>{
    try{
const check = await collection.findOne({name:req.body.name})

if(check.password=== req.body.password){
    res.render("home")
}else{
    res.send("wrong password")
}

    }
    catch{
res.send("Wrong details")
    }
})

app.listen(3000,()=>{
    console.log("Server is listening on Port : 3000");
})