<template>
  <div class="bg-green-50 dark:bg-slate-800 w-full h-full">
    <div class="pt-4 mx-6 text-gray-700 dark:text-white justify-center items-center">
      <nav class="flex justify-between px-6 bg-white shadow-md p-3">
        <div class="">
          <span class="text-lg text-gray-700 dark:text-gray-800 font-bold font-mono">{{
            kebele
          }}</span>
        </div>
        <div class="">
          <div v-for="user in activeUsers" :key="user.user_id">
            <span
              class="font-mon font-bold text-lg text-gray-800 dark:text-gray-800"
              v-if="user.email == user_email"
              >{{ user.fName }} {{ user.faName }}</span
            >
          </div>
        </div>
      </nav>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-11 gap-5 px-8">
        <div
          @click="addProduct"
          title="Click to add product"
          class="cursor-pointer shadow-md border-l-4 border-blue-700 bg-white py-6 rounded-lg"
        >
          <p class="font-mono font-bold text-lg pl-8">Add Product</p>
          <h2 class="font-mono font-bold text-lg pl-8"></h2>
        </div>
        <div
          @click="productList"
          title="Click to see product detail"
          class="cursor-pointer bg-white shadow-md py-6 rounded-lg border-l-4 border-orange-700"
        >
          <p class="font-mono font-bold text-lg pl-8">Total Products</p>
          <h2 class="font-mono font-bold text-2xl pl-8 text-orange-700">
            {{ countProducts }}
          </h2>
        </div>
        <div
          @click="orderList"
          title="Click to see detail"
          class="bg-white border-l-4 border-yellow-700 cursor-pointer py-6 rounded-lg"
        >
          <p class="font-mono font-bold text-lg pl-8">Orders</p>
          <h2 class="font-mono font-bold text-2xl text-yellow-700 pl-8">
            {{ countOrders }}
          </h2>
        </div>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 pb-3 gap-5 px-8">
        <div
          @click="postEvents"
          title="Click to aad Events"
          class="bg-white border-l-4 border-green-700 cursor-pointer shadow-md py-6 rounded-lg"
        >
          <p class="font-mono font-bold text-lg pl-8">Add News</p>
        </div>
        <div
          @click="postedEvents"
          title="Click to see Detail"
          class="bg-white border-l-4 border-gray-700 cursor-pointer shadow-md py-6 rounded-lg"
        >
          <p class="font-mono font-bold text-lg pl-8">Posted News</p>
        </div>
        <div
          @click="transactionHistory"
          title="Click to see Detail"
          class="bg-white border-l-4 border-blue-400 cursor-pointer shadow-md py-6 rounded-lg"
        >
          <p class="font-mono font-bold text-lg pl-8">Report</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 md:flex md:flex-row md:justify-around md:items-center"
    >
      <h2 class="py-2 text-3xl text-center">Your Transaction Analysis</h2>
      <select name="" id="">
        <option value="">Year</option>
        <option value="">2015 E.C</option>
      </select>
    </div>
    <userTransactionAnalysis class="px-8 pb-11 flex justify-center" />
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import userTransactionAnalysis from "./reportChart.vue";
const Orders = ref("");
const Products = ref("");
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const countOrders = ref(0);
const countProducts = ref(0);
const activeUsers = ref([]);
const totalExpenseInBirr = ref(0);
const user_email = localStorage.getItem("user_email");

onMounted(async () => {
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user"
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
  }
  await getTotalOrders();
  await getTotalProducts();
});

const transactionHistory = async () => {
  router.replace("/farmer/transactionHistory");
};
const orderList = async () => {
  router.replace("/farmer/orderList");
};

const reportChart = async () => {
  router.replace("/farmer/reportChart");
};

const postEvents = async () => {
  router.replace("/farmer/addNews");
};
const postedEvents = async () => {
  router.replace("/farmer/postedNews");
};

const addProduct = async () => {
  router.replace("/farmer/addProduct");
};

const productList = async () => {
  router.replace("/farmer/productList");
};

const getTotalOrders = async () => {
  try {
    const orders = await axios.get("http://localhost:5000/joinOrder");
    Orders.value = orders.data;
    for (let x in Orders.value) {
      if (user_email == Orders.value[x].patent_email && Orders.value[x].payStatus == 0) {
        countOrders.value++;
      }
    }
  } catch (err) {}
};

const getTotalProducts = async () => {
  try {
    const products = await axios.get("http://localhost:5000/products");
    Products.value = products.data;
    for (let x in Products.value) {
      if (
        kebele == Products.value[x].kebele &&
        user_email == Products.value[x].post_email &&
        Products.value[x].marketState == 1
      ) {
        countProducts.value++;
      }
    }
  } catch (err) {}
};
</script>
