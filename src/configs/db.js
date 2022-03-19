const mongoose = require("mongoose")


const connect = ()=>{
    return mongoose.connect("mongodb+srv://fahadalim:fahadalim@cluster0.5se3m.mongodb.net/trial?retryWrites=true&w=majority")
};

module.exports =connect