const express = require('express');
const multer = require('multer');
const uploadFile=require('./services/storage.service')
const cors = require('cors');
const PostModel = require('./models/post-model')

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})

app.post('/create-post', upload.single("image"),async(req,res)=>{
         console.log(req.body);
         console.log(req.file);

         const result = await uploadFile(req.file.buffer);

         const post = await PostModel.create({
            image: result.url,
            caption: req.body.caption
         })

         res.status(201).json({
            message: "post created successfully",
         })
})

app.get('/posts',async(req,res)=>{
    const posts = await PostModel.find();

       res.status(200).json({
            message: "posts fetched successfully",
            post: posts
         })
})


module.exports = app;