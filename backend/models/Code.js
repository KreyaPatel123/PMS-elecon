const mongoose = require("mongoose")

const codeSchema = new mongoose.Schema({
    shortCode:{
        type:String,
        unique:true,
        index:true,
    }
},
    {timestamps:true}
)
module.exports = mongoose.model("Code",codeSchema)
















// const mongoose = require("mongoose");

// const codeSchema = new mongoose.Schema(
//   {
//     shortCode: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Code", codeSchema);
