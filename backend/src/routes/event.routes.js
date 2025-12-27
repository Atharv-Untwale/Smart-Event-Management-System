const express =  require ("express");
const router = express.Router();

const {protect} = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

router.post(
    "/create",
    protect,
    authorizeRoles("ADMIN", "ORGANIZER"),
    (req, res) => {
        res.status(201).json({
            success: true,
            message: "Event created successfully",
            createdBy: req.user.role,
        });
    }
);

router.get("/all", protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Events fetched",
        role: res.user.role,
    });
});

module.exports = router;