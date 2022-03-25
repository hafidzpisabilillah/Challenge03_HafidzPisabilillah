var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var loginRouter = require("./routes/login");
var usersRouter = require("./routes/users");
var dashboardRouter = require("./routes/dashboard");
var table = require("./routes/table");
// nama variable dan nama routing
var carss = require("./routes/car");
// add car
var addcar = require("./routes/addcar")

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public/", express.static("./public"));

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/table", table);
app.use("/dashboard", dashboardRouter);
// Manggil link di dashboard dan variable diatas 
// klo udh bru ke routing
app.use("/mobil", carss);
app.use("/addcar", addcar);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
