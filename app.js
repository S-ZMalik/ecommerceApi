const express = require("express");

require("dotenv").config();

const app = express();
const mongodb_url = process.env.MONGODB_URL;

const product_routers = require("./routers/product.js");

const connectDB = require("./db/connect.js")

const PORT = process.env.PORT || 9090;

app.get("/", (req, res) => {
    res.send("this is EComerCe api");
});

app.use("/api/products", product_routers);

const serverStart = async () => {
    try {
        await connectDB(mongodb_url);
        app.listen(PORT, () => {
            console.log("ECOMMERCE API SERVER IS RUNNING:", PORT);
        });
    } catch (error) {
        console.log("this is start function:", error);
    }
}

serverStart();

