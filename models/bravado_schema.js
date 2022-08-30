const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    post:{type: String, required:true},
    //likecounter: Number
    //timestamp: Number
});

const reviewSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    title:{type: String, required:true},
    post:{type: String, required:true},
    category:{type: String, required: true},
    company: String,
    image: String,
    comments: [commentSchema]
});

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
