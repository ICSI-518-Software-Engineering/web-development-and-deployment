const mongoose = require("mongoose");

const uri = "mongodb://mongodb:27017";

const connectDB = async () => {
  try {
    await mongoose.connect(uri),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
