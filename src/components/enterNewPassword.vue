<template>
  <div
    v-if="useForgotPasswordState.count == 2"
    class="w-full h-full pt-6 pb-28 px-3 bg-green-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
    <div class="w-full px-[25%]">
      <form class="">
        <div class="mb-4">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
            <h4 v-if="languageStore.language == 'En'">Enter New password</h4>
            <h4 v-if="languageStore.language == 'Am'">አዲስ የይለፍ ቃል ያስገቡ</h4>
          </label>
          <input
            class="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="password"
            type="password"
            placeholder="new password"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
            <h4 v-if="languageStore.language == 'En'">confirm Password</h4>
            <h4 v-if="languageStore.language == 'Am'">ድጋሜ የይለፍ ቃል ያስገቡ</h4>
          </label>
          <input
            class="shadow appearance-none border border-green-300 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="confirmPassword"
            type="password"
            placeholder="rewrite password"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-[20%] rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click.prevent="validatePassword"
          >
            <h4 v-if="languageStore.language == 'En'">change password</h4>
            <h4 v-if="languageStore.language == 'Am'">የይለፍ ቃል ይቀይሩ</h4>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForgotPasswordStore } from "../state/forgotPasswordState";
import Swal from "sweetalert2";
import { useLanguageStore } from "../state/languageStore";
const languageStore = useLanguageStore();

const useForgotPasswordState = useForgotPasswordStore();
const router = useRouter();

const password = ref("");
const confirmPassword = ref("");
const enterNewPassword = async () => {
  try {
    if (password.value == confirmPassword.value) {
      const email = useForgotPasswordState.accountEmail;
      await axios.put(`http://localhost:5000/users/password/change/${email}`, {
        password: password.value,
      });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "success",
        // title: "ስህተት",
        html: "Password successfully changed!",
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
      router.push("/login");
    } else {
      // alert("Your entered password is not matched");
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Password not match!",
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
    }
  } catch (err) {
    console.log(err);
  }
};
const validatePassword = () => {
  if (/[0-9]/.test(password.value) && /[a-z]/.test(password.value)) {
    enterNewPassword();
  } else {
    // alert("Please enter a valid password");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ የይለፍ ቃል ያስገቡ!",
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
  }
};
</script>

<style></style>
