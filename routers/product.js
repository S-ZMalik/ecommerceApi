const express = require("express");

const {getAllProducts} = require("../controllers/product.js");

const routers = express.Router();

routers.route("/").get(getAllProducts);

module.exports = routers;