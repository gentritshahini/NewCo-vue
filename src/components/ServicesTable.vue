<template>
  <div class="flex flex-col mb-4">
    <div class="mb-2">
      <h2 class="font-bold text-left">List of Services</h2>
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
                  Description
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Active
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
              <tr v-for="service in services" v-bind:key="service.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ service.description }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ service.price }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ service.active ? "Active" : "Not Active" }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ service.created_at }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ service.updated_at }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <button
                    type="button"
                    @click="changeStatus(service.id, service.active)"
                    :class="[
                      service.active
                        ? 'text-white bg-red-400'
                        : 'text-white bg-green-400',
                    ]"
                    class="hover:opacity-75 py-2 px-3 rounded-lg text-sm leading-4 focus:outline-none mr-2"
                  >
                    {{ service.active ? "Deactivate" : "Activate" }}
                  </button>
                  <router-link
                    :to="'/services/' + service.id + '/show'"
                    class="text-white hover:opacity-75 bg-green-400 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
                    >View</router-link
                  >
                  <router-link
                    :to="'/services/' + service.id + '/edit'"
                    class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
                    >Edit</router-link
                  >
                  <button
                    type="button"
                    @click="deleteService(service.id)"
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
  name: "ServicesTable",
  data() {
    return {
      services: [],
    };
  },
  created: function () {
    axios.get("http://localhost/newco/api/services/index.php").then((res) => {
      this.services = res.data.services;
    });
  },
  methods: {
    deleteService(id) {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("http://localhost/newco/api/services/delete.php", {
            params: {
              id: id,
            },
          })
          .then(() => {
            this.services = this.services.filter(function (el) {
              return el.id != id;
            });
          });
      }
    },
    changeStatus(id, status) {
      axios
        .put("http://localhost/newco/api/services/update-status.php", {
          id: id,
          status: status == 1 ? false : true,
        })
        .then(() => {
          this.$router.go(0);
        });
    },
  },
};
</script>
