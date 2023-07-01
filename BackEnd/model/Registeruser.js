const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const regesterUser = new Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("registerUser",regesterUser);