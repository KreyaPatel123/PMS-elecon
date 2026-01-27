const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Mongodb Connected successfully");
  } catch (error) {
    console.log("Mongodb Connection failed", error.message);
    process.exit(1);
  }
};
module.exports = dbConnection;
