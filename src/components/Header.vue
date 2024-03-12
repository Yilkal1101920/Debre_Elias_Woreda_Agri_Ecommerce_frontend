<template>
  <div class="w-full h-full">
    <div class="flex items-center gap-5">
      <!-- v-if="role == 'user'" -->
      <div class="" v-if="role == 'user' || role == 'customer'">
        <h1
          v-if="role == 'user' && seller == 'mahiberat'"
          class="absolute right-32 top-0 lg:absolute lg:right-30 lg:top-2 hover:bg-blue-100 dark:bg-white bg-white rounded-full"
        >
          <div class="rounded-full h-11 w-11 pl-2 pb-2 flex flex-col justify-center">
            <div
              v-if="numberOfCarts != 0"
              class="flex flex-col text-gray-800 dark:text-text-gray-800"
            >
              <p
                class="absolute ml-3 bg-orange-500 w-6 h-6 rounded-[100%] flex justify-center text-lg font-bold font-mono text-white"
              >
                {{ numberOfCarts }}
              </p>
            </div>
            <RouterLink to="/product/cart"
              ><svg class="pt-3 fill-current text-blue-900 w-8 h-8">
                <path
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                ></path></svg
            ></RouterLink>
          </div>
        </h1>
        <h1
          v-if="role == 'customer' || (role == 'user' && seller == 'farmer')"
          class="absolute right-32 top-0 lg:absolute lg:right-40 lg:top-2 hover:bg-blue-100 dark:bg-white bg-white rounded-full"
        >
          <div class="rounded-full h-11 w-11 pl-2 pb-2 flex flex-col justify-center">
            <div
              v-if="numberOfProducts != 0"
              class="text-gray-800 dark:text-text-gray-800"
            >
              <p
                class="absolute ml-3 mt-1 bg-orange-500 w-6 h-6 rounded-[100%] flex justify-center text-lg font-bold font-mono text-white"
              >
                {{ numberOfProducts }}
              </p>
            </div>
            <RouterLink to="/product/customer/cart"
              ><svg class="fill-current text-blue-900 w-9 h-9 mt-3">
                <path
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                ></path></svg
            ></RouterLink>
          </div>
        </h1>
      </div>
      <!-- v-if="role == 'user'" -->
      <button
        v-if="role == 'user' || role == 'customer'"
        class="absolute h-11 w-11 pl-2 pb-2 right-20 top-0 lg:absolute lg:right-20 lg:top-2 hover:bg-blue-100 bg-white rounded-full"
        @click.prevent="notification"
      >
        <div v-if="totalNews != 0" class="flex justify-center">
          <p
            class="absolute ml-3 bg-orange-500 w-6 h-6 rounded-[100%] text-center text-lg font-bold font-mono text-white"
          >
            {{ totalNews }}
          </p>
        </div>
        <svg
          class="pt-3 pr-2 fill-current text-blue-900 w-9 h-9"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="NotificationsIcon"
          tabindex="-1"
          title="Notifications"
        >
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
          ></path>
        </svg>
      </button>

      <button
        class="absolute right-5 lg:absolute lg:right-1 lg:top-3 dropdown-toggle leading-tight ease-in-out flex items-center whitespace-nowrap mr-3"
        type="button"
        @click.prevent="useNavigator.showSideBar = !useNavigator.showSideBar"
      >
        <div v-for="userPhoto in profilePhoto" :key="userPhoto">
          <span
            v-if="
              (user_email == userPhoto.email ||
                manager_email == userPhoto.email ||
                store_email == userPhoto.email ||
                woreda_admin_email == userPhoto.email ||
                customer_email == userPhoto.email) &&
              log_display == true
            "
            ><img :src="userPhoto.photo" alt="photo" class="h-10 w-10 rounded-[100%]"
          /></span>
        </div>
        <div class="gap-1 flex items-center" v-if="log_display == false">
          <p
            v-if="languageStore.language == 'En'"
            class="font-bold text-lg font-mono hover:text-green-600 text-blue-600"
          >
            login|Creat account
          </p>
          <p
            v-if="languageStore.language == 'Am'"
            class="font-bold text-lg font-mono hover:text-green-600 text-blue-600"
          >
            ይግቡ|መለያ ይፍጠሩ
          </p>
          <img class="h-8 w-auto" src="../assets/login icon.png" alt="login Icon" />
        </div>
      </button>
    </div>

    <NewNotificationBar
      class="absolute w-40 right-2 top-16 mr-0"
      v-if="useNotification.showNotificationBar"
    />
    <SideBar
      class="absolute right-0 top-16 mr-0 shadow-lg border border-gray-300"
      v-if="useNavigator.showSideBar"
    />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import SideBar from "./SideBar.vue";
import NewNotificationBar from "./NewNotificationBar.vue";

import { useNavigationStore } from "../state/showNavigationStore.js";
import { useNotificationStore } from "../state/showNotification.js";
// language start
import { useLanguageStore } from "../state/languageStore";
const languageStore = useLanguageStore();
languageStore.language == "Am";
// language end

var useNotification = useNotificationStore();

