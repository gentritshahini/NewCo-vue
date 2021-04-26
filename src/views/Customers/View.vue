<template>
  <div class="container mx-auto py-3">
    <div class="bg-white shadow sm:rounded-lg mb-4">
      <div class="px-4 py-5 sm:px-6 flex justify-between">
        <div class="text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Customer Informations
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Customer details and Informations.
          </p>
        </div>
        <div>
          <router-link
            to="/customers"
            class="text-white hover:opacity-75 bg-green-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            All customers
          </router-link>
          <router-link
            :to="'/customers/' + customer.id + '/edit'"
            class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4"
          >
            Edit
          </router-link>
          <button
            @click="deleteCustomer"
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
              {{ customer.name }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Surename</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ customer.surename }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ customer.address }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ customer.phone_number }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Created at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ customer.created_at }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Updated at</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ customer.updated_at }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <CustomersProductsTable />
    <CustomerServicesTable />
  </div>
</template>

<script>
import axios from "axios";
import CustomersProductsTable from "@/components/CustomersProductsTable.vue";
import CustomerServicesTable from "../../components/CustomerServicesTable.vue";
export default {
  components: {
    CustomersProductsTable,
    CustomerServicesTable,
  },
  name: "CustomerInformations",
  title: "Customer | New Co",
  data() {
    return {
      customer: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/customers/show.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.customer = res.data;
        document.title = this.customer.name + " | New Co";
      });
  },
  methods: {
    deleteCustomer() {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("http://localhost/newco/api/customers/delete.php", {
            params: {
              id: this.customer.id,
            },
          })
          .then(() => {
            this.$router.push("/customers");
          });
      }
    },
  },
};
</script>
