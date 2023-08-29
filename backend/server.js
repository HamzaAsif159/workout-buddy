require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const workoutRouter = require("./routes/workout");

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/workout", workoutRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on PORT", process.env.PORT);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
