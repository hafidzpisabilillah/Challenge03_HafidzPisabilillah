var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login");
});
router.post("/", function (req, res) {
  res.redirect("/dashboard");
});

module.exports = router;
