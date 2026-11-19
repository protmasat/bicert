const express = require("express");
const ConnectDB = require("./config/DB");
const cerTrouter = require("./routes/certificate");
const errorHandler = require("./middleware/ErrorHandler");
const messagesRouter = require("./routes/message");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.disable("x-powered-by");

const PORT = process.env.PORT || "3410";

app.use("api/v1/certificates", cerTrouter);
app.use("/api/v1/messages", messagesRouter);

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Everything working well",
  });
});

app.use("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Try a different path",
  });
});

app.use(errorHandler);

app.use((req, res, err, next) => {
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Listening at: http://localhost:${PORT}/`);
});
