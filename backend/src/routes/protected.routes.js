const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/auth.middleware");

router.get("/me", protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: "you accessed a protected route",
        user: req.user,
    });
});

module.exports = router;
