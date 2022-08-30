const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const { errorHandler } = require("./employee.middleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3002;

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.get("/api/goals", (req, res) => {
//res.send("get goals");
//res.json({ message: "Get Goals" });
// res.status(200).json({ message: "get goals" });
//});

app.use("/api/employeelist", require("./employee.routes"));
app.use(errorHandler);
app.listen(port, () => console.log(`server started on ${port}`));
