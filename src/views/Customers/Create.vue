<template>
  <div class="container mx-auto py-3">
    <div class="mb-3">
      <h1 class="text-2xl font-bold text-left uppercase">Create Customer</h1>
    </div>
    <div class="mt-5 md:col-span-2">
      <div class="shadow sm:rounded-md">
        <form @submit="checkForm">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="max-w-3xl mb-4">
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 text-left"
                >Name</label
              >
              <input
                type="text"
                v-model="form.name"
                id="name"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="Name of customer"
              />
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="surename"
                class="block text-sm font-medium text-gray-700 text-left"
                >Surename</label
              >
              <input
                type="text"
                v-model="form.surename"
                id="surename"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="Surename of customer"
              />
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="address"
                class="block text-sm font-medium text-gray-700 text-left"
                >Address</label
              >
              <input
                type="text"
                v-model="form.address"
                id="address"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="Address of customer"
              />
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="phone_number"
                class="block text-sm font-medium text-gray-700 text-left"
                >Phone number</label
              >
              <input
                type="text"
                v-model="form.phone_number"
                id="phone_number"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="Phone number of customer"
              />
            </div>
            <div>
              <p
                v-for="error in errors"
                v-bind:key="error"
                class="text-red-800 text-left text-sm"
              >
                *{{ error }}
              </p>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <router-link
              to="/customers"
              class="px-3 pt-2 mr-2 text-black text-sm"
            >
              cancel
            </router-link>
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateCustomer",
  title: "Create Customer | New Co",
  data() {
    return {
      form: {
        name: "",
        surename: "",
        address: "",
        phone_number: "",
      },
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if (!this.form.name) this.errors.push("Name is required.");

      if (!this.form.surename) this.errors.push("Surename is required.");

      if (!this.form.address) this.errors.push("Address is required.");

      if (!this.form.phone_number)
        this.errors.push("Phone number is required.");

      if (this.errors == "") {
        axios
          .post("http://localhost/newco/api/customers/create.php", {
            name: this.form.name,
            surename: this.form.surename,
            address: this.form.address,
            phone_number: this.form.phone_number,
          })
          .then(
            () => {
              this.$router.push("/customers");
            },
            (error) => {
              this.errors.push(error.message);
            }
          );
      }
      e.preventDefault();
    },
  },
};
</script>
