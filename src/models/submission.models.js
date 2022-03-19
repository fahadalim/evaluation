const mongoose = require("mongoose")

//submission schema

const submissionSchema = new mongoose.Schema(
    {
        evaluationId:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        studentid:{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true},
        marks:{type:Number,required:true}
    },
    {
        timestamps:true
    },
);

const Submission = mongoose.model("submission",submissionSchema)

module.exports = Submission