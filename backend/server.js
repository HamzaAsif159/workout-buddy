require("dotenv").config();

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

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on PORT", process.env.PORT);
});
