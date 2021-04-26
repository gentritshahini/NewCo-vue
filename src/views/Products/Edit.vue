<template>
  <div class="container mx-auto py-3">
    <div class="mb-3">
      <h1 class="text-2xl font-bold text-left uppercase">Update Product</h1>
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
                placeholder="Name of product"
              />
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700 text-left"
                >Description</label
              >
              <input
                type="text"
                v-model="form.description"
                id="description"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                placeholder="Description of product"
              />
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="validity"
                class="block text-sm font-medium text-gray-700 text-left"
                >Validity</label
              >
              <input
                type="datetime-local"
                v-model="form.validity"
                id="validity"
                class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div class="max-w-3xl mb-4">
              <label
                for="state"
                class="block text-sm font-medium text-gray-700 text-left"
                >State</label
              >
              <select
                id="state"
                v-model="form.state"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="0" selected>Not Active</option>
                <option value="1">Active</option>
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
            <router-link
              to="/products"
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
  name: "ProductEdit",
  title: "Update Product | New Co",
  data() {
    return {
      form: [],
      errors: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/products/show.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.form = res.data;
        this.form.validity = this.setDatetime(this.form.validity);
        document.title = "Update " + this.form.name + " | New Co";
      });
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.form.name) this.errors.push("Name of product is required.");

      if (!this.form.description)
        this.errors.push("Description of product is required.");

      if (!this.form.validity) this.errors.push("Validity is required.");

      if (isNaN(this.form.state)) this.errors.push("State is required.");

      if (this.errors == "") {
        axios
          .put("http://localhost/newco/api/products/update.php", {
            id: this.form.id,
            name: this.form.name,
            description: this.form.description,
            validity: this.form.validity,
            state: this.form.state == 1 ? true : false,
          })
          .then(() => {
            this.$router.push("/products/" + this.form.id + "/show");
          });
      }
      e.preventDefault();
    },
    setDatetime(validity) {
      let dateVal = new Date(validity);
      let day = dateVal.getDate().toString().padStart(2, "0");
      let month = (1 + dateVal.getMonth()).toString().padStart(2, "0");
      let hour = dateVal.getHours().toString().padStart(2, "0");
      let minute = dateVal.getMinutes().toString().padStart(2, "0");
      return (
        dateVal.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        "T" +
        hour +
        ":" +
        minute
      );
    },
  },
};
</script>
