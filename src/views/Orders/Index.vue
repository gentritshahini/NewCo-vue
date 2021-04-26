<template>
  <div class="container mx-auto py-3">
    <div class="mb-3 flex justify-between">
      <h1 class="text-2xl font-bold text-left uppercase">Orders</h1>
      <router-link
        to="/orders/create"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sell Product
      </router-link>
    </div>
    <OrdersTable />
  </div>
</template>

<script>
import OrdersTable from "@/components/OrdersTable.vue";

export default {
  name: "Orders",
  title: "Orders | New Co",
  components: {
    OrdersTable,
  },
};
</script>
