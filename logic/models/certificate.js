/**
 ID, Place born, name, sex, father's name, fathers country place of birth, 
mother's name, mother's name place of birth,
birth date, registrationDate, registrarGeneral
 */

const mongoose = require("mongoose");
const certSchema = new mongoose.Schema(
  {
    IdNumber: {
      type: Number,
      default: "TZ" + Date.now + Math.floor(Math.random * 1000),
    },
    placeBorn: {
      type: String,
      required: [true, "place of birth is required"],
    },
    name: {
      type: String,
      required: [true, "first name is required"],
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: [true, "sex is required"],
    },
    fathername: {
      type: String,
      required: [true, "father's name is required"],
    },
    fatherPoB: {
      type: String,
      required: [true, "father's place of birth is required"],
    },
    mothername: {
      type: String,
      required: [true, "mother's name is required"],
    },
    motherPoB: {
      type: String,
      required: [true, "mother's place of birth is required"],
    },
    birthDate: {
      type: String,
      required: [true, "birth date is required"],
    },
    registrationDate: {
      type: Date,
      required: [true, "registration date is required"],
    },
    registrarGeneral: {
      type: String,
      enum: ["director", "general", "minister"],
      required: [true, "registration date is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Certficate = mongoose.model("certificates", certSchema);
module.exports = Certficate;
