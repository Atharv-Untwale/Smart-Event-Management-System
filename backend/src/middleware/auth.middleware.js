const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  console.log("---- AUTH MIDDLEWARE HIT ----");

  try {
    console.log("Headers:", req.headers);

    const authHeader = req.headers.authorization;
    console.log("Auth Header:", authHeader);

    if (!authHeader) {
      console.log("❌ No Authorization header");
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

    if (!authHeader.startsWith("Bearer ")) {
      console.log("❌ Authorization header malformed");
      return res.status(401).json({ message: "Not authorized, malformed token" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token:", token);

    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("❌ JWT VERIFY ERROR:", error.name);
    console.log("❌ JWT VERIFY MESSAGE:", error.message);

    return res.status(401).json({
      message: "Not authorized, token invalid",
      error: error.message,
    });
  }
};
