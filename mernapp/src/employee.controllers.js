const asyncHandler = require("express-async-handler");

const Employee = require("./employee.model");

//@desc   Get employee
//@route  Get/api/employeelist
//@access private
const getemployee = asyncHandler(async (req, res) => {
  const task = await Employee.find();
  res.status(200).json(task);
});

//@desc   Set employee
//@route  POST/api/employeelist
//@access private
const setemployee = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a text field");
  }
  if (!req.body.username) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a username field");
  }
  if (!req.body.password) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a password field");
  }
  if (!req.body.firstname) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a firstname field");
  }
  if (!req.body.lastname) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a lastname field");
  }
  if (!req.body.dob) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a dob field");
  }
  if (!req.body.doj) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a doj field");
  }
  if (!req.body.status) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a status field");
  }
  if (!req.body.emailid) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a emailid field");
  }
  if (!req.body.contactno) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a contact field");
  }
  if (!req.body.role) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a role field");
  }
  const goal = await Employee.create({
    text: req.body.text,
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob: req.body.dob,
    doj: req.body.doj,
    status: req.body.status,
    emailid: req.body.emailid,
    contactno: req.body.contactno,
    role: req.body.role,
  });
  res.status(200).json(goal);
});

//@desc   Update employee
//@route  PUT/api/employeelist/:id
//@access private

const updateemployee = asyncHandler(async (req, res) => {
  const task = await Employee.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("employee not found");
  }

  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updated);
});

//@desc   delete goals
//@route  delete/api/employeelist/:id
//@access private
const deleteemployee = asyncHandler(async (req, res) => {
  const task = await Employee.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("employee not found");
  }

  await task.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getemployee,
  setemployee,
  updateemployee,
  deleteemployee,
};