var useNavigator = useNavigationStore();
const email = ref("");

const totalCartNumber = ref("");
var numberOfCarts = ref(0);
var numberOfProducts = ref(0);
var cart_email = ref("");
const totalNews = ref(0);
const news = ref([]);
const profilePhoto = ref("");

const lastNotification_id = ref(0);

const role = ref("");

const kebele = localStorage.getItem("kebele");

const seller = localStorage.getItem("seller");

const showedNotificationId = ref();
const log_check = localStorage.getItem("user_id");
const log_display = ref(false);

const user_email = localStorage.getItem("user_email");
const manager_email = localStorage.getItem("manager_email");
const store_email = localStorage.getItem("store_email");
const woreda_admin_email = localStorage.getItem("woreda_admin_email");
const customer_email = localStorage.getItem("customer_email");
var customer_cart_email = ref("");

onMounted(async () => {
  await getTotalCart();
  await getUserProfile();
  // languag start
  if (localStorage.getItem("lang") == "Am") {
    languageStore.language = "Am";
  } else {
    languageStore.language = "En";
  }
  // language end
  if (log_check == 1) {
    log_display.value = true;
  } else {
    log_display.value = false;
  }
  if (localStorage.getItem("user_email") != undefined) {
    await getTotalNews(localStorage.getItem("user_email"));
  }
  if (localStorage.getItem("customer_email") != undefined) {
    await getTotalNews(localStorage.getItem("customer_email"));
  }
  role.value = localStorage.getItem("role");
  console.log(role.value);
});

const getTotalCart = async () => {
  try {
    const response = await axios.get("http://localhost:5000/order");
    totalCartNumber.value = response.data;
    cart_email = localStorage.getItem("user_email");
    customer_cart_email = localStorage.getItem("customer_email");
    for (let x in totalCartNumber.value) {
      if (
        totalCartNumber.value[x].user_email == cart_email &&
        totalCartNumber.value[x].order_kebele == kebele &&
        totalCartNumber.value[x].payStatus == 0
      ) {
        numberOfCarts.value = numberOfCarts.value + 1;
      }
      if (
        (totalCartNumber.value[x].user_email == customer_cart_email &&
          totalCartNumber.value[x].order_kebele == "" &&
          totalCartNumber.value[x].payStatus == 0) ||
        (totalCartNumber.value[x].user_email == cart_email &&
          totalCartNumber.value[x].order_kebele == "" &&
          totalCartNumber.value[x].payStatus == 0)
      ) {
        numberOfProducts.value = numberOfProducts.value + 1;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const notification = async () => {
  useNotification.showNotificationBar = !useNotification.showNotificationBar;
  if (localStorage.getItem("user_email") != undefined) {
    getShowedNotificationByEmail(localStorage.getItem("user_email"));
  }
  if (localStorage.getItem("customer_email") != undefined) {
    getShowedNotificationByEmail(localStorage.getItem("customer_email"));
  }
};

const getTotalNews = async (email) => {
  try {
    const showed = await axios.get(`http://localhost:5000/showedNotification/${email}`);
    showed.data.notification_id;
    showedNotificationId.value = showed.data.notification_id;
    if (showed.data.notification_id == undefined) {
      showedNotificationId.value = 0;
    }
    useNotification.showNewNotificationStart = showedNotificationId.value;

    console.log(showedNotificationId.value);
    console.log(showedNotificationId.value);

    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;

    for (let x in news.value) {
      if (
        (showedNotificationId.value < news.value[x].id &&
          kebele == news.value[x].kebele &&
          user_email != undefined &&
          news.value[x].newsSource == "Mahiberat") ||
        (showedNotificationId.value < news.value[x].id &&
          news.value[x].newsSource == "User")
      )
        totalNews.value = totalNews.value + news.value[x].news_quantity;
      lastNotification_id.value = news.value[x].id;
    }
    useNotification.showNewNotificationEnd = lastNotification_id.value;
  } catch (err) {
    console.log("error", err);
  }
};

const showedNotification = async (email) => {
  await axios.post("http://localhost:5000/showedNotification", {
    email: email,
    notification_id: lastNotification_id.value,
  });
};

const getShowedNotificationByEmail = async (email) => {
  try {
    const showedNO = await axios.get(`http://localhost:5000/showedNotification/${email}`);
    console.log(showedNO.data.notification_id);

    if (showedNO.data.notification_id <= lastNotification_id.value) {
      await updateShowedNotificationByEmail(showedNO.data.email);
    } else {
      await showedNotification(email);
    }
  } catch (err) {
    console.log(err);
  }
};

const updateShowedNotificationByEmail = async (email) => {
  // nOrder = ;
  try {
    await axios.put(`http://localhost:5000/showedNotification/${email}`, {
      notification_id: lastNotification_id.value,
    });
  } catch (err) {}
};
const getUserProfile = async () => {
  try {
    const userProfileResponse = await axios.get("http://localhost:5000/users");
    profilePhoto.value = userProfileResponse.data;
  } catch (err) {
    console.log("Error while uploading profile image: " + err);
  }
};
</script>
