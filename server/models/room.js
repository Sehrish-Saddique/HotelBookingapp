const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    maxcount:{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    imageUrl:[],
    currentbookings:[],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }, 
    
        //  timestamp: true // This enables timestamps for the created and updated fields
     
    }, { timestamps: true });

    

const roomModel = mongoose.model('Rooms',roomSchema);
module.exports = roomModel;
