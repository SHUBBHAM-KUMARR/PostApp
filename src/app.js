const express = require("express");
const cors = require('cors');
const app = express();
const postModel = require("./model/post.model");
const multer = require('multer');
const uploadFile =  require('./services/storage.service');
app.use(express.json());
app.use(cors())
const upload = multer({storage:multer.memoryStorage()})

app.get("/", (req, res) => {
  res.send(
    [
      {
        name:"shubham kumar"
      }
    ] 
  );
});
app.get("/create-post",async(req,res)=>{
  const post = await postModel.find()
  res.status(200).json({
    message:"posts found",
    post:post
  })
})
app.post("/create-post",upload.single("image") ,async (req, res) => {
  console.log(req.file.buffer);
  
  const result = await uploadFile(req.file.buffer)
  console.log(result);
  
  await postModel.create({
    images:result.url,
    caption:req.body.caption
  })

  
  res.status(200).json({
    message:"post uploaded successfully"
  })
});

module.exports = app;
