<template>
    <section class="text-gray-600 body-font mb-4">
        <div class="container py-12 mx-auto">
            <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
                <router-link :to="'/assistants/'+ best.id + '/show'">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 my-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="flex-grow text-left">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Best Assistant</h2>
                        <p class="leading-relaxed text-base">Full name: <b>{{ best.name + ' ' + best.surename }}</b></p>
                        <p class="leading-relaxed text-base">Shop: <b>{{ best.shop }}</b></p>
                        <p class="leading-relaxed text-base">Orders: <b>{{ best.total_orders }}</b></p>
                        <p class="leading-relaxed text-base">Total: <b>{{ best.total ? (best.total).toFixed(2) : 0 }} $</b></p>
                    </div>
                    </div>
                </router-link>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
                <router-link :to="'/assistants/'+ worst.id + '/show'">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 my-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="flex-grow text-left">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Worst Assistant</h2>
                        <p class="leading-relaxed text-base">Full name: <b>{{ worst.name + ' ' + worst.surename }}</b></p>
                        <p class="leading-relaxed text-base">Shop: <b>{{ worst.shop }}</b></p>
                        <p class="leading-relaxed text-base">Orders: <b>{{ worst.total_orders }}</b></p>
                        <p class="leading-relaxed text-base">Total: <b>{{ worst.total ? worst.total : 0 }} $</b></p>
                    </div>
                    </div>
                </router-link>
            </div>
            </div>
        </div>
    </section>
</template>
<script>
  import axios from "axios";
  export default {
    name: "TopAssistants",
    data() {
      return {
        best: [],
        worst: []
      };
    },
    created: function () {
        axios.get("http://localhost/newco/api/assistants/best.php").then((res) => {
            this.best = res.data;
        });

        axios.get("http://localhost/newco/api/assistants/worst.php").then((res) => {
            this.worst = res.data;
        });
    },
  };
</script>