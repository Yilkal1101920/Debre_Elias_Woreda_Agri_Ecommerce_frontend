<template>
  <div class="bg-green-50 dark:bg-slate-800">
    <div class="flex flex-row h-full w-full">
      <section class="home-section justify-center pl-10 w-full">
        <nav>
          <div class="">
            <span class="text-lg text-gray-700 font-bold font-mono"
              >Debre Elias Agriculture office</span
            >
          </div>
          <div class="profile-details">
            <div v-for="user in users" :key="user.user_id">
              <span class="admin_name" v-if="user.email == woreda_admin_email">{{
                user.fName
              }}</span>
            </div>
          </div>
        </nav>

        <div class="flex flex-col gap-2 pt-16 justify-center px-8">
          <div class="flex justify-center gap-5 border rounded border-gray-300 p-8">
            <div
              class="p-3 w-[33.3%] bg-white border-l-4 border-blue-700 rounded-lg shadow-lg cursor-pointer hover:shadow-md hover:shadow-green-200"
              @click="addEmployer"
              title="Click to Register employ"
            >
              <div class="right-side">
                <div class="flex gap-1 items-center">
                  <span>
                    <svg
                      class="fill-current h-8 w-auto"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      tabindex="-1"
                      title="AddOutlined"
                      data-ga-event-category="material-icons"
                      data-ga-event-action="click"
                      data-ga-event-label="AddOutlined"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                  </span>
                  <div class="font-bold font-mono text-lg text-gray-700">
                    Register Employee
                  </div>
                </div>
                <div class="indicator">
                  <span class="text-sm font-mono text-gray-700"
                    >Register Kebele employee</span
                  >
                </div>
              </div>
            </div>

            <div
              class="box w-[33.3%] border-l-4 border-yellow-700 flex flex-col p-3 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-md hover:shadow-green-200"
              @click="totalEmployer"
              title="Click to see Detail"
            >
              <!-- <div class="right-side"> -->
              <p class="box-topic items-center font-bold font-mono text-lg text-gray-700">
                Total Employees
              </p>
              <div class="flex justify-between">
                <div
                  class="text-yellow-700 text-2xl font-mono font-bold flex justify-start"
                >
                  {{ countEmployers }}
                </div>

                <span class="flex justify-end"
                  ><svg
                    class="fill-current text-green-700 h-9 w-auto"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="Diversity3OutlinedIcon"
                    tabindex="-1"
                    title="Diversity3Outlined"
                  >
                    <path
                      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34C9.5 15.38 10.71 16 12 16s2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
                    ></path>
                    <path
                      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"
                    ></path></svg
                ></span>
              </div>
              <div class="indicator">
                <span class="text font-bold font-mono text-sm text-gray-700"
                  >Number of all employees in Debere Elias woreda's kebele</span
                >
              </div>
              <!-- </div> -->
            </div>

            <div
              @click="activeEmployer"
              title="Click to See Detail"
              class="box w-[33.3%] border-l-4 pr-8 shadow-lg border-green-700 rounded-lg bg-white pt-3 cursor-pointer hover:shadow-md hover:shadow-green-200"
            >
              <div class="right-side pl-2">
                <div class="box-topic font-bold font-mono text-lg text-gray-700">
                  Active Employees
                </div>
                <div class="flex justify-between items-center">
                  <div class="number text-green-700 text-2xl font-mono font-bold">
                    {{ countActiveEmployers }}
                  </div>
                  <span>
                    <svg
                      class="fill-current text-green-700 h-9 w-auto"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="BadgeOutlinedIcon"
                      tabindex="-1"
                      title="BadgeOutlined"
                    >
                      <path d="M14 12h4v1.5h-4zm0 3h4v1.5h-4z"></path>
                      <path
                        d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z"
                      ></path>
                      <circle cx="9" cy="13.5" r="1.5"></circle>
                      <path
                        d="M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="indicator">
                  <span class="text font-mono text-sm text-gray-700"
                    >Approved Employees</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="overview-boxes flex border border-gray-300 mt-4 rounded gap-5 p-8 justify-center"
          >
            <div
              @click="getReport"
              title="Click to see General Report"
              class="box w-[25%] border-l-4 border-yellow-500 pt-3 cursor-pointer hover:shadow-md hover:shadow-green-200"
            >
              <div class="right-side">
                <div class="box-topic font-bold font-mono text-lg text-gray-700 pr-5">
                  Report
                </div>
              </div>
            </div>
            <div
              @click="postNews"
              title="Click to Add Events"
              class="box w-[25%] border-l-4 border-blue-700 pt-3 cursor-pointer hover:shadow-md hover:shadow-green-200"
            >
              <div class="right-side flex items-center gap-1">
                <span>
                  <svg
                    class="fill-current h-8 w-auto"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    tabindex="-1"
                    title="AddOutlined"
                    data-ga-event-category="material-icons"
                    data-ga-event-action="click"
                    data-ga-event-label="AddOutlined"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                  </svg>
                </span>
                <div class="box-topic font-bold font-mono text-lg text-gray-700">
                  Add Events
                </div>
              </div>
            </div>
            <div
              @click="getNews"
              title="Click to see Events"
              class="box w-[25%] border-l-4 border-gray-700 pt-3 cursor-pointer hover:shadow-md hover:shadow-green-200"
            >
              <div class="right-side">
                <div class="box-topic font-bold font-mono text-lg text-gray-700">
                  Total Events
                </div>
              </div>
            </div>
          </div>
          <div
            class="overview-boxes flex justify-center gap-5 p-8 border border-gray-300 mt-4 rounded"
          >
            <div
              @click="approveFarmerProduct"
              title="Click to Detail"
              class="box w-[50%] border-l-4 border-red-500 pt-3 cursor-pointer hover:shadow-md hover:shadow-green-200"
            >
              <div class="right-side">
                <div class="box-topic font-bold font-mono text-lg text-gray-700">
                  Approve Farmers Product
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="flex justify-center">
      <UserReportAnalysis class="border border-gray-300" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import UserReportAnalysis from "./userReportChart.vue";
