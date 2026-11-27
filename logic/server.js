require("dotenv").config();

const express = require("express");
const ConnectDB = require("./config/DB");
const certRouter = require("./routes/certificate");
const userRouter = require("./routes/user");
const messagesRouter = require("./routes/message");
const adminRoutes = require("./routes/admin");
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

app.use("/api/v1/messages", messagesRouter);
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/certificates", certRouter);
app.use("/api/v1/admin", adminRoutes);

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
