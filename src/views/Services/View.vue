<template>
  <div class="container mx-auto py-3">
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6 flex justify-between">
        <div class="text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Service Informations
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Service details and Informations.
          </p>
        </div>
        <div>
          <router-link
            to="/services"
            class="text-white hover:opacity-75 bg-green-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            All services
          </router-link>
          <router-link
            :to="'/services/' + service.id + '/edit'"
            class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            Edit
          </router-link>
          <button
            @click="deleteService"
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
            <dt class="text-sm font-medium text-gray-500">Description</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ service.description }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Price</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ service.price }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Active</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ service.active ? "Active" : "Not Active" }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Created at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ service.created_at }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Updated at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ service.updated_at }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Service Informations",
  title: "Service | New Co",
  data() {
    return {
      service: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/services/show.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.service = res.data;
        document.title = this.service.description + " | New Co";
      });
  },
  methods: {
    deleteService() {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("http://localhost/newco/api/services/delete.php", {
            params: {
              id: this.services.id,
            },
          })
          .then(() => {
            this.$router.push("/shops");
          });
      }
    },
  },
};
</script>
