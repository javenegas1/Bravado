const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    post:{type: String, required:true},
    //likecounter: Number
    //timestamp: Number
    post: mongoose.Types.ObjectId
});

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment