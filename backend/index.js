const express = require("express")
const app = express();

require("dotenv").config();
const PORT =process.env.PORT || 3000

const dbConnection = require("./config/database")
dbConnection();
//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const UserRoutes = require("./routes/User")
const CategoryRoutes = require("./routes/Category")
app.use("/api/v1/user",UserRoutes)
app.use("/api/v1/category",CategoryRoutes)



app.listen(PORT,()=>{
    console.log(`App is listen in PORT ${PORT}`);
})