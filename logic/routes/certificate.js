const express = require("express");
const {
  CreateCertficate,
  GetCertificates,
  GetCertificate,
  UpdateCertificate,
} = require("../controllers/Certificate");
const certRouter = express.Router();

// create certificate
certRouter.post("/", CreateCertficate);

// read certificates
certRouter.get("/", GetCertificates);

// read certficate
certRouter.get("/:id", GetCertificate);

// update certificate
certRouter.put("/:id", UpdateCertificate);

// archive certificate

module.exports = certRouter;
