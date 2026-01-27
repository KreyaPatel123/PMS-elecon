const express = require("express")
const route = express.Router();

const {signUp,login} = require("../controllers/Auth")
const {createShortCode} = require("../controllers/Code")
const {createProject} = require("../controllers/Project")
route.post("/signup",signUp)
route.post("/login",login)
route.post("/createShortCode",createShortCode)
route.post("/createProject",createProject)
module.exports = route
