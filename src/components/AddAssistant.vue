<template>
  <div class="mb-4">
    <div class="mb-3">
      <h1 class="text-xl font-bold text-left">Add assistant to Shop</h1>
    </div>
    <form @submit="checkForm">
      <div class="px-4 py-5 bg-white sm:p-6">
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
            <option value="0" selected disabled>Select an Assistant</option>
            <option
              v-for="assistant in assistants"
              v-bind:key="assistant.id"
              :value="assistant.id"
            >
              {{ assistant.name + " " + assistant.surename }}
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
  name: "AddAssistant",
  data() {
    return {
      assistants: [],
      errors: [],
      form: {
        assistant_id: 0,
      },
    };
  },
  created: function () {
    axios
      .get("http://localhost/newco/api/assistants/not-part-of-shop.php", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.assistants = res.data;
      });
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if (!this.form.assistant_id) this.errors.push("Assistant is required.");

      if (this.errors == "") {
        axios.put("http://localhost/newco/api/assistants/update-shop.php", {
          id: this.form.assistant_id,
          shop_id: this.$route.params.id,
        });
        this.assistants = this.assistants.filter(function (el) {
          return el.id != this.form.assistant_id;
        });
        this.form.assistant_id = 0;
      }
      e.preventDefault();
    },
  },
};
</script>
