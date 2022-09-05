const mongoose = require('mongoose');

const Review = require('../models/bravado_schema')

const userSchema = new mongoose.Schema ({
    username:{type: String, required:true, unique: true},
    email:{type: String, required:true, unique: true},
    password:{type: String, required:true},
    // bookmarks: [Review]
});

const User = mongoose.model('User', userSchema)

module.exports = User
