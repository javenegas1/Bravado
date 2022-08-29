const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    title:{type: String, required:true},
    post:{type: String, required:true},
    category:{type: String, required: true},
    company: String,
    image: String,
    comments: [{type: String}]
});

class Post {
    constructor(user, text, timestamp, likeCounter){
        this.user = user
        this.text = text
        //this.timestamp = timestamp
        this.likeCounter = likeCounter
    }

    getUser(){
        return this.user
    }

    getText(){
        return this.text
    }
}

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review