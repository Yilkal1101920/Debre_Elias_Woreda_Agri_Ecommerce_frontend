<template>
  <div
    v-if="useForgotPasswordState.count == 0"
    class="w-full pt-3 pb-8 bg-green-50 dark:bg-gray-800 flex justify-center"
  >
    <div class="pb-28 w-full mx-[25%]">
      <form class="">
        <div class="mb-4 w-full">
          <label
            class="text-gray-700 dark:text-white text-lg font-mono font-bold mb-2"
            for="username"
          >
            <h4 v-if="languageStore.language == 'En'">Enter Email</h4>
            <h4 v-if="languageStore.language == 'Am'">ኢሜል አስገባ</h4>
          </label>
          <input
            class="border border-green-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="email"
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div class="flex justify-center">
          <button
            class="bg-green-400 hover:bg-green-700 hover:scale-x-110 text-white font-bold text-lg font-mono py-2 px-[20%] rounded-lg focus:outline-none focus:shadow-outline"
            type="button"
            @click.prevent="getEmail"
          >
            <h4 v-if="languageStore.language == 'En'">submit</h4>
            <h4 v-if="languageStore.language == 'Am'">አስገባ</h4>
          </button>
        </div>
      </form>
      <button
        @click="useForgotPasswordState.dialogState = false"
        class="font-bold border border-green-100 shadow-md px-2 text-lg text-gray-800 dark:text-white py-2 my-3 rounded-lg hover:text-orange-500 font-mono text-center"
        v-if="languageStore.language == 'En'"
      >
        Sign in instead
      </button>
      <button
        @click="useForgotPasswordState.dialogState = false"
        class="font-bold text-lg text-gray-800 dark:text-white py-5 hover:text-orange-500 font-mono text-center"
        v-if="languageStore.language == 'Am'"
      >
        በመለያዎ ይግቡ
      </button>
    </div>
  </div>
  <EnterVerificationCode />
  <EnterNewPassword />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useForgotPasswordStore } from "../state/forgotPasswordState";
import EnterVerificationCode from "../components/enterVerificationCode.vue";
import EnterNewPassword from "../components/enterNewPassword.vue";
import Swal from "sweetalert2";
import { useLanguageStore } from "../state/languageStore";
const languageStore = useLanguageStore();
const useForgotPasswordState = useForgotPasswordStore();
const email = ref("");
const user = ref("");
const getEmail = async () => {
  try {
    useForgotPasswordState.accountEmail = email.value;
    if (email.value == "") {
      // alert("Please Insert Email Address");
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Please Enter Email Address!",
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
      validateEmail();
    }
  } catch (err) {}
};
const sendVerificationCode = async () => {
  try {
    useForgotPasswordState.verificationCode = Math.floor(Math.random() * 900000) + 100000;
    console.log(useForgotPasswordState.verificationCode);
    useForgotPasswordState.count = 1;
    await axios.post("http://localhost:5000/sendNotificationInEmail", {
      to: useForgotPasswordState.accountEmail,
      subject:
        useForgotPasswordState.verificationCode.toString() +
        "  is Debre Elias Agriculture office row material and Product distribution accont recovery Code",
      text:
        useForgotPasswordState.verificationCode.toString() +
        "  Hi,We received a request to reset your Agri Service Account password.Enter the following password reset code:" +
        "http://localhost:5173/login",
    });
  } catch (err) {}
};
const getUserAccount = async () => {
  try {
    const User = await axios.get(`http://localhost:5000/users/${email.value}`);
    user.value = User.data.email;
    if (user.value == email.value) {
      await sendVerificationCode();
    } else {
      // alert("this email does not exist");
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Email does not exist!",
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
const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    getUserAccount();
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ ኢሜል ያስገቡ! ",
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
