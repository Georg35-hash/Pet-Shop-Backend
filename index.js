const express = require("express");
const cors = require("cors");
const path = require("path"); // Для работы с путями
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

// Настройка CORS
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin:", origin);
      const regex = /\.vercel\.app$/;
      if (regex.test(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Обслуживаем изображения и другие статики
app.use("/public", express.static(path.join(__dirname, "public")));

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
