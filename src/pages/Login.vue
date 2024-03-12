<script setup>
import { Form, Field } from "vee-validate";
import { ref } from "vue";
import * as Yup from "yup";

import { useAuthStore } from "@/stores";

import { useLanguageStore } from "../state/languageStore";
import howToLogin from "../components/howToLogin.vue";
import forgotPassword from "./forgotPassword.vue";
import { useForgotPasswordStore } from "../state/forgotPasswordState";

const useForgotPasswordState = useForgotPasswordStore();
const languageStore = useLanguageStore();
const help = ref(false);

useForgotPasswordState.dialogState = ref(false);

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

function onSubmit(values, { setErrors }) {
  const authStore = useAuthStore();
  const { username, password } = values;

  return authStore
    .login(username, password)
    .catch((error) => setErrors({ apiError: error }));
}

const previousPage = () => {
  try {
    if (useForgotPasswordState.count == 0) {
      useForgotPasswordState.dialogState = false;
    }
    if (useForgotPasswordState.count == 1) {
      useForgotPasswordState.count = 0;
    }
    if (useForgotPasswordState.count == 2) {
      useForgotPasswordState.count = 1;
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="bg-green-50 dark:bg-gray-800">
    <GDialog v-model="useForgotPasswordState.dialogState" max-width="800">
      <div
        class="bg-green-50 text-gray-800 dark:bg-gray-800 dark:text-white shadow-md shadow-gray-700"
      >
        <div class="flex justify-between px-5">
          <P @click="previousPage" class="text-lg pt-2 cursor-pointer" title="back">
            <svg
              class="fill-current h-8 w-auto text-blue-700"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowBackIosNewOutlinedIcon"
              tabindex="-1"
              title="ArrowBackIosNewOutlined"
            >
              <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
            </svg>
          </P>
          <P
            @click="useForgotPasswordState.dialogState = false"
            class="text-lg pt-2 cursor-pointer"
            title="close"
          >
            <svg
              class="fill-current h-8 w-auto"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CloseOutlinedIcon"
              tabindex="-1"
              title="CloseOutlined"
            >
              <path
                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              ></path>
            </svg>
          </P>
        </div>
        <div class="">
          <forgotPassword />
        </div>
      </div>
    </GDialog>
    <div class="px-6 py-12">
      <div
        class="pt-3 border border-gray-300 bg-green-50 dark:bg-gray-800 rounded-3xl mt-[1%] lg:mx-[20%] mx-[5%] shadow-lg flex-wrap items-center text-gray-800 gap-4"
      >
        <div class="">
          <div class="flex gap-2 justify-center flex-wrap">
            <div class="block pt-6 justify-center items-center">
              <p
                class="text-2xl text-green-900 dark:text-white"
                v-if="languageStore.language == 'Am'"
              >
                መግቢያ
              </p>
              <p
                class="text-2xl text-green-900 dark:text-white"
                v-if="languageStore.language == 'En'"
              >
                Login Page
              </p>
              <p
                class="text-gray-700 dark:text-white text-sm font-mono font-bold"
                v-if="languageStore.language == 'En'"
              >
                Enter Email and Password
              </p>
              <p
                class="text-gray-700 dark:text-white text-sm font-mono font-bold"
                v-if="languageStore.language == 'Am'"
              >
                ኢሜል እና የይለፍ ቃል ያስገቡ
              </p>
              <!-- <canvas id="loginGraphics"></canvas> -->
            </div>
          </div>
        </div>
        <div class="w-full text-black z-40">
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors, isSubmitting }"
            class="justify-center sm:px-[5%]"
          >
            <!-- Email input -->
            <div class="mb-0 px-[8%]">
              <Field
                name="username"
                type="text"
                class="form-control w-full px-4 py-2 mt-5 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                :class="{ 'is-invalid': errors.username }"
              />
              <div class="invalid-feedback text-red-500">{{ errors.username }}</div>
            </div>
            <!-- Password input -->
            <div class="mb-0 px-[8%]">
              <Field
                name="password"
                type="password"
                class="form-control w-full px-4 py-2 mt-5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback text-red-500">{{ errors.password }}</div>
            </div>
            <div class="form-group flex justify-center">
              <button
                type="submit"
                class="login inline-block py-2 px-11 my-5 text-gray-800 hover:text-white font-mono font-bold text-2xl rounded-lg shadow-md hover:bg-green-700 hover:scale-110 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-0 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                :disabled="isSubmitting"
              >
                <span v-show="isSubmitting"></span>
                <p v-if="languageStore.language == 'En'">Sign in</p>
                <p v-if="languageStore.language == 'Am'">ግባ</p>
              </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger text-red-500 mt-3 mb-0">
              {{ errors.apiError }}
            </div>
          </Form>
          <div
            class="grid sm:grid-cols-1 md:grid-cols-2 items-center sm:pb-2 md:pb-8 sm:px-2 lg:gap-2 lg:pl-[11%] lg:px-[3%]"
          >
            <p
              v-if="languageStore.language == 'En'"
              class="text-gray-800 dark:text-white text-lg font-mono font-bold sm:py-1 pl-4 lg:py-4 cursor-pointer"
            >
              have no account?
              <router-link
                to="/register"
                class="text-blue-800 hover:text-green-800 dark:text-green-700"
                >Register</router-link
              >
            </p>
            <p
              v-if="languageStore.language == 'Am'"
              class="text-gray-800 dark:text-white text-lg font-mono font-bold sm:py-1 lg:py-4 cursor-pointer"
            >
              መለያ የለህም?
              <router-link
                to="/register"
                class="text-blue-800 hover:text-green-800 dark:text-green-700"
                >ተመዝገብ</router-link
              >
            </p>
            <p
              v-if="languageStore.language == 'En'"
              class="text-gray-800 dark:text-white text-lg font-mono font-bold sm:py-1 lg:py-4 cursor-pointer"
            >
              <button
                @click="useForgotPasswordState.dialogState = true"
                class="text-blue-800 hover:text-green-800 pl-4 dark:text-green-700"
              >
                forgot password?
              </button>
            </p>
            <p
              v-if="languageStore.language == 'Am'"
              class="text-gray-800 dark:text-white text-lg font-mono font-bold sm:py-1 lg:py-4 cursor-pointer"
            >
              <button
                @click="useForgotPasswordState.dialogState = true"
                class="text-gray-800 hover:text-green-800 hover:border-b-2 dark:text-green-700"
              >
                የይለፍ ቃል እረስተዋል?
              </button>
            </p>
          </div>
          <button
            v-if="languageStore.language == 'Am'"
            class="text-gray-800 italic dark:text-white text-lg font-mono font-bold py-4 cursor-pointer text-center mx-[20%] hover:text-green-800"
            @click="help = !help"
          >
            እንዴት ልግባ?
          </button>
          <button
            v-if="languageStore.language == 'En'"
            class="italic text-gray-800 dark:text-white text-lg font-mono font-bold py-4 cursor-pointer text-center mx-[20%] hover:text-green-800"
            @click="help = !help"
          >
            How to login?
          </button>
        </div>
        <p class="" v-show="help">
          <howToLogin />
        </p>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.login {
  background: #17cf97;
}
</style>
