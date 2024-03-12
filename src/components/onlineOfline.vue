<template>
  <div class="pr-1">
    <!-- <h1 class="text-3xl text-gray-800 dark:text-white">
      {{ !onLine ? "offline" : showBackOnLine ? "back online" : message }}
    </h1> -->
    <span class="flex items-center gap-1 bg-green-500 px-2 rounded-lg" v-if="onLine">
      <span
        ><svg
          class="fill-current h-6 w-6 text-white"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="OnlinePredictionOutlinedIcon"
          tabindex="-1"
          title="OnlinePredictionOutlined"
        >
          <path
            d="M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06C19.55 7.53 20.5 9.66 20.5 12s-.95 4.47-2.49 6.01l1.06 1.06C20.88 17.26 22 14.76 22 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93C3.12 6.74 2 9.24 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06C4.45 16.47 3.5 14.34 3.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06C18.22 15.68 19 13.93 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05C5.78 8.32 5 10.07 5 12c0 1.93.78 3.68 2.05 4.95z"
          ></path></svg
      ></span>
      <h1 class="text-lg font-mono font-bold text-white dark:text-green-700 italic">
        online
      </h1>
    </span>
    <span class="flex items-center gap-1 bg-gray-500 rounded-lg px-2" v-else>
      <span
        ><svg
          class="fill-current h-6 w-6 text-white"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="WifiOffOutlinedIcon"
          tabindex="-1"
          title="WifiOffOutlined"
        >
          <path
            d="m21 11 2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zm-2 2c-1.08-1.08-2.36-1.85-3.72-2.33l3.02 3.02.7-.69zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zM3.41 1.64 2 3.05 5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24C7.79 10.89 6.27 11.74 5 13l2 2c1.35-1.35 3.11-2.04 4.89-2.06l7.08 7.08 1.41-1.41L3.41 1.64z"
          ></path></svg
      ></span>
      <h1 class="text-lg font-mono font-bold text-white dark:text-yellow-700 italic">
        offline
      </h1>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "welcome",
      onLine: navigator.onLine,
      showBackOnLine: false,
    };
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = 0;
      this.onLine = type == "online";
    },
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnLine = true;
        setTimeout(() => {
          this.showBackOnLine = false;
        }, 1000);
      }
    },
    mounted() {
      window.addEventListener("online", this.updateOnlineStatus);
      window.addEventListener("offline", this.updateOnlineStatus);
    },
    beforeDestroy() {
      window.removeEventListener("online", this.updateOnlineStatus);
      window.removeEventListener("offline", this.updateOnlineStatus);
    },
  },
};
</script>

<style scoped></style>
