<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "./components/MobileHeader.vue";
import UserFooter from "./components/UserFooter.vue";
import { ref, onMounted } from "vue";

import { useHeaderShowStore } from "./state/mobileHeaderShow";
import { useLanguageStore } from "./state/languageStore";
import { usePathData } from "./state/pathState";

import BackToTop from "vue-backtotop";

// dark mode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// dark mode end
const mobileHeaderShow = useHeaderShowStore();

const languageStore = useLanguageStore();
const pathState = usePathData();

const user_role = ref("");

languageStore.language == "Am";

onMounted(() => {
  user_role.value = localStorage.getItem("role");
  if (localStorage.getItem("lang") == "Am") {
    languageStore.language = "Am";
  } else {
    languageStore.language = "En";
  }
});

const getlanguage = async (ln) => {
  languageStore.language = ln;

  localStorage.setItem("lang", ln);
};

const gotoDashboard = async () => {
  try {
    if (user_role.value == "store") {
      window.location.href = "/mahiberat/storeDashboard";
    }
    if (user_role.value == "manager") {
      window.location.href = "/mahiberat/dashboard";
    }
    if (user_role.value == "woreda_admin") {
      window.location.href = "/woreda/dashboard";
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <div class="w-full h-full text-gray-800 dark:text-white">
    <!-- <div class=""> -->
    <div class="w-full h-full">
      <!-- <div class="inset-x-0 top-0"> -->
      <div
        class="nav sticky z-50 top-0 h-16 bg-gray-200 bg-opacity-90 flex items-center text-gray-800 dark:bg-gray-800"
      >
        <div class="flex flex-row lg:hidden">
          <button
            class="text-3xl pl-1 dark:text-white hover:bg-gray-300 rounded-full p-2"
            @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
          >
            ☰
          </button>

          <MobileHeader v-show="mobileHeaderShow.headerShow" />
        </div>
        <div class="block pl-1">
          <router-link to="/">
            <div class="flex flex-col cursor-pointer">
              <img
                src="https://i.ibb.co/7kWjS0M/Debre-Elias-Agri-Service.png"
                class="w-14 h-11"
                alt="logo"
              />
              <!-- <p class="pl-3 dark:text-white text-gray-700"><p v-if="languageStore.language == 'Am'">የግብርና አቅርቦት ማከፋፈያ</p>
              <p v-if="languageStore.language == 'En'">Agriculture Supply</p></p> -->
            </div>
          </router-link>
        </div>

        <div
          class="lg:flex lg:flex-row hidden"
          v-if="user_role == 'user' || user_role == 'customer'"
        >
          <div class="flex flex-col justify-center items-center">
            <ul
              class="nav nav-tabs sm:hidden md:flex items-center flex-wrap list-none border-b-0 pl-0"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                >
                  <div class="flex justify-center">
                    <div>
                      <div class="dropdown relative">
                        <button
                          class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                          type="button"
                        >
                          <router-link
                            to="/"
                            class="dark:text-white hover:text-green-700 text-lg font-bold font-mono"
                            ><p v-if="languageStore.language == 'Am'">መነሻ</p>
                            <p v-if="languageStore.language == 'En'">Home</p></router-link
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <div class="dropdown relative">
                  <div
                    class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
                  >
                    <div>
                      <div class="dropdown relative">
                        <button
                          v-if="user_role == 'user'"
                          class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                          type="button"
                        >
                          <router-link
                            to="/product"
                            class="font-mono font-bold text-lg dark:text-white hover:text-green-700"
                          >
                            <p v-if="languageStore.language == 'Am'">ምርት</p>
                            <p v-if="languageStore.language == 'En'">products</p>
                          </router-link>
                        </button>
                        <button
                          v-if="user_role == 'customer'"
                          class="dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap"
                          type="button"
                        >
                          <router-link
                            to="/farmersProduct"
                            class="font-mono font-bold text-lg dark:text-white hover:text-green-700"
                          >
                            <p v-if="languageStore.language == 'Am'">ምርት</p>
                            <p v-if="languageStore.language == 'En'">Farmer's products</p>
                          </router-link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
              >
                <RouterLink
                  to="/events"
                  class="font-mono font-bold text-lg dark:text-white hover:text-green-700"
                >
                  <p v-if="languageStore.language == 'Am'">ሁነቶች</p>
                  <p v-if="languageStore.language == 'En'">Events</p>
                </RouterLink>
              </li>
              <li
                class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
              >
                <router-link
                  to="/about"
                  class="font-mono font-bold text-lg dark:text-white hover:text-green-700"
                >
                  <p v-if="languageStore.language == 'Am'">ስለ እኛ</p>
                  <p v-if="languageStore.language == 'En'">About</p>
                </router-link>
              </li>
              <li
                class="nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent active"
              >
                <router-link
                  to="/help"
                  class="font-mono font-bold text-lg dark:text-white hover:text-green-700"
                  ><p v-if="languageStore.language == 'Am'">እገዛ</p>
                  <p v-if="languageStore.language == 'En'">help</p>
                </router-link>
              </li>
              <li class="nav-item" role="presentation">
                <div class="dropdown relative">
                  <div
                    class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent py-3 my-2 hover:border-transparent focus:border-transparent active"
                  >
                    <div>
                      <div class="dropdown relative">
                        <button
                          v-if="user_role == 'user'"
                          class="dropdown-toggle leading-tight ease-in-out flex items-center"
                          type="button"
                        >
                          <router-link
                            to="/farmersProduct"
                            class="font-mono font-bold px-2 text-lg border border-dotted border-gray-500 dark:text-white hover:text-green-700"
                          >
                            <p v-if="languageStore.language == 'Am'">ከገበሬዎች ይግዙ</p>
                            <p v-if="languageStore.language == 'En'">Buy From Farmers</p>
                          </router-link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden lg:flex lg:flex-row">
          <button
            v-if="languageStore.language == 'En'"
            @click="getlanguage('Am')"
            class="px-4 text-black dark:text-white"
          >
            <span class="flex gap-1 items-center">
              <span><img class="h-4 w-auto" src="./assets/ehio_flag.png" alt="" /></span>
              <span class="hover:border-b-2">አማርኛ</span>
            </span>
          </button>
          <button
            v-if="languageStore.language == 'Am'"
            @click="getlanguage('En')"
            class="px-4 text-black dark:text-white"
          >
            <span class="flex gap-1 items-center">
              <span><img class="h-4 w-auto" src="./assets/us-flag.png" alt="" /></span>
              <span class="hover:border-b-2">English</span>
            </span>
          </button>
          <div class="flex gap-5 items-center">
            <button @click="toggleDark()" class="h-7 w-7 text-white dark:text-white">
              <span
                title="Switch to night mode"
                v-show="!isDark"
                class="rounded-full bg-white flex justify-center"
              >
                <svg
                  class="fill-current h-6 w-auto text-black"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="NightlightOutlinedIcon"
                  tabindex="-1"
                  title="NightlightOutlined"
                >
                  <path
                    d="M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C17.53 2.5 15.82 2 14 2z"
                  ></path>
                </svg>
              </span>
              <span
                v-show="isDark"
                class="flex gap-1 items-center rounded-full bg-slate-200"
                title="Switch to day light"
              >
                <svg
                  class="fill-current text-lg text-yellow-600 h-6 w-auto"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="BrightnessLowOutlinedIcon"
                  tabindex="-1"
                  title="BrightnessLowOutlined"
                >
                  <path
                    d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="flex items-center">
          <button
            v-if="
              (user_role == 'store' ||
                user_role == 'manager' ||
                user_role == 'woreda_admin') &&
              pathState.currentPath != '/mahiberat/storeDashboard' &&
              pathState.currentPath != '/mahiberat/dashboard' &&
              pathState.currentPath != '/woreda/dashboard'
            "
            @click="gotoDashboard"
            class="pl-96 hover:text-green-600"
          >
            Dashboard
          </button>
          <Header class="items-end" />
        </div>
      </div>
      <!-- </div> -->
      <router-view />
      <Footer
        v-if="
          user_role == 'woreda_admin' || user_role == 'manager' || user_role == 'store'
        "
      />
      <UserFooter
        v-if="
          user_role != 'woreda_admin' && user_role != 'manager' && user_role != 'store'
        "
      />

      <!-- top  -->
      <div class="flex justify-center">
        <back-to-top bottom="15px" right="150px">
          <img
            src="./assets/top.png"
            alt="Top"
            class="h-16 w-16 bg-blue-200 rounded-full"
          />
        </back-to-top>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<style scoped>
a.router-link-exact-active {
  color: green;
}
</style>
