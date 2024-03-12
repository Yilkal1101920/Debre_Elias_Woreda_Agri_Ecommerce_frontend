<template>
  <div
    class="absolute flex flex-column bg-gray-200 bg-opacity-90 dark:bg-gray-800 pt-0 mt-6 w-[70%] h-screen mt-11"
  >
    <transition name="mobileView">
      <div class="flex mobileViewNavbar">
        <ul class="flex flex-col list-none border-b-0 pl-0 gap-3">
          <li v-if="user_role == 'user' || user_role == 'customer'" class="nav-item">
            <div class="pl-6">
              <button
                class="dropdown-toggle text-2xl dark:text-white font-bold font-mono ease-in-out flex items-center whitespace-nowrap"
                type="button"
                @click.prevent="
                  mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow
                "
              >
                <router-link to="/" class="flex gap-2 items-center">
                  <span>
                    <svg
                      class="fill-current h-7 w-auto"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="HomeOutlinedIcon"
                      tabindex="-1"
                      title="HomeOutlined"
                    >
                      <path
                        d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                      ></path></svg
                  ></span>
                  <h4
                    v-if="languageStore.language == 'En'"
                    class="dark:text-white hover:text-green-600"
                  >
                    Home
                  </h4>
                  <h4
                    v-if="languageStore.language == 'Am'"
                    class="dark:text-white hover:text-green-600"
                  >
                    መነሻ
                  </h4>
                </router-link>
              </button>
            </div>
          </li>
          <li
            v-if="user_role == 'user' || user_role == 'customer'"
            class="nav-item"
            role="presentation"
          >
            <div class="dropdown relative">
              <div
                class="nav-link block leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent pl-6 focus:border-transparent active"
              >
                <div>
                  <div class="dropdown relative">
                    <button
                      @click.prevent="
                        mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow
                      "
                      class="dropdown-toggle leading-tight text-2xl dark:text-white ease-in-out flex items-center whitespace-nowrap"
                      type="button"
                    >
                      <router-link to="/product" class="flex gap-2 items-center">
                        <span>
                          <svg
                            class="fill-current h-6 w-auto"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="Inventory2OutlinedIcon"
                            tabindex="-1"
                            title="Inventory2Outlined"
                          >
                            <path
                              d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z"
                            ></path>
                            <path d="M9 12h6v2H9z"></path></svg
                        ></span>
                        <h4
                          v-if="languageStore.language == 'En'"
                          class="dark:text-white hover:text-green-600"
                        >
                          Products
                        </h4>
                        <h4
                          v-if="languageStore.language == 'Am'"
                          class="dark:text-white hover:text-green-600"
                        >
                          ምርቶች
                        </h4>
                      </router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            v-if="user_role == 'user' || user_role == 'customer'"
            class="nav-link block font-medium text-2xl dark:text-white leading-tight border-x-0 border-t-0 border-b-2 border-transparent pl-6 focus:border-transparent active"
            @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
          >
            <RouterLink to="/events" class="flex gap-2 items-center">
              <svg
                class="fill-current h-6 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="EventNoteOutlinedIcon"
                tabindex="-1"
                title="EventNoteOutlined"
              >
                <path
                  d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"
                ></path>
              </svg>
              <h4
                v-if="languageStore.language == 'En'"
                class="dark:text-white hover:text-green-600"
              >
                Events
              </h4>
              <h4
                v-if="languageStore.language == 'Am'"
                class="dark:text-white hover:text-green-600"
              >
                ሁነቶች
              </h4>
            </RouterLink>
          </li>
          <li
            v-if="user_role == 'user' || user_role == 'customer'"
            class="nav-link block font-medium text-2xl dark:text-white leading-tight border-x-0 border-t-0 border-b-2 border-transparent pl-6 focus:border-transparent active"
            @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
          >
            <router-link to="/about" class="flex gap-2 items-center">
              <svg
                class="fill-current h-6 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InfoOutlinedIcon"
                tabindex="-1"
                title="InfoOutlined"
              >
                <path
                  d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                ></path>
              </svg>
              <h4
                v-if="languageStore.language == 'En'"
                class="dark:text-white hover:text-green-600"
              >
                About
              </h4>
              <h4
                v-if="languageStore.language == 'Am'"
                class="dark:text-white hover:text-green-600"
              >
                ስለኛ
              </h4>
            </router-link>
          </li>
          <li
            v-if="user_role == 'user' || user_role == 'customer'"
            class="nav-link block font-medium text-2xl dark:text-white leading-tight border-x-0 border-t-0 border-b-2 border-transparent pl-6 focus:border-transparent active"
            @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
          >
            <router-link to="/help" class="flex gap-2 items-center">
              <svg
                class="fill-current h-6 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="HelpOutlineOutlinedIcon"
                tabindex="-1"
                title="HelpOutlineOutlined"
              >
                <path
                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                ></path>
              </svg>
              <h4
                v-if="languageStore.language == 'En'"
                class="dark:text-white hover:text-green-600"
              >
                Help
              </h4>
              <h4
                v-if="languageStore.language == 'Am'"
                class="dark:text-white hover:text-green-600"
              >
                እገዛ
              </h4>
            </router-link>
          </li>
          <li>
            <div class="pt-0 pl-6">
              <button
                v-if="languageStore.language == 'En'"
                @click="getlanguage('Am')"
                class="text-black dark:text-white"
              >
                <span class="flex gap-2 items-center">
                  <span
                    ><img class="h-6 w-auto" src="../assets/ehio_flag.png" alt=""
                  /></span>
                  <span
                    class="hover:text-green-600 text-2xl text-blue-800 dark:text-white"
                    >አማርኛ</span
                  >
                </span>
              </button>
              <button
                v-if="languageStore.language == 'Am'"
                @click="getlanguage('En')"
                class="text-black dark:text-white"
              >
                <span class="flex gap-1 items-center">
                  <span
                    ><img class="h-6 w-auto" src="../assets/us-flag.png" alt=""
                  /></span>
                  <span
                    class="hover:text-green-600 text-2xl text-blue-800 dark:text-white"
                    >English</span
                  >
                </span>
              </button>
            </div>
          </li>
          <li class="pl-6">
            <div class="">
              <button
                @click="toggleDark()"
                class="rounded-full flex gap-2 items-center text-white dark:text-white"
              >
                <span title="Switch to brightness mode" v-show="!isDark" class="">
                  <svg
                    class="fill-current text-lg text-blue-800 h-8 w-auto"
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
                <span
                  v-show="isDark"
                  class="flex gap-1 items-center"
                  title="Switch to dark mode"
                >
                  <svg
                    class="fill-current h-8 w-auto hover:border-b-2 text-white"
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

                <p
                  v-if="languageStore.language == 'En'"
                  class="text-blue-800 hover:text-green-600 dark:text-white text-2xl"
                >
                  Brightness mode
                </p>
                <p
                  v-if="languageStore.language == 'Am'"
                  class="text-blue-800 hover:text-green-600 dark:text-white text-2xl"
                >
                  ብርሃን ማስተካካያ
                </p>
              </button>
            </div>
          </li>
          <li class="pt-11 px-3">
            <p class="font-bold dark:text-white">
              Easiest and fastest agricultural product and raw material distribution
              platform.
            </p>
          </li>
          <li>
            <router-link
              to="/product"
              class="mx-3 px-3 text-2xl rounded-lg border border-blue-500 dark:text-white hover:bg-green-300 hover:text-white"
              @click.prevent="mobileHeaderShow.headerShow = !mobileHeaderShow.headerShow"
              >order now</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useHeaderShowStore } from "../state/mobileHeaderShow";
import { useLanguageStore } from "../state/languageStore";
// dark mode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// dark mode end
const languageStore = useLanguageStore();
const mobileHeaderShow = useHeaderShowStore();
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
</script>
<style scoped>
.mobileView-enter-active,
.mobileView-leave-active {
  transition: transform 0.9s ease-in-out;
}

.mobileView-enter,
.mobileView-leave-to {
  transform: translateX(-100%);
}
</style>
