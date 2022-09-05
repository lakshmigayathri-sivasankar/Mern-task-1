const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //console.log("Hello mongo", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected:${conn.connection.host}`.red.bgCyan);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
