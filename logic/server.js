require("dotenv").config();

const express = require("express");
const ConnectDB = require("./config/DB");
const cerTrouter = require("./routes/certificate");
const messagesRouter = require("./routes/message");
const errorHandler = require("./middleware/ErrorHandler");

const app = express();

app.use(express.json());
app.disable("x-powered-by");

const PORT = process.env.PORT || 3410;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Everything working well",
  });
});

app.use("/api/v1/certificates", cerTrouter);
app.use("/api/v1/messages", messagesRouter);

// no route matched
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Listening at: http://localhost:${PORT}/`);
});
