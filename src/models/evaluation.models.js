const mongoose = require("mongoose")
//evaluation schema
const evaluationSchema = new mongoose.Schema(
    {
        dateOfEvaluation:{type:String,required:true},
        evaluationScore:{type:Number,required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true},

    }
);
const Evaluation  = mongoose.model("evaluation",evaluationSchema)

module.exports = Evaluation;