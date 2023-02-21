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
// require("./databases/init.mongodb.lv0");
require("./databases/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();

// TODO: init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome Node JS eCommerce",
  });
});
// TODO: handing error

module.exports = app;
