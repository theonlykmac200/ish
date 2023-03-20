const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


require("dotenv").config()
const PORT =process.env.PORT || 3002;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

app.get ("/", (req, res) => {
    res.send("Hello World")
})


app.listen(process.env.PORT, () => {
    console.log(`I don't want you like a best friend on ${process.env.PORT}`);
  });
