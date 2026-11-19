const express = require("express");
const { CreateCertficate } = require("../controllers/Certificate");
const cerTrouter = express.Router();

// create certificate
cerTrouter.post("/", CreateCertficate);

// read certificates

// read certficate

// update certificate

// archive certificate
module.exports = cerTrouter;
