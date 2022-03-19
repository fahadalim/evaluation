const mongoose = require("mongoose")

//batch schema

const batchSchema = new mongoose.Schema(
    {
        batchname:{type:String,required:true},

    },
    {
        timestamps:true
    },
);
const Batch = mongoose.model("batch",batchSchema)

module.exports= Batch;