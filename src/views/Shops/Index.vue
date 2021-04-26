<template>
  <div class="container mx-auto py-3">
    <TopAssistants />
    <div class="mb-3 flex justify-between">
      <h1 class="text-2xl font-bold text-left uppercase">Shops</h1>
      <router-link
        to="/shops/create"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Shop
      </router-link>
    </div>
    <ShopsTable />
  </div>
</template>

<script>
import ShopsTable from "@/components/ShopsTable";
import TopAssistants from "../../components/TopAssistants.vue";
export default {
  name: "Shops",
  title: "Shops | New Co",
  components: {
    ShopsTable,
    TopAssistants,
  },
};
</script>
