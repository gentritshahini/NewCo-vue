<template>
  <div class="container mx-auto py-3">
    <div class="mb-3 flex justify-between">
      <h1 class="text-2xl font-bold text-left uppercase">Services</h1>
      <router-link
        to="/services/create"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Service
      </router-link>
    </div>
    <ServicesTable />
    <TopSoldServices />
  </div>
</template>

<script>
import ServicesTable from "@/components/ServicesTable.vue";
import TopSoldServices from "@/components/TopSoldServices.vue";
export default {
  name: "Services",
  title: "Services | New Co",
  components: {
    ServicesTable,
    TopSoldServices,
  },
};
</script>
