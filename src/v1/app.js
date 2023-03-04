"use strict";

const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

// TODO: init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO: init db
// require("./databases/init.mongodb.lv0");
require("./databases/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();

// TODO: init routes
app.use("/", require("./routes"));
// TODO: handing error

module.exports = app;
