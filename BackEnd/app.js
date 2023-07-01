const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

//MiddleWare

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/books-store")
  .then(() => {
    console.log("DB connected");
  })
  // .then(() => {
    
  // })
  .catch((err) => {
    console.log(err);
  });
// mongoose.connect("mongodb+srv://admin:P9aILZu8ghFRAxVd@cluster0.3gfb5mg.mongodb.net/bookstore?retryWrites=true&w=majority")
// .then(()=>{console.log('DB is Connected')}).then(()=>{
//     app.listen(5000)
// }).catch(err=>console.log(err,"Error"))
// P9aILZu8ghFRAxVd
app.use("/books", router);
// app.use("/signup", router);
app.listen(3000, () => {
    console.log(3000);
  });