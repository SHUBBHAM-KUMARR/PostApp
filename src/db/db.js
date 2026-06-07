const mongoose = require('mongoose');

async function connectDB(){
  await mongoose.connect("mongodb://localhost:27017/PostApp")
  console.log("connected to db");
  
}

module.exports = connectDB