<template>
  <div v-if="useNavigator.showSideBar">
    <aside
      class="rounded shadow-md bg-gray-200 dark:bg-gray-800 pb-6 px-3"
      aria-label="Sidebar"
    >
      <div class="nav">
        <ul>
          <li
            class="pt-2"
            @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar"
          >
            <router-link
              v-if="!log_display"
              to="/login"
              class="text-gray-800 dark:text-white hover:text-green-700"
            >
              <span class="flex items-center gap-2">
                <svg
                  class="fill-current h-6 w-auto"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LoginOutlinedIcon"
                  tabindex="-1"
                  title="LoginOutlined"
                >
                  <path
                    d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
                  ></path>
                </svg>
                <h4
                  v-if="languageStore.language == 'En'"
                  class="text-lg font-bold font-mono"
                >
                  Sign In
                </h4>
                <h4
                  v-if="languageStore.language == 'Am'"
                  class="text-lg font-bold font-mono"
                >
                  በመለያ ግባ
                </h4>
              </span>
            </router-link>
          </li>
          <li @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar">
            <router-link
              v-if="!log_display"
              to="/register"
              class="text-gray-800 dark:text-white hover:text-green-700"
            >
              <span class="flex items-center gap-2">
                <svg
                  class="fill-current h-6 w-auto"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccountCircleOutlinedIcon"
                  tabindex="-1"
                  title="AccountCircleOutlined"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"
                  ></path>
                  <path
                    d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                  ></path>
                </svg>
                <h4
                  v-if="languageStore.language == 'En'"
                  class="text-lg font-bold font-mono"
                >
                  create new Account
                </h4>
                <h4
                  v-if="languageStore.language == 'Am'"
                  class="text-lg font-bold font-mono"
                >
                  መለያ ክፈት
                </h4>
              </span>
            </router-link>
          </li>
          <li v-if="log_display" class="flex justify-center pb-3">
            <div v-for="user in profileData" :key="user">
              <div
                v-if="
                  (user_email == user.email ||
                    manager_email == user.email ||
                    store_email == user.email ||
                    woreda_admin_email == user.email ||
                    customer_email == user.email) &&
                  log_display == true
                "
                class="flex flex-col justify-center"
              >
                <div class="flex justify-center">
                  <img
                    :src="user.photo"
                    alt="Your profile"
                    class="h-28 w-28 rounded-full p-2"
                  />
                </div>
                <p class="text-2xl font-bold font-mono flex text-center dark:text-white">
                  {{ user.fName }} {{ user.faName }}
                </p>
                <p class="font-mono text-center dark:text-white">{{ user.user_role }}</p>
              </div>
            </div>
          </li>

          <li class="rounded-lg flex justify-center mb-2" v-if="log_display">
            <onlineOfflineDetector />
          </li>

          <li @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar">
            <button v-if="check_user" class="">
              <router-link
                to="/userDashboard"
                class="text-gray-800 dark:text-white hover:text-green-700"
              >
                <div class="flex gap-1 items-center">
                  <span>
                    <svg
                      class="fill-current h-6 w-auto"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="SettingsOutlinedIcon"
                      tabindex="-1"
                      title="SettingsOutlined"
                    >
                      <path
                        d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      ></path>
                    </svg>
                  </span>

                  <h4
                    v-if="languageStore.language == 'En'"
                    class="text-lg font-bold font-mono"
                  >
                    Settings|profile
                  </h4>
                  <h4
                    v-if="languageStore.language == 'Am'"
                    class="text-lg font-bold font-mono"
                  >
                    ፕሮፋይል
                  </h4>
                </div>
              </router-link>
            </button>
            <button
              v-if="manager_email || customer_email || store_email || woreda_admin_email"
              class=""
            >
              <router-link
                to="/mahiberat/allAdminProfile"
                class="text-gray-800 dark:text-white hover:text-green-700"
              >
                <div class="flex gap-1 items-center">
                  <span>
                    <svg
                      class="fill-current h-6 w-auto"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="SettingsOutlinedIcon"
                      tabindex="-1"
                      title="SettingsOutlined"
                    >
                      <path
                        d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      ></path>
                    </svg>
                  </span>

                  <h4
                    v-if="languageStore.language == 'En'"
                    class="text-lg font-bold font-mono"
                  >
                    Settings|profile
                  </h4>
                  <h4
                    v-if="languageStore.language == 'Am'"
                    class="text-lg font-bold font-mono"
                  >
                    ፕሮፋይል
                  </h4>
                </div>
              </router-link>
            </button>
          </li>
          <li>
            <button
              v-if="log_display"
              @click.prevent="logout"
              class="text-gray-800 dark:text-white hover:text-green-700"
            >
              <div class="flex gap-1 items-center hover:text-green-700">
                <span>
                  <svg
                    class="fill-current h-6 w-auto"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LogoutOutlinedIcon"
                    tabindex="-1"
                    title="LogoutOutlined"
                  >
                    <path
                      d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
                    ></path>
                  </svg>
                </span>
                <h4
                  v-if="languageStore.language == 'En'"
                  class="text-lg font-bold font-mono hover:text-green-700"
                >
                  logout
                </h4>
                <h4
                  v-if="languageStore.language == 'Am'"
                  class="text-lg font-bold font-mono hover:text-green-700"
                >
                  ከመለያዎ ይዉጡ
                </h4>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import { useNavigationStore } from "../state/showNavigationStore.js";
