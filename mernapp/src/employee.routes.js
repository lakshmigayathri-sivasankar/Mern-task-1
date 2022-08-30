const express = require("express");
const router = express.Router();
const {
  getemployee,
  setemployee,
  updateemployee,
  deleteemployee,
} = require("./employee.controllers");

router.route("/").get(getemployee).post(setemployee);
router.route("/:id").delete(deleteemployee).put(updateemployee);

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
module.exports = router;
