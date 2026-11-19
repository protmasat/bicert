/**
 ID, Place born, name, sex, father's name, fathers country place of birth, 
mother's name, mother's name place of birth,
birth date, registrationDate, registrarGeneral
 */

const mongoose = require("mongoose");

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const now = `BCERTZ-${day}/${month}/${year}-${Math.floor(Math.random() * 1000)}`;

const certSchema = new mongoose.Schema(
  {
    IdNumber: {
      type: Number,
      default: now,
      unqiue: true,
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
      default: Date.now,
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

const Certficate = mongoose.model("certificate", certSchema);
module.exports = Certficate;
