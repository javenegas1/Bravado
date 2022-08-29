const mongoose = require('mongoose');

// environment loading .env file into process.env object 
require('dotenv').config();

// console.log(process.env.MONGODB_URI)

// get the MongoDB URL from .env file
const connectionStr = process.env.MONGO_KEY;

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));