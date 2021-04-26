<template>
  <div class="container mx-auto py-3">
    <div class="mb-3 flex justify-between">
      <h1 class="text-2xl font-bold text-left uppercase">Assistants</h1>
      <router-link
        to="/assistants/create"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Assistant
      </router-link>
    </div>
    <AssistantsTable />
  </div>
</template>

<script>
import AssistantsTable from "@/components/AssistantsTable";
export default {
  name: "Assistants",
  title: "Assistants | New Co",
  components: {
    AssistantsTable,
  },
};
</script>
