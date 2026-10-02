<script>
import ListHeader from '@/components/list-header.vue';
import ProductList from './product-list.vue';

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

export default {
  name: 'Products',
  components: {
    ListHeader,
    ProductList,
  },
  data() {
    return { products: [] };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.products = [...data];
    },
  },
};
</script>

<template>
  <div class="content-container">
    <ListHeader
      title="Products"
      route-path="/products"
      @refresh="getProducts"
    />
    <div class="columns is-multiline is-variable">
      <div class="column is-8">
        <ProductList :products="products" />
      </div>
    </div>
  </div>
</template>
