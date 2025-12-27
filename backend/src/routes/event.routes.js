const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");
const {
  createEvent,
  getAllEvents,
} = require("../controllers/event.controller");

// ADMIN & ORGANIZER
router.post(
  "/create",
  protect,
  authorizeRoles("ADMIN", "ORGANIZER"),
  createEvent
);

// All logged-in users
router.get("/all", protect, getAllEvents);

module.exports = router;
