import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((p, i) => (
        <div key={i} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
