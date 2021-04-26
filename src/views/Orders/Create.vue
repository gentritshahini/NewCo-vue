<template>
  <div class="container mx-auto py-3">
    <div class="mb-3">
      <h1 class="text-2xl font-bold text-left uppercase">Sell Product</h1>
    </div>
    <div class="mt-5 md:col-span-2">
      <div class="shadow sm:rounded-md">
        <form @submit="checkForm">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="max-w-3xl mb-4">
              <label
                for="product_id"
                class="block text-sm font-medium text-gray-700 text-left"
                >Product</label
              >
              <select
                id="product_id"
                v-model="form.product_id"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="0" selected>Select a Product</option>
                <option
                  v-for="item in products"
                  v-bind:key="item.id"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="customer"
                class="block text-sm font-medium text-gray-700 text-left"
                >Customer</label
              >
              <select
                id="customer"
                v-model="form.customer_id"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="0" selected>Select a Customer</option>
                <option
                  v-for="item in customers"
                  v-bind:key="item.id"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="assistant"
                class="block text-sm font-medium text-gray-700 text-left"
                >Assistant</label
              >
              <select
                id="assistant"
                v-model="form.assistant_id"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="0" selected>Select an Assistant</option>
                <option
                  v-for="item in assistants"
                  v-bind:key="item.id"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="amount"
                class="block text-sm font-medium text-gray-700 text-left"
                >Amount</label
              >
              <input
                type="number"
                step="1"
                v-model="form.amount"
                id="amount"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="Name of shop"
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
            <router-link to="/orders" class="px-3 pt-2 mr-2 text-black text-sm">
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
  name: "CreateOrder",
  title: "Sell Product | New Co",
  data() {
    return {
      products: [],
      customers: [],
      assistants: [],
      form: {
        product_id: 0,
        customer_id: 0,
        assistant_id: 0,
        amount: 1,
      },
      errors: [],
    };
  },
  created: function () {
    axios.get("http://localhost/newco/api/products/active.php").then((res) => {
      this.products = res.data.products;
    });
    axios.get("http://localhost/newco/api/assistants/index.php").then((res) => {
      this.assistants = res.data.assistants;
    });
    axios.get("http://localhost/newco/api/customers/index.php").then((res) => {
      this.customers = res.data.customers;
    });
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if (!this.form.product_id) this.errors.push("Product is required.");

      if (!this.form.customer_id) this.errors.push("Customer is required.");

      if (!this.form.assistant_id) this.errors.push("Assistant is required.");

      if (!(this.form.amount > 0))
        this.errors.push("Amount should be gretter than 1.");

      if (this.errors == "") {
        axios
          .post("http://localhost/newco/api/orders/create.php", {
            product_id: this.form.product_id,
            customer_id: this.form.customer_id,
            assistant_id: this.form.assistant_id,
            amount: parseInt(this.form.amount),
          })
          .then(
            () => {
              this.$router.push("/orders");
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
