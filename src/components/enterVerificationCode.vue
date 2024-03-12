<template>
  <div
    v-if="useForgotPasswordState.count == 1"
    class="w-full h-full pt-5 pb-28 px-3 text-gray-700 bg-green-50 flex justify-center"
  >
    <form class="w-full px-[20%]">
      <div class="mb-4">
        <div class="pb-4 pt-8">
          <p
            v-if="languageStore.language == 'En'"
            class="text-lg font-mono font-bold text-gray-800 dark:text-white"
          >
            We have sent a Verification code to you via your email.
            <span class="italic underline text-green-800">{{ email }}</span>
          </p>
          <p
            v-if="languageStore.language == 'Am'"
            class="text-lg font-mono font-bold text-gray-800 dark:text-white"
          >
            የኢሜል ማረጋገጫ ቁጥር በ<span class="italic underline text-green-800">{{
              email
            }}</span>
            ልከንለዎታል.
          </p>
        </div>
        <label
          class="block text-gray-700 text-lg font-mono font-bold mb-2"
          for="username"
        >
          <h4 v-if="languageStore.language == 'En'">Enter Security Code</h4>
          <h4 v-if="languageStore.language == 'Am'">የይለፍ ቃል ያስገቡ</h4>
        </label>
        <input
          class="shadow border-green-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="verificationCode"
          type="text"
          placeholder="code"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-[20%] rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click.prevent="enterVerificationCode"
        >
          <h4 v-if="languageStore.language == 'En'">continue</h4>
          <h4 v-if="languageStore.language == 'Am'">ቀጥል</h4>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForgotPasswordStore } from "../state/forgotPasswordState";
import { useLanguageStore } from "../state/languageStore";
// sweetalert import
import Swal from "sweetalert2";
const languageStore = useLanguageStore();
const useForgotPasswordState = useForgotPasswordStore();
const verificationCode = ref("");

const enterVerificationCode = async () => {
  try {
    if (useForgotPasswordState.verificationCode == verificationCode.value) {
      useForgotPasswordState.count = 2;
      // alert("success");
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "success",
        // title: "ስህተት",
        html: "password successfully reset!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          // Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("I was closed by the timer");
        }
      });
      // sweet alert end
    } else {
      // alert("You Entered Incorrect verification code");
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Incorrect verification code!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          // Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("I was closed by the timer");
        }
      });
      // sweet alert end
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
