const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(()=>{
    console.log("Database connected succesfully !");
})
.catch(()=>{
    console.log('Database not connected');
})

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection = mongoose.model('LoginSignUpTutorial',LoginSchema)

module.exports = collection