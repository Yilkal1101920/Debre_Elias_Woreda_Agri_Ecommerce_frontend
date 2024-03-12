<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useAuthStore } from "@/stores";

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
</script>

<template>
  <div class="bg-green-50 dark:bg-gray-800 h-full w-full">
    <!-- <div class="container px-6 py-12 w-full"> -->
    <div
      class="pt-3 grid sm:grid-cols-1 md:grid-cols-2 flex-wrap w-full justify-center items-center text-gray-800 gap-4"
    >
      <div class=" ">
        <div class="flex gap-2 justify-center flex-wrap">
          <img
            src="../assets/loginLeft.png"
            class="w-auto h-56 rounded-full p-8 justify-start items-start"
            alt="login image"
          />
          <div class="block pt-6 justify-center items-center">
            <p class="text-2xl text-orange-700 dark:text-white">መግቢያ</p>
            <p class="text-gray-700 dark:text-white text-sm font-mono font-bold">
              ኢሜል እና የይለፍ ቃል ያስገቡ
            </p>
          </div>
        </div>
        <img
          src="../assets/loginRight.png"
          class="w-auto pl-[50%] pb-8 pr-8 rounded-[100%] h-56"
          alt="login image"
        />
      </div>
      <div class="w-full justify-center">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
          class="md:mr-[10%] justify-center sm:px-[5%]"
        >
          <!-- Email input -->
          <div class="mb-0 w-full mr-4">
            <Field
              name="username"
              type="text"
              class="form-control w-full px-4 py-2 my-5 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              :class="{ 'is-invalid': errors.username }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <!-- Password input -->
          <div class="mb-0">
            <Field
              name="password"
              type="password"
              class="form-control w-full px-4 py-2 my-5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="inline-block px-10 py-2 my-5 bg-green-300 text-gray-700 hover:text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-0 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              :disabled="isSubmitting"
            >
              <span v-show="isSubmitting"></span>
              Login
            </button>
          </div>
          <div v-if="errors.apiError" class="alert alert-danger text-white mt-3 mb-0">
            {{ errors.apiError }}
          </div>
        </Form>
        <p
          class="text-gray-800 dark:text-white text-lg font-mono font-bold py-4 cursor-pointer"
        >
          አካውንት የለህም?
          <router-link
            to="/register"
            class="text-gray-800 hover:text-green-800 hover:border-b-2 hover:border-t-2 dark:text-white"
            >ተመዝገብ</router-link
          >
        </p>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
