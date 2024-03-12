<template>
  <div
    class="w-60 pl-5 bg-blue-100 dark:bg-gray-800 py-5 border-1 border-blue-300 sticky top-0"
  >
    <div class="text-black dark:text-white">
      <div class="">
        <h1><b>Admin Panel</b></h1>
      </div>
      <div class="">
        <ul class="p-4 gap-5">
          <li class="">
            <div class="flex flex-row fucus:border-red-500">
              <button
                class="flex flex-row focus:text-green-600 focus:border-l-4 focus:border-green-800"
                @click.prevent="dashShow"
              >
                <svg
                  class="w-5 h-5 border-none text-gray-800 focus:text-green-600"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="HomeIcon"
                  tabindex="-1"
                  title="Home"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Dashboard</h1>
              </button>
            </div>
          </li>
          <li class="pt-2">
            <div class="flex flex-row">
              <button
                class="flex flex-row focus:text-green-600 focus:border-l-4 focus:border-green-800"
                @click.prevent="newMore = !newMore"
              >
                <svg
                  class="w-6 h-6 white:text-dark"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FeedOutlinedIcon"
                  tabindex="-1"
                  title="FeedOutlined"
                >
                  <path
                    d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM7 17h10v-2H7v2zm5-10H7v2h5V7zm-5 6h10v-2H7v2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">News</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <ul v-if="newMore" class="p-3">
              <li class="pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="addInformation"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Add News
                </button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="showPostedNews"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Posted News
                </button>
              </li>
            </ul>
          </li>
          <li class="pt-2">
            <div class="flex flex-row">
              <button
                class="flex flex-row focus:text-green-600 focus:border-l-4 focus:border-green-800"
                @click.prevent="mMore = !mMore"
              >
                <svg
                  class="w-5 h-5"
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
                  <path d="M9 12h6v2H9z"></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Products</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <ul v-if="mMore" class="p-3">
              <li class="pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="productAdd"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Product Add
                </button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="productList"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Product List
                </button>
              </li>
            </ul>
          </li>
          <li class="pt-2">
            <div>
              <button
                class="flex flex-row focus:text-green-600 focus:border-l-4 focus:border-green-800"
                @click.prevent="fMore = !fMore"
              >
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AddShoppingCartOutlinedIcon"
                  tabindex="-1"
                  title="AddShoppingCartOutlined"
                >
                  <path
                    d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Orders</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <ul v-if="fMore" class="p-3">
              <li class="pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="orderList"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Order List
                </button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="orderRestriction"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Add Restriction
                </button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="orderRestrictionList"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Restriction List
                </button>
              </li>
            </ul>
          </li>
          <li class="pt-4">
            <button
              @click.prevent="uMore = !uMore"
              class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
            >
              <div class="flex flex-row">
                <svg
                  class="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccessibilityIcon"
                  tabindex="-1"
                  title="Accessibility"
                >
                  <path
                    d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">users</h1>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-4 p-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </div>
            </button>
            <ul v-if="uMore" class="p-3">
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="activeUsers"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Active users
                </button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="addNewMember"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Add Members
                </button>
              </li>
              <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">
                <button
                  @click.prevent="totalMembers"
                  class="focus:text-green-600 focus:border-l-4 focus:border-green-800"
                >
                  Total Members
                </button>
              </li>
            </ul>
          </li>
          <!-- <li class="pt-4 focus:text-green-600 focus:border-l-4 focus:border-green-800">
            <div @click.prevent="showDepartment" class="flex flex-row">
              <svg
                class="w-5 h-5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LocalFireDepartmentIcon"
                tabindex="-1"
                title="LocalFireDepartment"
              >
                <path
                  d="m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"
                ></path>
                <path
                  d="m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"
                ></path>
              </svg>
              <h1 class="pl-3 cursor-pointer hover:text-green-700">Department</h1>
              <button @click.prevent=""></button>
            </div>
          </li> -->
          <li class="pt-4">
            <div class="flex flex-row">
              <button
                class="flex flex-row focus:text-green-600 focus:border-l-4 focus:border-green-800"
                @click.prevent="reportShow"
              >
                <svg
                  class="w-6 h-6 dark:text-black"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AssessmentOutlinedIcon"
                  tabindex="-1"
                  title="AssessmentOutlined"
                >
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
                  ></path>
                </svg>
                <h1 class="pl-3 hover:text-green-700">Report</h1>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div class="flex flex-row">
              <button
                class="flex flex-row focus:text-green-600 focus:border-l-4 focus:border-green-800"
                @click.prevent="settingShow"
              >
                <svg
                  class="w-6 h-6 dark:text-black"
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
                <h1 class="pl-3 hover:text-green-700">Settings</h1>
              </button>
            </div>
          </li>
          <li class="pt-4">
            <div @click.prevent="chatWithUsers" class="flex flex-row">
              <svg
                class="w-6 h-6 dark:text-black"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SmsOutlinedIcon"
                tabindex="-1"
                title="SmsOutlined"
              >
                <path
                  d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"
                ></path>
              </svg>
              <h1 class="pl-3 cursor-pointer hover:text-green-700">Conversation</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const mMore = ref(false);
const aMore = ref(false);
const fMore = ref(false);
const newMore = ref(false);
const uMore = ref(false);

const productAdd = () => {
  router.replace("/mahiberat/addProduct");
};
const productList = () => {
  router.replace("/mahiberat/productsList");
};
const dashShow = () => {
  router.replace("/mahiberat/dashboard");
};
const addInformation = () => {
  router.replace("/mahiberat/addNews");
};
const showPostedNews = () => {
  router.replace("/mahiberat/postedNews");
};
const orderList = () => {
  router.replace("/mahiberat/orderList");
};
const orderRestriction = () => {
  router.replace("/mahiberat/orderRestriction");
};
const orderRestrictionList = () => {
  router.replace("/mahiberat/orderRestrictionList");
};

const chatWithUsers = () => {
  router.replace("/mahiberat/chat");
};

const showDepartment = () => {
  router.replace("/mahiberat/department");
};

const activeUsers = () => {
  router.replace("/mahiberat/activeUsers");
};
const addNewMember = () => {
  router.replace("/mahiberat/addNewMember");
};
const totalMembers = () => {
  router.replace("/mahiberat/totalMembers");
};
const reportShow = () => {
  router.replace("/mahiberat/report");
};
const settingShow = () => {
  router.replace("/mahiberat/settings");
};
</script>
