const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const Item = require("./models/Item");
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "./dist")));

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Parse JSON bodies
app.use(express.json());

// First POST route
app.post("/add", (req, res, next) => {
  try {
    const { num1, num2 } = req.body;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Both num1 and num2 must be numbers");
    }

    const result = num1 + num2;
    res.json({ result });
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
});

// Second POST route
app.post("/create-item", upload.single("image"), async (req, res) => {
  const { name, quantity } = req.body;
  const image = req.file.filename;

  try {
    const newItem = new Item({
      name,
      quantity,
      image,
    });

    await newItem.save();
    console.log("Item saved to MongoDB:", newItem);

    res.json({ message: "Item created successfully" });
  } catch (error) {
    console.error("Error saving item to MongoDB:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET route
app.get("/get-items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items from MongoDB:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PATCH route
app.patch("/update-item/:id", async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE route
app.delete("/delete-item/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/register", (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const newUser = new User({ firstname, lastname, email, password });
    newUser.save();
    res.json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
    return;
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user)
    return res
      .status(400)
      .json({ msg: "User does not exist or incorrect credentials." });
  const { firstname, lastname } = user;
  return res.json({ msg: "Login successful", user: { email, firstname, lastname } });
});

app.get("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  const {  email, firstname, lastname, id } = user;
  res.json({  email, firstname, lastname, id });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Catch-all route to serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
