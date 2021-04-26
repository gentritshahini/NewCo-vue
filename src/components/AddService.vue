<template>
  <div class="mb-4">
    <div class="mb-3">
      <h1 class="text-xl font-bold text-left">Add service to Product</h1>
    </div>
    <form @submit="checkForm">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="max-w-3xl mb-4">
          <label
            for="service"
            class="block text-sm font-medium text-gray-700 text-left"
            >Service</label
          >
          <select
            id="service"
            v-model="form.service_id"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="0" selected disabled>Select a Service</option>
            <option
              v-for="service in services"
              v-bind:key="service.id"
              :value="service.id"
            >
              {{ service.description }}
            </option>
          </select>
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
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddService",
  props: {
    product: Number,
  },
  data() {
    return {
      product_id: this.product,
      services: [],
      errors: [],
      form: {
        service_id: 0,
      },
    };
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/services/index.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.services = res.data.services;
      });
  },
  watch: {
    product: function (newVal) {
      axios
        .get("http://localhost/newco/api/products/services.php", {
          params: {
            id: newVal,
          },
        })
        .then((res) => {
          let listOfServices = res.data.map((s) => s.id);
          this.services = this.services.filter(function (el) {
            return !listOfServices.includes(el.id);
          });
        });
    },
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if (!this.form.service_id) this.errors.push("Service is required.");

      if (!this.product) this.errors.push("Product is required.");

      if (this.errors == "") {
        axios.put("http://localhost/newco/api/services/add-product.php", {
          id: this.form.service_id,
          product_id: this.product,
        });
        this.services = this.services.filter(function (el) {
          return el.id != this.form.service_id;
        });
        this.form.service_id = 0;
      }
      e.preventDefault();
    },
  },
};
</script>
