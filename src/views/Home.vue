<template>
  <div class="container mx-auto py-3">
    <div class="mb-3">
      <h1 class="text-2xl font-bold text-left uppercase">Dashboard</h1>
    </div>
    <div class="grid grid-cols-3 gap-4 mb-4">
      <router-link to="/shops" class="hover:shadow rounded-lg">
        <div class="border border-gray-200 p-6 rounded-lg mr-auto">
          <div
            class="w-10 h-10 table-cell align-middle rounded-full bg-indigo-100 text-indigo-500 mb-4"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="my-2">
            <h2 class="text-lg text-gray-900 font-medium title-font text-left">
              Shops Informations
            </h2>
          </div>
          <div>
            <p class="leading-relaxed text-base text-left">
              Here you can add/modify shop informations.
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/assistants" class="hover:shadow rounded-lg">
        <div class="border border-gray-200 p-6 rounded-lg mr-auto">
          <div
            class="w-10 h-10 table-cell align-middle rounded-full bg-indigo-100 text-indigo-500 mb-4"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="my-2">
            <h2 class="text-lg text-gray-900 font-medium title-font text-left">
              Shop Assistants Informations
            </h2>
          </div>
          <div>
            <p class="leading-relaxed text-base text-left">
              Here you can add/modify shop assistant informations.
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/services" class="hover:shadow rounded-lg">
        <div class="border border-gray-200 p-6 rounded-lg mr-auto">
          <div
            class="w-10 h-10 table-cell align-middle rounded-full bg-indigo-100 text-indigo-500 mb-4"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 mx-auto"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path
                d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
              ></path>
            </svg>
          </div>
          <div class="my-2">
            <h2 class="text-lg text-gray-900 font-medium title-font text-left">
              Services
            </h2>
          </div>
          <div>
            <p class="leading-relaxed text-base text-left">
              Here you can add/modify services.
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/products" class="hover:shadow rounded-lg">
        <div class="border border-gray-200 p-6 rounded-lg mr-auto">
          <div
            class="w-10 h-10 table-cell align-middle rounded-full bg-indigo-100 text-indigo-500 mb-4"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 mx-auto"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
              ></path>
            </svg>
          </div>
          <div class="my-2">
            <h2 class="text-lg text-gray-900 font-medium title-font text-left">
              Products
            </h2>
          </div>
          <div>
            <p class="leading-relaxed text-base text-left">
              Here you can add/modify products.
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/customers" class="hover:shadow rounded-lg">
        <div class="border border-gray-200 p-6 rounded-lg mr-auto">
          <div
            class="w-10 h-10 table-cell align-middle rounded-full bg-indigo-100 text-indigo-500 mb-4"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <div class="my-2">
            <h2 class="text-lg text-gray-900 font-medium title-font text-left">
              Customers Informations
            </h2>
          </div>
          <div>
            <p class="leading-relaxed text-base text-left">
              Here you can add/modify customers informations.
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/orders" class="hover:shadow rounded-lg">
        <div class="border border-gray-200 p-6 rounded-lg mr-auto">
          <div
            class="w-10 h-10 table-cell align-middle rounded-full bg-indigo-100 text-indigo-500 mb-4"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="my-2">
            <h2 class="text-lg text-gray-900 font-medium title-font text-left">
              Orders
            </h2>
          </div>
          <div>
            <p class="leading-relaxed text-base text-left">
              Here you can see orders and sell a product.
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  title: "Dashboard | New Co",
};
</script>
