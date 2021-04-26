<template>
  <div class="container mx-auto py-3">
    <div class="bg-white shadow sm:rounded-lg mb-4">
      <div class="px-4 py-5 sm:px-6 flex justify-between">
        <div class="text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Shop Informations
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Shop details and Informations.
          </p>
        </div>
        <div>
          <router-link
            to="/shops"
            class="text-white hover:opacity-75 bg-green-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            All shops
          </router-link>
          <router-link
            :to="'/shops/' + shop.id + '/edit'"
            class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            Edit
          </router-link>
          <button
            @click="deleteShop"
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
              {{ shop.name }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Location</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ shop.location }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Created at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ shop.created_at }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Updated at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ shop.updated_at }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <AddAssistant />
    <ShopOrdersTable />
  </div>
</template>

<script>
import axios from "axios";
import AddAssistant from "@/components/AddAssistant.vue";
import ShopOrdersTable from "../../components/ShopOrdersTable.vue";
export default {
  name: "ShopInformations",
  title: "Shop | New Co",
  data() {
    return {
      shop: [],
    };
  },
  components: {
    AddAssistant,
    ShopOrdersTable,
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/shops/show.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.shop = res.data;
        document.title = this.shop.name + " | New Co";
      });
  },
  methods: {
    deleteShop() {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("http://localhost/newco/api/shops/delete.php", {
            params: {
              id: this.shop.id,
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
