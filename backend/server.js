const express = require('express');
const cors = require('cors');  // <--- import cors
const app = express();

app.use(cors());               // <--- enable cors
app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 40000, description: 'Good laptop' },
  { id: 2, name: 'Phone', price: 15000, description: 'Smartphone' },
  { id: 3, name: 'headset',price:2000, description:'super headset'},
  { id: 4, name: 'mouse',price : 4000, description:'good mouse'},
  { id: 5, name: 'Joystick',price : 40000, description:'nice joystick'}
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
