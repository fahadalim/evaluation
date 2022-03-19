const mongoose = require("mongoose")
//studentr schema
const studentSchema =new mongoose.Schema(
    {
        rollId:{type:Number,required:true},
        currentbatch:{type:String,required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    },
    {
        timestamps:true
    },
);

const Student = mongoose.model("student",studentSchema)

module.exports = Student;