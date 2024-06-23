require("dotenv").config();

const Product = require("./model/product.js");

const productJson = require("./product.json");

const connectDB = require("./db/connect.js");

const mongodb_url = process.env.MONGODB_URL;

const startProduct = async () => {
    console.log("start product func start");
    try {
        await connectDB(mongodb_url);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log("startProduct connected function successfuly. ");
    } catch (error) {
        console.log("product db me startproduct wala funtion error:", error);
    }
}

startProduct();
// require("dotenv").config();

// const connectDB = require("./db/connect.js");

// const Product = require("./model/product.js");

// const ProductJson = require("./product.json");

// const startProduct = async () => {
//   console.log("product start start");

//   try {
//       await connectDB(process.env.MONGODB_URI);
//       await Product.deleteMany();
//       await Product.create(ProductJson);
//     console.log("product connected succesfully");
//   } catch (error) {
//     console.log("product is no connected", error);
//   }
// };

// startProduct();
