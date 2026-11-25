const express = require("express");
const { LoginAdmin, RegisterAdmin } = require("../controllers/adminController");
const requireAuth = require("../middleware/Auth");
const requireRole = require("../middleware/RequireRole");
const adminRoutes = express.Router();

// register
adminRoutes.post(
  "/register",
  requireAuth,
  requireRole(["admin"]),
  RegisterAdmin,
);

adminRoutes.post("/login", LoginAdmin);

module.exports = adminRoutes;
