<template>
  <div class="flex flex-col">
    <div class="mb-2">
      <h2 class="font-bold text-left">List of Assistants</h2>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Surename
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Working at
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created at
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Updated at
                </th>
                <th scope="col" class="relative px-6 py-3"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="assistant in assistants" v-bind:key="assistant.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ assistant.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ assistant.surename }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ assistant.shop }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ assistant.created_at }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ assistant.updated_at }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <router-link
                    :to="'/assistants/' + assistant.id + '/show'"
                    class="text-white hover:opacity-75 bg-green-400 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
                    >View</router-link
                  >
                  <router-link
                    :to="'/assistants/' + assistant.id + '/edit'"
                    class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
                    >Edit</router-link
                  >
                  <button
                    type="button"
                    @click="deleteAssistant(assistant.id)"
                    class="text-white hover:opacity-75 bg-red-600 py-2 px-3 rounded-lg text-sm leading-4 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AssistantsTable",
  data() {
    return {
      assistants: [],
    };
  },
  created: function () {
    axios.get("http://localhost/newco/api/assistants/index.php").then((res) => {
      this.assistants = res.data.assistants;
    });
  },
  methods: {
    deleteAssistant(id) {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("http://localhost/newco/api/assistants/delete.php", {
            params: {
              id: id,
            },
          })
          .then(() => {
            this.assistants = this.assistants.filter(function (el) {
              return el.id != id;
            });
          });
      }
    },
  },
};
</script>
