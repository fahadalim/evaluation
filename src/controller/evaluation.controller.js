const express = require("express");
const app = express();


app.get("/evaluation", async (req, res) => {
    try {
      const evaluation = await Evaluation.find().lean().exec();
  
      return res.status(200).send({ evaluation: evaluation }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("/evaluation", async (req, res) => {
    try {
      const evaluation = await Evaluation.create(req.body);
  
      return res.status(201).send(evaluation);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  module.exports = app