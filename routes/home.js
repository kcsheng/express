const express = require("express");
const router = express.Router();
router.get("", (req, res) => {
  res.render("index", {
    title: "My Express App",
    heading1: "Welcome to my courses",
  });
});
module.exports = router;
