const express = require("express");
const app = express();
const postModel = require("./model/post.model");
const multer = require('multer');
const uploadFile = require('./services/storage.service');
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})

app.get("/", (req, res) => {
  res.send("shubbham");
});

app.post("/create-post",upload.single("image") ,async (req, res) => {
  const result = await uploadFile(req.file.buffer)
  console.log(result);
  
  res.status(200).json({})
});

module.exports = app;
