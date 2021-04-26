<template>
  <div class="container mx-auto py-3">
    <div class="bg-white shadow sm:rounded-lg mb-4">
      <div class="px-4 py-5 sm:px-6 flex justify-between">
        <div class="text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Assistant Informations
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Assistant details and Informations.
          </p>
        </div>
        <div>
          <router-link
            to="/assistants"
            class="text-white hover:opacity-75 bg-green-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            All assistants
          </router-link>
          <router-link
            :to="'/assistants/' + assistant.id + '/edit'"
            class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            Edit
          </router-link>
          <button
            @click="deleteAssistant"
            class="text-white hover:opacity-75 bg-red-600 py-2 px-3 rounded-lg text-sm leading-4 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ assistant.name }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Surename</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ assistant.surename }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Working at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ assistant.shop }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Created at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ assistant.created_at }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Updated at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ assistant.updated_at }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <AssistantOrdersTable />
  </div>
</template>

<script>
import axios from "axios";
import AssistantOrdersTable from "../../components/AssistantOrdersTable.vue";
export default {
  components: { AssistantOrdersTable },
  name: "AssistantInformations",
  title: "Assistant | New Co",
  data() {
    return {
      assistant: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/assistants/show.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.assistant = res.data;
        document.title = this.assistant.name + " | New Co";
      });
  },
  methods: {
    deleteAssistant() {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("http://localhost/newco/api/assistants/delete.php", {
            params: {
              id: this.assistant.id,
            },
          })
          .then(() => {
            this.$router.push("/assistants");
          });
      }
    },
  },
};
</script>
