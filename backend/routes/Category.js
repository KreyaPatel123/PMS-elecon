const express = require("express")
const route = express.Router();

const {createCategory,getAllCategory} = require("../controllers/Category")
route.post("/createCategory",createCategory)
route.get("/getAllCategory",getAllCategory)

module.exports = route;