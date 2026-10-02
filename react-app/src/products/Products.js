import React, { useEffect, useState } from 'react';

import { ListHeader } from '../components';
import ProductList from './ProductList';

const data = [
  {
    id: 10,
    name: 'Strawberries',
    description: '16oz package of fresh organic strawberries',
    quantity: 1,
  },
  {
    id: 20,
    name: 'Sliced bread',
    description: 'Loaf of fresh sliced wheat bread',
    quantity: 1,
  },
  {
    id: 30,
    name: 'Apples',
    description: 'Bag of 7 fresh McIntosh apples',
    quantity: 1,
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => setProducts([...data]);

  useEffect(getProducts, []);

  return (
    <div className="content-container">
      <ListHeader
        title="Products"
        handleRefresh={getProducts}
        routePath="/products"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Products;
