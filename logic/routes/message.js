const express = require("express");
const RequireBody = require("../middleware/RequireBod");
const {
  SendMessage,
  GetMessages,
  GetMessage,
  UpdateMessageStatus,
} = require("../controllers/message");

const messagesRouter = express.Router();

messagesRouter.post("/", RequireBody, SendMessage);

messagesRouter.get("/", GetMessages);

messagesRouter.get("/:id", GetMessage);

messagesRouter.put("/:id", RequireBody, UpdateMessageStatus);

module.exports = messagesRouter;
