<template>
    <div class="container mx-auto py-3">
        <div class="mb-3">
            <h1 class="text-2xl font-bold text-left uppercase">Create Shop</h1>
        </div>
        <div class="mt-5 md:col-span-2">
            <div class="shadow sm:rounded-md">
                <form @submit="checkForm">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="max-w-3xl mb-4">
                            <label for="name" class="block text-sm font-medium text-gray-700 text-left">Name</label>
                            <input type="text" v-model="form.name" id="name" class="px-4 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Name of shop" />
                        </div>
                        <div class="max-w-3xl mb-4">
                            <label for="city" class="block text-sm font-medium text-gray-700 text-left">City</label>
                            <select id="city" v-model="form.location_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="0" selected disabled>Select a city</option>
                                <option v-for="location in locations" v-bind:key="location.id" :value="location.id">
                                    {{ location.city }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <p v-for="error in errors" v-bind:key="error" class="text-red-800 text-left text-sm">*{{ error }}</p>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <router-link to="/shops" class="px-3 pt-2 mr-2 text-black text-sm">
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
    name: "CreateShop",
    title: "Create Shop | New Co",
    data() {
      return {
        locations: [],
        form : {
            name : '',
            location_id: 0,
        },
        errors: [],
      };
    },
    created: function () {
        axios.get("http://localhost/newco/api/locations/index.php").then((res) => {
            this.locations = res.data.locations;
        });
    },
    methods: {
        checkForm(e) {
            this.errors = [];
            if (!this.form.name)
                this.errors.push('Name of shop is required.');
            
            if (!this.form.location_id)
                this.errors.push('City is required.');
            
            if (this.errors == '') {           
                axios.post("http://localhost/newco/api/shops/create.php", {
                    name: this.form.name,
                    location_id: this.form.location_id
                }).then(() => {
                    this.$router.push('/shops');
                }, (error) => {
                    this.errors.push(error.message);
                });
            }
            e.preventDefault();
        },
    },
  };
</script>