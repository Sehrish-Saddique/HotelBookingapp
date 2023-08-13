 const mongoose = require('mongoose');
require('dotenv').config();
var MONGODB_URI = process.env.MONGODB_URI;
console.log("HEllo Wondera 🕊️  🕊️  🕊️  "+MONGODB_URI);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
var connection = mongoose.connection;
connection.on('error',()=>{console.log('😔 error connecting to db')});
connection.on('connected',()=>{console.log('❤️  ❤️  ❤️    Connected to db')});

module.exports = mongoose;