import { useLanguageStore } from "../state/languageStore";
import onlineOfflineDetector from "../components/onlineOfline.vue";
const languageStore = useLanguageStore();

var useNavigator = useNavigationStore();
const log_display = ref(false);

const log_check = localStorage.getItem("user_id");
const check_user = localStorage.getItem("user_email");
const user_email = localStorage.getItem("user_email");
const manager_email = localStorage.getItem("manager_email");
const store_email = localStorage.getItem("store_email");
const woreda_admin_email = localStorage.getItem("woreda_admin_email");
const customer_email = localStorage.getItem("customer_email");
const profileData = ref("");

onMounted(async () => {
  await getUSerProfileData();
  //get total cart from orders table by email
  if (log_check == 1) {
    log_display.value = true;
  } else {
    log_display.value = false;
  }
});

const getUSerProfileData = async () => {
  try {
    const userProfile = await axios.get("http://localhost:5000/users");
    profileData.value = userProfile.data;
  } catch (err) {
    console.log("Error while uploading profile image: " + err);
  }
};
const logout = () => {
  localStorage.removeItem("user_id");
  // loginfo.logStore = false; // logout display none
  if (localStorage.getItem("role") == "manager") {
    localStorage.removeItem("manager_email");
    localStorage.removeItem("role");
    localStorage.removeItem("kebele");
  } else if (localStorage.getItem("role") == "store") {
    localStorage.removeItem("store_email");
    localStorage.removeItem("role");
  } else if (localStorage.getItem("role") == "user") {
    localStorage.removeItem("user_email");
    localStorage.removeItem("role");
    localStorage.removeItem("kebele");
    localStorage.removeItem("ID");
    localStorage.removeItem("reporterEmail");
  } else if (localStorage.getItem("role") == "woreda_admin") {
    localStorage.removeItem("woreda_admin_email");
    localStorage.removeItem("role");
  } else {
    localStorage.removeItem("customer_email");
    localStorage.removeItem("role");
    localStorage.removeItem("kebele");
    localStorage.removeItem("ID");
    localStorage.removeItem("reporterEmail");
    localStorage.removeItem("order_id");
  }
  // loginfo.logStore = false;
  useNavigator.showSideBar = !useNavigator.showSideBar;
  // router.push("/");
  self.location.replace("/");
};
</script>
