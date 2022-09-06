const express = require("express");
//import express from "express";
const colors = require("colors");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/employee.middleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 1227;
const { authPage } = require("./auth");

const authRouter = require("./routes/auth.route");
const empRouter = require("./routes/employee.routes");

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

app.use(
  "/api/employee/create",
  //authPage(["teacher", "student"]),
  empRouter
);
app.use("/api/auth", authRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`server started on ${port}`));
