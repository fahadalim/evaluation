const express = require("express");
const app = express();


  
app.get("/submission", async (req, res) => {
    try {
      const submission = await Submission.find().populate().lean().exec();
  
      return res.status(200).send({ submission: submission }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });

  module.exports = app