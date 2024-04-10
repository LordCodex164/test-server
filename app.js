const express  = require('express')
const app = express()
const quiz = require("./routes/quiz")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
app.use(express.urlencoded({extended: false}))



mongoose
  .connect(process.env.mongoUrL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db is not connected. This is the" + err));

app.get("/", (req, res) => {
  res.status(200).json({ status: "testing" });
});



app.listen(8000 || process.env.PORT, () => {
  console.log("app is connected and listening on port 8000");
});