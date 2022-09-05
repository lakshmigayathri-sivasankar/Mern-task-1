const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");
const {
  getEmployee,
  setEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");

router.route("/").get(getEmployee).post(protect, setEmployee);
router.route("/:id").delete(deleteEmployee).put(updateEmployee);

module.exports = router;

/*router.get("/", (req, res) => {
  //res.send("get goals");
  //res.json({ message: "Get Goals" });
  res.status(200).json({ message: "get goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "set goals" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});
*/
