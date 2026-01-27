const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
shortCode:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Code"
},
domain:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
},
size:{
    type:String,
    required:true,
    enum:["Very Small","Small","Medium","Large","Very Large"],
    default:"Small"
},
severity:{
    type:String,
    enum:["Low","Medium","High","Critical"],
    default:"Low"
},
type:{
    type:String,
    enum:["Internal","External","Maintenance/Support","POC","Other"],
    default:"Internal"
},
projectTitle:{
    type:String,
    trim:true,
    required:true
},
description:{
    type:String,
    required:true
},
// customer:{
//     type:String
// }, 
projectOwner:{
    type:String,
    required:true,
    enum:["CEO","CTO","Project Sponsor","Business Head","Product Owner","Other"]
},
spocPerson:{
    type:String,
    required:true,
    enum:["Project Manager","Product Owner","Technical Analyst","Business Analyst","Team Leader","Employe","Other"] 
},
spocCompanyDivision:{
    type:String,
    required:true,
    enum:["IT","Engineering","Product","Operations","Finance","HR","Marketing","Other"]
},
deliveryHead:{
    type:String,
    required:true
},
projectManager:{
    type:String,
    required:true
},
costUnit:{
    type:String,
    required:true,
    default:"INR"
},
totalCost:{
    type:Number,
    required:true
}
},{timestamps:true})

module.exports = mongoose.model("Project",projectSchema)










// const mongoose = require("mongoose");

// const projectSchema = new mongoose.Schema({
//   shortCode: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Code"
//   },
//   domain: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//     required: true
//   },
//   size: {
//     type: String,
//     enum: ["Very Small", "Small", "Medium", "Large", "Very Large"],
//     default: "Small"
//   },
//   severity: {
//     type: String,
//     enum: ["Low", "Medium", "High", "Critical"],
//     default: "Low"
//   },
//   type: {
//     type: String,
//     enum: ["Internal", "External", "Maintenance/Support", "POC", "Other"],
//     default: "Internal"
//   },
//   projectTitle: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   projectOwner: {
//     type: String,
//     required: true,
//     enum: ["CEO", "CTO", "Project Sponsor", "Business Head", "Product Owner", "Other"]
//   },
//   spocPerson: {
//     type: String,
//     required: true,
//     enum: ["Project Manager", "Product Owner", "Technical Analyst", "Business Analyst", "Team Leader", "Employe", "Other"]
//   },
//   spocCompanyDivision: {
//     type: String,
//     required: true,
//     enum: ["IT", "Engineering", "Product", "Operations", "Finance", "HR", "Marketing", "Other"]
//   },
//   deliveryHead: {
//     type: String,
//     required: true
//   },
//   projectManager: {
//     type: String,
//     required: true
//   },
//   costUnit: {
//     type: String,
//     default: "INR"
//   },
//   totalCost: {
//     type: Number,
//     required: true
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Project", projectSchema);













































































// const mongoose = require("mongoose");

// const projectSchema = new mongoose.Schema({
//     projectName:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     description:{
//         type:String
//     },
//     startDate:{
//         type:Date,
//         required:true
//     },
//     endDate:{
//         type:Date,
//         required:true,
//     },
//     manager:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     },
//     teamLeader:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//        required:true 
//     },
//     teamMembers:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     }],
//     status:{
//         type:String,
//         enum:["Pending","In Progress","Completed"],
//         default:"Pending"
//     }
// },{timestamps:true})

// module.exports = mongoose.model("Project",projectSchema)


















































































































// const mongoose = require("mongoose");

// const projectSchema = new mongoose.Schema({
//     projectName: { type:String, required:true, unique:true, trim:true },
//     description: { type:String },
//     startDate: { type:Date, required:true },
//     endDate: { 
//         type:Date, 
//         required:true,
//         validate: {
//             validator: function(value){ return value > this.startDate },
//             message: "End date must be after start date"
//         }
//     },
//     manager: { type:mongoose.Schema.Types.ObjectId, ref:"User", required:true }, // Manager/Admin assigning project
//     teamLeader: { type:mongoose.Schema.Types.ObjectId, ref:"User" },
//     teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref:"User" }],
//     status: { type:String, enum:["Pending","In Progress","Completed"], default:"Pending" }
// }, { timestamps:true });

// module.exports = mongoose.model("Project", projectSchema);






// const mongoose = require("mongoose");

// const projectSchema = new mongoose.Schema({
//     projectName:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     description:{
//         type:String
//     },
//     startDate:{
//         type:Date,
//         required:true
//     },
//     endDate:{
//         type:Date,
//         required:true,
//     },
//     manager:{ // Admin/Manager assigning project
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     },
//     teamLeader:{ // Leader responsible for project
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true 
//     },
//     teamMembers:[{ // Team members assigned
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     }],
//     status:{
//         type:String,
//         enum:["Pending","In Progress","Completed"],
//         default:"Pending"
//     }
// },{timestamps:true})

// module.exports = mongoose.model("Project",projectSchema)





















// const mongoose = require("mongoose");

// const projectSchema = mongoose.Schema({
//     projectName:{
//         type:String,
//         required:true,
//         unique:true,
//         trim:true
//     },
//     startDate:{
//         type:Date,
//         required:true
//     },
//     endDate:{
//         type:Date,
//         required:true,
//         validate: {
//             validator: function(value){
//                 return value > this.startDate;
//             },
//             message: "End date must be after start date"
//         }
//     },
//     manager:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     },
//     teamLeader:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     teamMembers:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }],
//     status:{
//         type: String,
//         enum: ["Pending","In Progress","Completed"],
//         default:"Pending"
//     }
// },{timestamps:true});

// module.exports = mongoose.model("Project",projectSchema);
