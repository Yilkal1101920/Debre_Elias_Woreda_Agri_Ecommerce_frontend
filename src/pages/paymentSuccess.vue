<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="text-lg text-gray-800 dark:text-white font-mono font-bold py-6">
      <span class="flex justify-center pt-5 pb-2">
        <svg
          class="h-20 w-auto fill-current text-green-700"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckCircleIcon"
          tabindex="-1"
          title="CheckCircle"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          ></path>
        </svg>
      </span>
      <p
        v-if="languageStore.language == 'En'"
        class="text-center text-3xl text-green-800 pb-5"
      >
        Order Successfully Placed.
      </p>
      <p
        v-if="languageStore.language == 'Am'"
        class="text-center text-3xl text-green-800 pb-5"
      >
        ትዛዝዎን በትክክል አጠናቀዋል
      </p>
      <p v-if="languageStore.language == 'En'" class="flex items-center justify-center">
        Your order is confirmed. Confirmation will be sent to your email.
      </p>
      <p v-if="languageStore.language == 'Am'" class="flex items-center justify-center">
        ማረጋገጫ በኢሜል ይደርስዎታል
      </p>
      <div class="flex justify-center gap-6 pt-11">
        <router-link
          v-if="role == 'user'"
          to="/product"
          class="bg-green-400 text-white py-2 px-[5%] my-6 rounded-lg hover:bg-green-700"
          ><h4 v-if="languageStore.language == 'En'">Continue order</h4>
          <h4 v-if="languageStore.language == 'Am'">እንደገና ያዝዙ</h4></router-link
        >
        <router-link
          v-if="role == 'customer'"
          to="/farmersProduct"
          class="bg-green-400 text-white py-2 px-[5%] my-6 rounded-lg hover:bg-green-700"
          ><h4 v-if="languageStore.language == 'En'">Continue order</h4>
          <h4 v-if="languageStore.language == 'Am'">እንደገና ያዝዙ</h4></router-link
        >
        <router-link
          to="/reciet/pdf"
          class="viewInvoice bg-green-400 text-white py-2 px-[5%] my-6 rounded-lg hover:bg-green-700"
          ><h4 v-if="languageStore.language == 'En'">view invoice</h4>
          <h4 v-if="languageStore.language == 'Am'">ደረሰኝ</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLanguageStore } from "../state/languageStore";
const languageStore = useLanguageStore();
const role = localStorage.getItem("role");
</script>
<style scoped>
.viewInvoice {
  background: linear-gradient(75deg, green, blue);
}
</style>
