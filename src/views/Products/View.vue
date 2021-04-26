<template>
  <div class="container mx-auto py-3">
    <div class="bg-white shadow sm:rounded-lg mb-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Product Informations
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Product details and Informations.
                </p>
            </div>
            <div>
                <router-link to="/products" class="text-white hover:opacity-75 bg-green-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4">
                    All products
                </router-link>
                <router-link :to="'/products/'+ product.id + '/edit'" class="text-white hover:opacity-75 bg-yellow-300 py-2 px-3 rounded-lg mr-2 text-sm leading-4">
                    Edit
                </router-link>
                <button @click="deleteProduct" class="text-white hover:opacity-75 bg-red-600 py-2 px-3 rounded-lg text-sm leading-4 focus:outline-none">
                    Delete
                </button>
            </div>
        </div>
        <div class="border-t border-gray-200">
            <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.name }}
                    </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Description
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.description }}
                    </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Validity
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.validity }}
                    </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        State
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.state ? 'Active' : 'Not Active' }}
                    </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Created at
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.created_at }}
                    </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Updated at
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ product.updated_at }}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
    <ProductOrdersTable v-if="sales.length > 0" :orders="sales" />
    <AddService :product="product.id" />
    <ProductServicesTable v-if="services.length > 0" :services="services" :product="product.id" />
  </div>
</template>

<script>
  import axios from "axios";
  import ProductOrdersTable from "@/components/ProductOrdersTable.vue";
  import AddService from "@/components/AddService.vue";
  import ProductServicesTable from "@/components/ProductServicesTable.vue";
  export default {
    name: "ProductInformations",
    title: "Product | New Co",
    components: {
        ProductOrdersTable,
        AddService,
        ProductServicesTable,
    },
    data() {
      return {
        product: [],
        sales: [],
        services: [],
      };
    },
    created: function () {
        axios.get("http://localhost/newco/api/products/show.php", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
                this.product = res.data;
                document.title = this.product.name + " | New Co";
        });
        axios.get("http://localhost/newco/api/products/sales.php", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            this.sales = res.data;
        });
        axios.get("http://localhost/newco/api/products/services.php", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            this.services = res.data;
        });
    },
    methods: {
        deleteProduct() {
            if (confirm("Do you really want to delete?")) {
                axios.delete("http://localhost/newco/api/products/delete.php", {
                    params: {
                    id: this.product.id
                    }
                }).then(() => {
                    this.$router.push('/products');
                });
            }
      },
    }
  };
</script>
