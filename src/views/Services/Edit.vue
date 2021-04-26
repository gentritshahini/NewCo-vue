<template>
    <div class="container mx-auto py-3">
        <div class="mb-3">
            <h1 class="text-2xl font-bold text-left uppercase">Update Service</h1>
        </div>
        <div class="mt-5 md:col-span-2">
            <div class="shadow sm:rounded-md">
                <form @submit="checkForm">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="max-w-3xl mb-4">
                            <label for="description" class="block text-sm font-medium text-gray-700 text-left">Description</label>
                            <input type="text" v-model="form.description" id="description" class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Description of service" />
                        </div>
                        <div class="max-w-3xl mb-4">
                            <label for="price" class="block text-sm font-medium text-gray-700 text-left">Price</label>
                            <input type="number" step=".01" v-model="form.price" id="price" class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Price of service" />
                        </div>
                        <div class="max-w-3xl mb-4">
                            <label for="active" class="block text-sm font-medium text-gray-700 text-left">Status</label>
                            <select id="active" v-model="form.active" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="1" selected>Active</option>
                                <option value="0">Not Active</option>
                            </select>
                        </div>
                        <div>
                            <p v-for="error in errors" v-bind:key="error" class="text-red-800 text-left text-sm">*{{ error }}</p>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <router-link to="/services" class="px-3 pt-2 mr-2 text-black text-sm">
                            cancel
                        </router-link>
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
    name: "ServiceEdit",
    title: "Update Service | New Co",
    data() {
      return {
        form : [],
        errors: [],
      };
    },
    created: function () {
        axios.get("http://localhost/newco/api/services/show.php", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            this.form = res.data;
            document.title = "Update " + this.form.description + " | New Co";
        });
    },
    methods: {
        checkForm(e) {
            this.errors = [];
            if (!this.form.description)
                this.errors.push('Description is required.');
            
            if (!this.form.price)
                this.errors.push('Price is required.');

            if (isNaN(this.form.active))
                this.errors.push('Status is required.');
            
            if (this.errors == '') {           
                axios.put("http://localhost/newco/api/services/update.php", {
                    id: this.form.id,
                    description: this.form.description,
                    price: parseFloat(this.form.price),
                    active: (this.form.active == 1) ? true : false
                }).then(() => {
                    this.$router.push('/services/'+ this.form.id + '/show');
                }, (error) => {
                    this.errors.push(error.message);
                });
            }
            e.preventDefault();
        },
    },
  };
</script>