<template>
  <div class="w-60 pl-5 bg-blue-100 py-5 border-double border-4 border-blue-300">
    <div class="text-black h-screen">
      <div class="">
        <h1><b>Admin Panel</b></h1>
      </div>
      <div class="">
        <ul class="p-4 gap-5">
          <li>
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="dashShow">
                <svg
                  class="w-5 h-5 border-none"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="HomeIcon"
                  tabindex="-1"
                  title="Home"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
                <h1 class="pl-3">Dashboard</h1>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="report">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ProductionQuantityLimitsIcon"
                >
                  <path
                    d="M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                  ></path>
                </svg>
                <h1 class="pl-3">Reports</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div class="flex flex-row">
              <button class="flex flex-row" @click.prevent="event">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ProductionQuantityLimitsIcon"
                >
                  <path
                    d="M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                  ></path>
                </svg>
                <h1 class="pl-3">Events</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const mMore = ref(false);

const event = () => {
  router.replace("/woreda/event");
};
const dashShow = () => {
  router.replace("/woreda/dashboard");
};
const report = () => {
  router.replace("/woreda/report");
};
</script>
