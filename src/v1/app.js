const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// TODO: init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// TODO: init db

// TODO: init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome Node JS eCommerce",
  });
});
// TODO: handing error

module.exports = app;
