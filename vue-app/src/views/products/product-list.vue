<script>
import CardContent from '@/components/card-content.vue';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  components: { CardContent },
};
</script>

<template>
  <div>
    <div v-if="!products.length">Loading data ...</div>
    <ul class="list">
      <li v-for="product in products" :key="product.id" role="presentation">
        <div class="card">
          <CardContent
            :name="product.name"
            :description="product.description"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
