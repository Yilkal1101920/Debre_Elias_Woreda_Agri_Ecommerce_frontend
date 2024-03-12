<template>
  <div class="bg-green-50 dark:bg-slate-800 w-full h-full">
    <div
      class="pt-4 mx-6 text-gray-700 dark:text-white justify-center items-center w-full"
    >
      <nav class="flex justify-between px-6 bg-white shadow-md p-3">
        <div class="">
          <span class="text-lg text-gray-700 dark:text-gray-800 font-bold font-mono"
            >{{ kebele }} Mahiberat</span
          >
        </div>
        <div class="">
          <div v-for="user in activeUsers" :key="user.user_id">
            <span
              class="font-mon font-bold text-lg text-gray-800 dark:text-gray-800"
              v-if="user.kebele == kebele && user.email == manager_email"
              >{{ user.fName }}</span
            >
          </div>
        </div>
      </nav>
      <div
        class="flex gap-4 border p-8 border-gray-300 mt-4 mb-11 justify-center items-center flex-wrap"
      >
        <div
          @click="transactionHistory"
          title="Click to see detail"
          class="cursor-pointer shadow-md hover:shadow-lg bg-blue-200 py-6 border-l-8 border-blue-700 w-[49%] rounded-lg"
        >
          <p class="font-mono font-bold text-lg text-center">Revenu</p>
          <h2 class="font-mono font-bold text-lg text-center">{{ totalRevenue }} Birr</h2>
        </div>
        <div
          @click="transactionHistory"
          title="Click to see detail"
          class="cursor-pointer shadow-md hover:shadow-lg bg-red-200 py-6 border-l-8 border-red-700 w-[49%] rounded-lg"
        >
          <p class="font-mono font-bold text-lg text-center">Expense</p>
          <h2 class="font-mono font-bold text-lg text-center">{{ totalExpense }} Birr</h2>
        </div>
      </div>
      <div
        class="flex gap-4 mb-2 border border-gray-300 p-8 flex-wrap justify-center items-center text-gray-700 dark:text-white"
      >
        <div
          @click="membersPage"
          title="Click to see detail"
          class="border-l-4 border-blue-700 hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 cursor-pointer shadow-md h-20 bg-white py-2 w-[30%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg pl-5">Customers</h2>
          <h2 class="font-mono font-bold text-2xl pl-5 text-blue-700">
            {{ countMembers }}
          </h2>
        </div>
        <div
          @click="activeSystemUsers"
          title="Click to see detail"
          class="border-l-4 border-green-700 hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 cursor-pointer shadow-md h-20 bg-white py-2 w-[30%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg pl-5">Active users</h2>
          <h2 class="font-mono font-bold text-2xl pl-5 text-green-700">
            {{ countActiveSystemUsers }}
          </h2>
        </div>
        <div
          @click="ordersPage"
          title="Click to see detail"
          class="border-l-4 border-yellow-700 hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 cursor-pointer shadow-md h-20 bg-white py-2 w-[30%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg pl-5">Order</h2>
          <h2 class="font-mono font-bold text-2xl text-yellow-700 pl-5">
            {{ countOrders }}
          </h2>
        </div>
        <div
          @click="productsPage"
          title="Click to see detail"
          class="border-l-4 border-red-700 hover:shadow-lg text-gray-800 dark:text-gray-800 hover:shadow-green-200 cursor-pointer shadow-md h-20 bg-white py-2 w-[30%] rounded-lg"
        >
          <h2 class="font-mono font-bold text-lg pl-5">Total products</h2>
          <h2 class="font-mono font-bold text-2xl pl-5 text-red-700">
            {{ countProducts }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const members = ref("");
const Orders = ref("");
const Products = ref("");
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const countMembers = ref(0);
const countActiveSystemUsers = ref(0);
const countOrders = ref(0);
const countProducts = ref(0);
const activeUsers = ref([]);
const manager_email = localStorage.getItem("manager_email");
const filteredJsonData = ref("");
const reportInfo = ref([]);
const filteredReport = ref([]);
const totalExpense = ref(0);
const totalRevenue = ref(0);

onMounted(async () => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
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
    await getTotalMahiberatMembers();
    await getTotalOrders();
    await getTotalProducts();
    await getUsers();
    await getTotalReport();
    await getTotalExpenseAndRevenue();
  }
});
const getTotalMahiberatMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    members.value = users.data;
    for (let x in members.value) {
      if (kebele == members.value[x].kebele && members.value[x].user_role == "user") {
        countMembers.value++;
      }
    }
  } catch (err) {}
};

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    activeUsers.value = users.data;
    for (let x in activeUsers.value) {
      if (
        kebele == activeUsers.value[x].kebele &&
        activeUsers.value[x].user_state == 1 &&
        activeUsers.value[x].user_role == "user" &&
        activeUsers.value[x].password != ""
      ) {
        countActiveSystemUsers.value++;
      }
    }
  } catch (err) {}
};