import Swal from "sweetalert2";

const router = useRouter();
const woreda_admin_email = localStorage.getItem("woreda_admin_email");
const users = ref([]);
const countEmployers = ref(0);
const Employers = ref("");
const Activemployers = ref("");
const Role = ref("");
const countActiveEmployers = ref("");

onMounted(() => {
  if (
    localStorage.getItem("woreda_admin_email") == undefined ||
    localStorage.getItem("woreda_admin_email") == null ||
    localStorage.getItem("role") != "woreda_admin"
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "please login first!",
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
    router.replace("/login");
  } else {
    getUser();
    getTotalEmployers();
    getActiveEmployers();
  }
});

const getTotalEmployers = async () => {
  try {
    const employers = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    Employers.value = employers.data;
    for (let x in Employers.value) {
      if (
        Employers.value[x].user_role == "manager" ||
        Employers.value[x].user_role == "store"
      ) {
        countEmployers.value++;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getActiveEmployers = async () => {
  try {
    const activemployers = await axios.get("http://localhost:5000/users");
    Activemployers.value = activemployers.data;
    for (let x in Activemployers.value) {
      if (
        (Activemployers.value[x].user_role == "manager" ||
          Activemployers.value[x].user_role == "store") &&
        Activemployers.value[x].user_state == 1
      ) {
        countActiveEmployers.value++;
      }
    }
  } catch (err) {}
};

const getUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    users.value = response.data;
    Role.value = users.value.user_role;
  } catch (err) {
    console.log(err);
  }
};

const addEmployer = () => {
  router.push("addEmployer");
};
const totalEmployer = () => {
  router.replace("totalEmployer");
};
const activeEmployer = () => {
  router.push("activeEmployer");
};
const approveFarmerProduct = () => {
  router.push("product/approve");
};
const postNews = () => {
  router.push("addNews");
};
const getNews = () => {
  router.push("postedNews");
};
const getReport = () => {
  router.push("report");
};
</script>

<style scoped>
/* Googlefont Poppins CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.home-section {
  position: static;
  /* min-height: 100vh; */
  transition: all 0.5s ease;
}
.home-section {
  width: calc(100% - 60px);
  left: 60px;
}
.home-section nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  position: static;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.home-section nav {
  left: 60px;
  width: calc(100% - 60px);
}
.home-section nav {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
}
nav i {
  font-size: 35px;
  margin-right: 10px;
}
.home-section nav .search-box {
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
}
nav .search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}
nav .search-box .bx-search {
  position: absolute;
  height: 40px;
  width: 40px;
  background: #2697ff;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  transition: all 0.4 ease;
}
.home-section nav .profile-details {
  display: flex;
  align-items: center;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  height: 50px;
  min-width: 190px;
  padding: 0 15px 0 2px;
}
nav .profile-details img {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  object-fit: cover;
}
nav .profile-details .admin_name {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
}
nav .profile-details i {
  font-size: 25px;
  color: #333;
}

