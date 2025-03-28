const express = require("express");
const cors = require("cors");
const categories = require("./routes/categories");
const sale = require("./routes/sale");
const order = require("./routes/order");
const products = require("./routes/products");
const sequelize = require("./database/database");
const Category = require("./database/models/category");
const Product = require("./database/models/product");

const PORT = process.env.PORT || 3333;

Category.hasMany(Product);

const app = express();
app.use(express.static("public"));

app.use(
  cors({
    origin: "https://pet-shop-ten-azure.vercel.app/",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/categories", categories);
app.use("/products", products);
app.use("/sale", sale);
app.use("/order", order);

const start = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced successfully!");

    app.listen(PORT, () => {
      console.log(`\n\nServer started on port ${PORT}...`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

start();
