const express = require('express');
const cors = require('cors');  // <--- import cors
const app = express();

app.use(cors());               // <--- enable cors
app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 500, description: 'Good laptop' },
  { id: 2, name: 'Phone', price: 200, description: 'Smartphone' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