.overview-boxes .box {
  display: flex;
  justify-content: center;
  background: #fff;
  padding: 15px 14px;
  border-radius: 12px;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.overview-boxes .box-topic {
  font-size: 20px;
  font-weight: 500;
}
.home-content .box .number {
  display: inline-block;
  font-size: 35px;
  margin-top: -6px;
  font-weight: 500;
}
.home-content .box .indicator {
  display: flex;
  align-items: center;
}
.home-content .box .indicator i {
  height: 20px;
  width: 20px;
  background: #8fdacb;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
}
.box .indicator i.down {
  background: #e87d88;
}
.home-content .box .indicator .text {
  font-size: 12px;
}
.home-content .box .cart {
  display: inline-block;
  font-size: 32px;
  height: 50px;
  width: 50px;
  background: #cce5ff;
  line-height: 50px;
  text-align: center;
  color: #66b0ff;
  border-radius: 12px;
  margin: -15px 0 0 6px;
}
.home-content .box .cart.two {
  color: #2bd47d;
  background: #c0f2d8;
}
.home-content .box .cart.three {
  color: #ffc233;
  background: #ffe8b3;
}
.home-content .box .cart.four {
  color: #e05260;
  background: #f7d4d7;
}
.home-content .total-order {
  font-size: 20px;
  font-weight: 500;
}
.home-content .sales-boxes {
  display: flex;
  justify-content: space-between;
  /* padding: 0 20px; */
}

/* left box */
.home-content .sales-boxes .recent-sales {
  width: 65%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.home-content .sales-boxes .sales-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-boxes .box .title {
  font-size: 24px;
  font-weight: 500;
  /* margin-bottom: 10px; */
}
.sales-boxes .sales-details li.topic {
  font-size: 20px;
  font-weight: 500;
}
.sales-boxes .sales-details li {
  list-style: none;
  margin: 8px 0;
}
.sales-boxes .sales-details li a {
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;
}
.sales-boxes .box .button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.sales-boxes .box .button a {
  color: #fff;
  background: #0a2558;
  padding: 4px 12px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.sales-boxes .box .button a:hover {
  background: #0d3073;
}

/* Right box */
.home-content .sales-boxes .top-sales {
  width: 35%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px 0 0;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.sales-boxes .top-sales li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.sales-boxes .top-sales li a img {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 10px;
  background: #333;
}
.sales-boxes .top-sales li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sales-boxes .top-sales li .product,
.price {
  font-size: 17px;
  font-weight: 400;
  color: #333;
}
/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar {
    width: 60px;
  }
  .sidebar.active {
    width: 220px;
  }
  .home-section {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section {
    /* width: calc(100% - 220px); */
    overflow: hidden;
    left: 220px;
  }
  .home-section nav {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section nav {
    width: calc(100% - 220px);
    left: 220px;
  }
}
@media (max-width: 1150px) {
  .home-content .sales-boxes {
    flex-direction: column;
  }
  .home-content .sales-boxes .box {
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 30px;
  }
  .home-content .sales-boxes .top-sales {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .overview-boxes .box {
    width: calc(100% / 2 - 15px);
    margin-bottom: 15px;
  }
}
@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i {
    display: none;
  }
  .home-section nav .profile-details {
    height: 50px;
    min-width: 40px;
  }
  .home-content .sales-boxes .sales-details {
    width: 560px;
  }
}
@media (max-width: 550px) {
  .overview-boxes .box {
    width: 100%;
    margin-bottom: 15px;
  }
  .sidebar.active ~ .home-section nav .profile-details {
    display: none;
  }
}
@media (max-width: 400px) {
  .sidebar {
    width: 0;
  }
  .sidebar.active {
    width: 60px;
  }
  .home-section {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section {
    left: 60px;
    width: calc(100% - 60px);
  }
  .home-section nav {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section nav {
    left: 60px;
    width: calc(100% - 60px);
  }
}
</style>
