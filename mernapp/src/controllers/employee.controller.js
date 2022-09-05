const asyncHandler = require("express-async-handler");

const Employee = require("../model/employee.model");

//@desc   Get goals
//@route  Get/api/goals
//@access private
const getEmployee = asyncHandler(async (req, res) => {
  const task = await Employee.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    result: task,
    message: "fetched all the records",
  });
});

//@desc   Set goals
//@route  POST/api/goals
//@access private
const setEmployee = asyncHandler(async (req, res) => {
  const {
    taskID,
    username,
    password,
    firstname,
    lastname,
    dob,
    doj,
    status,
    contactno,
    role,
  } = req.body;
  if (
    !taskID &&
    !username &&
    !password &&
    !firstname &&
    !lastname &&
    !dob &&
    !doj &&
    !status &&
    !contactno &&
    !role
  ) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add  text field");
  }
  console.log("req.user::", req.user);
  const task = await Employee.create({
    taskID: taskID,
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    dob: dob,
    doj: doj,
    status: status,
    role: role,
    contactno: contactno,
  });
  res.status(200).json({
    success: true,
    result: task,
    message: "successfully added",
  });
});

//@desc   Update goals
//@route  PUT/api/goals/:id
//@access private
const updateEmployee = asyncHandler(async (req, res) => {
  const task = await Employee.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Employee not found");
  }

  const updatedGoal = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

//@desc   delete goals
//@route  delete/api/goals/:id
//@access private
const deleteEmployee = asyncHandler(async (req, res) => {
  const task = await Employee.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Employee not found");
  }

  await task.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEmployee,
  setEmployee,
  updateEmployee,
  deleteEmployee,
};
