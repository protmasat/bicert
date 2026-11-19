const Message = require("../models/message");
// const SendMail = require("../utils/SendMail");

const mongoose = require("mongoose");

// create message
const SendMessage = async (req, res, next) => {
  
    const { name, email, message } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }
    if (!message) {
      return res
        .status(400)
        .json({ success: false, message: "Message is required" });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
      status: "pending",
    });

    // fire and forget: the user's request no longer depends on email delivery
    // SendMail(email, name, message).catch((err) =>
    //   console.error("Email failed:", err.message),
    // );

    res
      .status(201)
      .json({ success: true, message: "Message sent", data: newMessage });
};

// read messages
const GetMessages = async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });

  if (messages.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No message found" });
  }

  res.status(200).json({
    success: true,
    message: "Messages retrieved",
    data: messages,
  });
};

// read message
const GetMessage = async (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid message id" });
    }

    const message = await Message.findById(id);

    if (!message) {
      return res
        .status(404)
        .json({ success: false, message: "No message found" });
    }

    res.status(200).json({
      success: true,
      message: "Message retrieved",
      data: message,
    });
  
};

const UpdateMessageStatus = async (req, res, next) => {
  
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res.status(400).json({ message: "message not found" });
    }

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid message id" });
    }

    const VALID_STATUSES = ["pending", "resolved", "inprogress"];

    if (!VALID_STATUSES.includes(status)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid status" });
    }

    const updatedBody = await Message.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedBody) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({
      success: true,
      message: "Messages updated",
      data: updatedBody,
    });
  
};

// update message

module.exports = {
  SendMessage,
  GetMessage,
  GetMessages,
  UpdateMessageStatus,
};
