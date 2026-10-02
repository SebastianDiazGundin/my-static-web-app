<script>
  import { onMount } from 'svelte';
  import { ListHeader } from '../components';
  import ProductList from './ProductList.svelte';

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

  let products = [];

  const getProducts = () => (products = [...data]);

  onMount(getProducts);
</script>

<div class="content-container">
  <ListHeader title="Products" routePath="/products" on:refresh={getProducts} />
  <div class="columns is-multiline is-variable">
    <div class="column is-8">
      <ProductList {products} />
    </div>
  </div>
</div>
