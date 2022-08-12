const express = require("express");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/error.middleware");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use("/api/v1/habits", require("./routes/habit.routes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
