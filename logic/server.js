const express = require("express");
const ConnectDB = require("./config/DB");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.disable("x-powered-by");

const PORT = process.env.PORT || "3410";

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Everything working well",
  });
});

app.use("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Try a different path",
  });
});

app.use((req, res, err, next) => {
  res.status(500).json({
    sucess: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Listening at: http://localhost:${PORT}/`);
});
