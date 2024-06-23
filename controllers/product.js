const Product = require("../model/product.js");

const getAllProducts = async (req, res) => {
  const {name, price, brand, category, sort, select} = req.query;
  const queryObj = {};

  if(name) queryObj.name = {$regex: name, $options: "i"};

  if(price) queryObj.price = {$gte: Number(price)};

  if(brand) queryObj.brand = {$regex: brand, $options: "i"};

  if(category) queryObj.category = category;


  let apiData = Product.find(queryObj);

  if(sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if(select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
   
  let page = Number(req.query.page) ||  1;
  let limit = Number(req.query.limit) || 13;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const ProductData = await apiData;
  res.status(200).json(ProductData);
};

module.exports = { getAllProducts };
