const Event = require("../models/event.model");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, venue, capacity } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      venue,
      capacity,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error("CREATE EVENT ERROR:", error);
    res.status(500).json({
      message: "Failed to create event",
      error: error.message,
    });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("createdBy", "name email role")
      .sort({ date: 1 });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    console.error("FETCH EVENTS ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};
