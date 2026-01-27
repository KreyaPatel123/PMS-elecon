const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    middleName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        // required:true
    },
    contactNumber:{
        type:String
    },
    accountType:{
        type:String,
        enum:["Admin","Manager","Member"],
        default:"Member"
    },
    project:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    image:{
        type:String
    },
    newPassword:{
        type:String,
    },
    projectProgress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"projectProgress"
    },
    resetPasswordExpires:{
        type:Date,
    },
    token:{
        type:String
    },
    // category:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Category"
    // }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)






















































// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//     firstName: { type:String, required:true, trim:true },
//     middleName:{ type:String, trim:true },
//     lastName: { type:String, required:true, trim:true },
//     email: { type:String, required:true, trim:true, unique:true },
//     password: { type:String, required:true },
//     contactNumber: { type:String },
//     role: { type:String, enum:["Admin","Manager","Member"], default:"Member" },
//     task:[{ type:mongoose.Schema.Types.ObjectId, ref:"Task" }],
//     image: { type:String },
//     newPassword: { type:String },
//     taskProgress:{ type:mongoose.Schema.Types.ObjectId, ref:"TaskProgress" },
//     resetPasswordExpires:{ type:Date },
//     token:{ type:String }
// },{timestamps:true});

// module.exports = mongoose.model("User",userSchema);
