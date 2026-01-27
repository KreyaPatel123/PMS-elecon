const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum:["Pending","In Progress","Completed"],
        default:"Pending"
    },
    //aa task kai sudhi complete thase teni date
    deadline:{
        type:Date,
        required:true,
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    teamLeader:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    teamMembers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }],
    // subTask:[{
    //     //team leader subtask assign karse--->and te task na title and niche work bev joi sakse
    //     //team member khali subtask add karse...te task create nai kari sake
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"subTask",
    //     required:true,
    // }]

},{timestamps:true})

module.exports = mongoose.model("Task",taskSchema);



















































































// const taskSchema = new mongoose.Schema({
//     project: { type: mongoose.Schema.Types.ObjectId, ref:"Project", required:true },
//     assignedTo: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:true }, // Team member
//     title: { type:String, required:true },
//     description: { type:String },
//     status: { type:String, enum:["Pending","In Progress","Completed"], default:"Pending" },
//     feedback: { type:String }, // Daily/weekly feedback
//     date: { type: Date, default: Date.now }
// }, { timestamps:true });

// module.exports = mongoose.model("Task", taskSchema);




// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
//     taskName:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String
//     },
//     status:{
//         type:String,
//         enum:["Pending","In Progress","Completed"],
//         default:"Pending"
//     },
//     deadline:{
//         type:Date,
//         required:true
//     },
//     project:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Project",
//         required:true
//     },
//     teamLeader:{ // responsible leader for this task
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     },
//     teamMembers:[{ // can assign to multiple members
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         required:true
//     }],
//     feedback:[{ // daily feedback/check from team members
//         user:{
//             type: mongoose.Schema.Types.ObjectId,
//             ref:"User",
//             required:true
//         },
//         comment:{ type:String },
//         date:{ type:Date, default: Date.now }
//     }]
// },{timestamps:true})

// module.exports = mongoose.model("Task",taskSchema);
