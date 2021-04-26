<template>
  <div class="container mx-auto py-3">
    <div class="mb-3 flex justify-between">
      <h1 class="text-2xl font-bold text-left uppercase">Products</h1>
      <router-link to="/products/create" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Create Product
      </router-link>
    </div>
    <ProductsTable />
    <ProductsOutOfStockTable />
  </div>
</template>

<script>
import ProductsTable from "@/components/ProductsTable.vue";
import ProductsOutOfStockTable from "@/components/ProductsOutOfStockTable.vue";
export default {
  name: "Products",
  title: "Products | New Co",
  components: {
    ProductsTable,
    ProductsOutOfStockTable
  },
};
</script>
