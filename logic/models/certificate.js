const mongoose = require("mongoose");
const crypto = require("crypto");

const certificateSchema = new mongoose.Schema(
  {
    IdNumber: {
      type: String,
      unique: true,
      immutable: true,
      default: () => `BCERTZ-${crypto.randomUUID()}`,
    },

    placeBorn: {
      type: String,
      required: [true, "Place of birth is required"],
      trim: true,
    },

    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    sex: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Sex is required"],
    },

    fathername: {
      type: String,
      required: [true, "Father's name is required"],
      trim: true,
    },

    fatherPoB: {
      type: String,
      required: [true, "Father's place of birth is required"],
      trim: true,
    },

    mothername: {
      type: String,
      required: [true, "Mother's name is required"],
      trim: true,
    },

    motherPoB: {
      type: String,
      required: [true, "Mother's place of birth is required"],
      trim: true,
    },

    birthDate: {
      type: Date,
      required: [true, "Birth date is required"],
    },

    registrationDate: {
      type: Date,
      required: [true, "Registration date is required"],
      default: Date.now,
    },

    registrarGeneral: {
      type: String,
      enum: ["director", "general", "minister"],
      required: [true, "Registrar General is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
