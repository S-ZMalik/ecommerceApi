const mongoose = require("mongoose");

const connectDBFunc = async (url) => {
   console.log("connect db wala function");
   try {
    await mongoose.connect(url);
    console.log("connect db function connected");
   } catch (error) {
    
   }
}

module.exports = connectDBFunc;
