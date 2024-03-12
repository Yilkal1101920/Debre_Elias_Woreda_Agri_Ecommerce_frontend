<template>
  <div class="w-full h-full bg-green-50 dark:bg-gray-700 flex py-4 justify-center">
    <div class="py-5 mx-8 bg-red-50 shadow-md rounded-lg px-8 border border-red-600">
      <p class="font-mono font-bold text-lg text-red-500">
        Your account is temporary blocked
      </p>
      <p class="font-mono font-bold text-lg text-gray-800">
        Your account has been deactivated. As a result, you will no longer be able to
        access your account or any of its associated features. If you believe this
        deactivation was a mistake, please contact our support team at
        <span class="text-green-600">
          ayinalemmenber@gmail.com or click contact button
        </span>
        for assistance.
      </p>
      <!-- <p v-show="knowMoreActivate" class="font-mono font-bold text-lg text-gray-800"> -->
      <ul v-show="knowMoreActivate" class="font-mono font-bold text-lg text-gray-800">
        <li>
          <span class="text-2xl text-green-500">>></span> We are sorry to inform you that
          your account has been deactivated due to a violation of our terms of service.
          Specifically, the reason for the deactivation, Wrong activity, or violation of
          community guidelines.
        </li>
        <li>
          <span class="text-2xl text-green-500">>></span> Please note that this
          deactivation is final and cannot be undone. If you wish to create a new account,
          you will need to register again and agree to our terms of service.
        </li>
        <li>
          <span class="text-2xl text-green-500">>></span> We take account security and
          user privacy very seriously, and we reserve the right to deactivate any account
          that violates our policies or poses a threat to our community. If you have any
          questions or concerns about this deactivation, please don't hesitate to contact
          us at
          <span class="text-green-600">
            ayinalemmenber@gmail.com or click contact button</span
          >.
        </li>
        <li>
          <span class="text-2xl text-green-500">>></span> We appreciate your understanding
          and cooperation in this matter, and we hope to continue providing you with a
          positive experience on our website in the future.
        </li>
      </ul>

      <!-- </p> -->
      <div class="flex gap-4 items-center justify-around py-5">
        <button
          v-show="!knowMoreActivate"
          @click="knowMoreActivate = !knowMoreActivate"
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          Know more
        </button>
        <button
          v-show="knowMoreActivate"
          @click="knowMoreActivate = !knowMoreActivate"
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          View less
        </button>
        <button
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          <router-link to="/help"> Contact us</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const knowMoreActivate = ref(false);
</script>

<style scoped></style>
