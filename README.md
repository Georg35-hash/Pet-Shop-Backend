# Pet Shop Backend

## Description

This is the backend part of the project of an online store of goods for pets. It implements REST API for working with categories, products and orders.

## Project structure

- `/database`
- `/models`
- `category.js`: Category model
- `product.js`: Product model
- `database.js`: SQLite database connection setup
- `/public`
- `/category_img`: Category images
- `/product_img`: Product images
- `/routes`
- `categories.js`: Category routes
- `order.js`: Order routes
- `products.js`: Product routes
- `sale.js`: Sales routes
- `index.js`: Main server file
- `database.sqlite`: SQLite database file
- `package.json` and `package-lock.json`: Project dependency files
- `README.md`: Project description

## Installation and run

1. Clone the repository:

```bash
git clone <repo URL>
```

2. Go to the project folder:

```bash
cd <project folder name>
```

3. Install dependencies:

```bash
npm install
```

4. Run the server:

```bash
npm run dev
```

The server will be started and will listen for requests on port 3333.

## Test the API

You can test the API via Postman or a browser.

### API Route Examples

- Get all categories: `GET /categories/all`
- Get products by category: `GET /categories/:id`
- Get all products: `GET /products/all`
- Get product by ID: `GET /products/:id`
- Place an order: `POST /order/send`
- Place a coupon request: `POST /sale/send`

### Request Example

#### Get all categories

```bash
axios.get('http://localhost:3333/categories/all')
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error);
});
```

#### Checkout

```bash
const orderData = {
name: "John Doe",
phone: "1234567890",
email: "johndoe@example.com",
products: [
{
id: 1,
quantity: 2
},
{
id: 2,
quantity: 1
}
]
};

axios.post('http://localhost:3333/order/send', orderData, {
headers: {
'Content-Type': 'application/json'
}
})
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error);
});
```

## Technologies used

- Node.js
- Express
- Sequelize
- SQLite
- Cors
- Axios
