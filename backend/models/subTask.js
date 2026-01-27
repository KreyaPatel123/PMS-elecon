const mongoose = require("mongoose")

const subTaskSchema = new mongoose.Schema({
    videoUrl:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    }
})

module.exports = mongoose.Schema("subTask",subTaskSchema);