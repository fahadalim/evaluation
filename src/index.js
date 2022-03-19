const express = require("express");
const mongoose = require("mongoose")

const connect = require("./configs/db")
const app = express();

const User = require("./models/user.models");
const Student = require("./models/student.models")
const Batch = require("./models/batch.models")
const Evaluation = require("./models/evaluation.models")
const Submission = require("./models/submission.models")

const evaluationcontroller = require("./controller/evaluation.controller")
const submissioncontroller = require("./controller/submission.controller")
app.use(express.json())


app.listen (5000,async(req,res)=>{
    try{
        await connect()
    }
    catch(err)
    {
        console.log(err)
    }
    console.log("listening")
});