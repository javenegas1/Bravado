const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    post:{type: String, required:true},
    timeStamp: Number,
    image: String,
    comments: [{type: Comment}]
});

const Comment = {
    user: {type: String, required:true},
    text:{type: String, required:true},
    timeStamp: Number,
    likeCounter: Number
}