const membersPage = async () => {
  router.replace("/mahiberat/totalMembers");
};

const activeSystemUsers = async () => {
  router.replace("/mahiberat/activeUsers");
};

const transactionHistory = async () => {
  router.replace("/mahiberat/report");
};

const getTotalOrders = async () => {
  try {
    const orders = await axios.get("http://localhost:5000/joinOrder");
    Orders.value = orders.data;
    for (let x in Orders.value) {
      if (kebele == Orders.value[x].kebele && Orders.value[x].payStatus == 0) {
        countOrders.value++;
      }
    }
  } catch (err) {}
};

const ordersPage = async () => {
  router.replace("/mahiberat/orderList");
};

const getTotalProducts = async () => {
  try {
    const products = await axios.get("http://localhost:5000/products");
    Products.value = products.data;

    // Create an empty object to store unique names
    const uniqueNames = {};
    const sums = {};
    const sumsPostedForMarket = {};
    const filteredProducts = Products.value.filter(
      (item) =>
        item.seller == "mahiberat" && item.kebele == kebele && item.marketState == 1
    );
    // Loop through the array and add each unique name to the object
    filteredProducts.forEach((obj) => {
      if (obj.seller == "mahiberat" && obj.kebele == kebele) {
        if (sums[obj.title]) {
          sums[obj.title] += obj.amount;
        } else {
          sums[obj.title] = obj.amount;
        }
        if (sumsPostedForMarket[obj.title]) {
          sumsPostedForMarket[obj.title] += obj.postedForMarket;
        } else {
          sumsPostedForMarket[obj.title] = obj.postedForMarket;
        }
        uniqueNames[obj.title] = true;
      }
    });
    // Create a new array of objects with unique names
    const filteredArray = Object.keys(uniqueNames).map((title) => {
      const obj = filteredProducts.find((item) => item.title == title);
      return {
        product_id: obj.product_id,
        post_email: obj.post_email,
        category: obj.category,
        type_product: obj.type_product,
        title,
        kebele: obj.kebele,
        original_cost: obj.original_cost,
        price: obj.price,
        amount: sums[title],
        postedForMarket: obj.postedForMarket,
        seller: obj.seller,
        image: obj.image,
        address: obj.address,
        description: obj.description,
        marketState: obj.marketState,
      };
    });
    // Convert the filtered array back to JSON
    filteredJsonData.value = filteredArray;
    console.log(filteredJsonData.value);
    for (let x in filteredJsonData.value) {
      if (
        filteredJsonData.value[x].kebele === kebele &&
        filteredJsonData.value[x].seller === "mahiberat" &&
        filteredJsonData.value[x].postedForMarket != 0 &&
        filteredJsonData.value[x].marketState === 1
      ) {
        countProducts.value = countProducts.value + 1;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const productsPage = async () => {
  router.replace("/mahiberat/productsList");
};
const getTotalReport = async () => {
  try {
    const reportData = await axios.get("http://localhost:5000/report");
    reportInfo.value = reportData.data;
    filteredReport.value = reportInfo.value;
  } catch (err) {}
};

const getTotalExpenseAndRevenue = async () => {
  for (let x in filteredReport.value) {
    if (filteredReport.value[x].report_owner == kebele) {
      if (filteredReport.value[x].transaction == "cash out") {
        totalExpense.value =
          totalExpense.value +
          filteredReport.value[x].quantity * filteredReport.value[x].transaction_in_birr;
      }
      if (filteredReport.value[x].transaction == "cash in") {
        totalRevenue.value =
          totalRevenue.value +
          filteredReport.value[x].quantity * filteredReport.value[x].transaction_in_birr;
      }
    }
  }
};
</script>
