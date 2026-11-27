const express = require("express");
const {
  CreateCertficate,
  GetCertificates,
  GetCertificate,
  UpdateCertificate,
} = require("../controllers/Certificate");
const RequireBody = require("../middleware/RequireBod");

const requireAuth = require("../middleware/Auth");
const requireRole = require("../middleware/RequireRole");

const certRouter = express.Router();

certRouter.post(
  "/",
  requireAuth,
  requireRole(["admin"]),
  RequireBody,
  CreateCertficate,
);

certRouter.get("/", requireAuth, requireRole(["admin"]), GetCertificates);

certRouter.get("/:id", requireAuth, requireRole(["admin"]), GetCertificate);

certRouter.put("/:id", requireAuth, requireRole(["admin"]), UpdateCertificate);

module.exports = certRouter;
