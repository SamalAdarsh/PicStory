const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    image:{
        type:String,
    },
    caption:{
        type:String,
    }
})

const PostModel = mongoose.model("Post",postSchema);

module.exports = PostModel;