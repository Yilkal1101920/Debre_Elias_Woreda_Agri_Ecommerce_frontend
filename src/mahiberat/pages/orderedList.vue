<template>
  <div class="flex w-full h-full bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="w-full mx-5">
      <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-[95%]">
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/mahiberat/dashboard">
            <span
              ><svg
                class="fill-current h-8 w-auto text-green-600 hover:text-green-900 cursor-pointer"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowCircleLeftOutlinedIcon"
                tabindex="-1"
                title="ArrowCircleLeftOutlined"
              >
                <path
                  d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"
                ></path></svg
            ></span>
          </router-link>
          <p class="text-gray-700 dark:text-white">Back to dashboard</p>
        </div>
        <div><p class="text-2xl font-mono font-bold">Ordered list</p></div>
        <div class="w-[50%] flex gap-0">
          <form action="">
            <div class="">
              <input
                type="search"
                name="search"
                v-model="searchValue"
                id="searchProduct"
                placeholder=" Search"
                class="p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
              />
            </div>
          </form>
          <button
            @click="searchOrder(searchValue)"
            class="text-gray-700 bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
          >
            search
          </button>
        </div>
      </div>

      <div class="overflow-x-auto text-justify flex justify-center mt-3 mb-6">
        <div v-if="isData == false">
          <div colspan="11" class="col-span-full">
            <div class="text-gray-800 dark:text-white block py-11 px-11">
              <P
                class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                >No Product ordered.</P
              >
              <p
                class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
              >
                No thing to show. once farmers order products ordered products will be
                displayed.
              </p>
            </div>
          </div>
        </div>
        <table v-if="isData == true" class="table-auto w-full text-gray-700">
          <thead class="bg-slate-400">
            <tr class="">
              <th class="py-2 pl-2">Name</th>
              <th class="py-2 pl-2">Father Name</th>
              <th class="py-2 pl-2">Email</th>
              <th class="py-2 pl-2">Product Name</th>
              <th class="py-2 pl-2">Price</th>
              <th class="py-2 pl-2">Total</th>
              <th class="py-2 pl-2">Total Price</th>
              <th class="py-2 pl-2">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in orderDatas"
              :key="item.order_id"
              class="hover:bg-slate-200"
            >
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.fName }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.faName }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.user_email }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.title }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.price }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.nOrders }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                {{ item.price * item.nOrders }}
              </td>
              <td v-if="item.kebele == kebele && item.payStatus == 0" class="pl-2">
                <div v-if="item.payStatus == 0" class="flex flex-row">
                  <button
                    class="bg-blue-300 hover:bg-blue-700"
                    @click.prevent="
                      updateOrderByOrderIdforPayment(
                        item.order_id,
                        item.user_email,
                        item.title,
                        item.price,
                        item.nOrders
                      )
                    "
                  >
                    pay
                  </button>
                  <button
                    @click.prevent="getOrderedProductById(item.order_id)"
                    class="pl-3 bg-red-300 hover:bg-red-700"
                  >
                    cancel
                  </button>
                </div>
                <!-- payed -->
                <h1 v-if="item.payStatus == 1">
                  <svg
                    class="fill-current h-6 w-auto text-green-500"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CheckOutlinedIcon"
                    tabindex="-1"
                    title="CheckOutlined"
                  >
                    <path
                      d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    ></path>
                  </svg>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Swal from "sweetalert2";

const router = useRouter();

const datas = ref([]);
const orderDatas = ref("");
const nOrderCart = ref(0);
const productId = ref(0);
const amountRollback = ref(0);

const orderArray = ref([]);
const searchValue = ref([]);

const productName = ref("");
const orderEmail = ref("");
const totalOrderQuantity = ref(0);
const kebele = localStorage.getItem("kebele");
const manager_email = localStorage.getItem("manager_email");
const payment_date = ref("");
const day = ref("");
const dayName = ref("");
const month = ref("");
const monthName = ref("");

var isData = ref("");

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/joinOrder");
    datas.value = response.data;
    orderDatas.value = datas.value;
    for (orderDatas.value.order_id in orderDatas.value) {
      orderArray[orderDatas.value.order_id] =
        orderDatas.value[orderDatas.value.order_id].nOrders;
    }
    for (let x in orderDatas.value) {
      if (orderDatas.value[x].kebele == kebele && orderDatas.value[x].payStatus == 0) {
        isData.value = true;
      }
    }
  } catch (err) {}
};

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
  }
  getProducts();
});

const updateOrderByOrderIdforPayment = async (
  id,
  buyer_email,
  solled_product,
  price,
  quantity
) => {
  try {
    axios.put(`http://localhost:5000/order/payment/${id}`, {
      confirm: 1,
      confir: 1,
      payStatus: 1,
    });
    await insertReport(buyer_email, solled_product, price, quantity);
  } catch (err) {}
  window.location.reload();
};

const getOrderedProductById = async (id) => {
  try {
    const getOrder = await axios.get(`http://localhost:5000/order/${id}`);
    nOrderCart.value = getOrder.data.nOrders;
    productId.value = getOrder.data.product_id;
    orderEmail.value = getOrder.data.user_email;
    await updateAmount(productId.value);
    await deleteOrder(id);
    await getProductbyproductid(productId.value);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

const updateAmount = async (id) => {
  await getProductById(id);
  try {
    axios.put(`http://localhost:5000/rollBack/productsInMarket/${id}`, {
      postedForMarket: amountRollback.value,
      state: 0,
    });
  } catch (err) {}
};

const getProductById = async (id) => {
  try {
    const updatAmount = await axios.get(`http://localhost:5000/products/${id}`);
    amountRollback.value = updatAmount.data.postedForMarket + nOrderCart.value;
  } catch (err) {}
};

const deleteOrder = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/order/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const searchOrder = async (searchResult) => {
  try {
    orderDatas.value = datas.value.filter(
      (order) =>
        order.fName == searchResult ||
        order.faName == searchResult ||
        order.user_email == searchResult ||
        order.title == searchResult
    );
  } catch (err) {
    console.log(err);
  }
};

const getProductbyproductid = async (id) => {
  try {
    const product = await axios.get(`http://localhost:5000/products/${id}`);
    productName.value = product.data.title;
    getTransactionHistoryByEmailAndProductName(productName.value, orderEmail.value);
  } catch (err) {}
};

const getTransactionHistoryByEmailAndProductName = async (name, email) => {
  const transactionHistory = await axios.get(
    `http://localhost:5000/transactionHistory/${name}/${email}`
  );
  totalOrderQuantity.value = transactionHistory.data.NoOrders;
  updateTransactionByEmailAndProductName(name, email);
};

const updateTransactionByEmailAndProductName = async (name, email) => {
  try {
    await axios.put(`http://localhost:5000/transactionHistory/${name}/${email}`, {
      NoOrders: totalOrderQuantity.value - nOrderCart.value,
    });
  } catch (err) {}
};

const insertReport = async (buyer_email, solled_product, price, quantity) => {
  try {
    payment_date.value = new Date();
    const date = new Date(payment_date.value);
    day.value = date.getDay();
    if (day.value == 0) {
      dayName.value = "Monday";
    }
    if (day.value == 1) {
      dayName.value = "Tuesday";
    }
    if (day.value == 2) {
      dayName.value = "Wednsday";
    }
    if (day.value == 3) {
      dayName.value = "Tursday";
    }
    if (day.value == 4) {
      dayName.value = "Friday";
    }
    if (day.value == 5) {
      dayName.value = "Saturday";
    }
    if (day.value == 6) {
      dayName.value = "Sunday";
    }

    month.value = date.getMonth();

    if (month.value == 0) {
      monthName.value = "January";
    }
    if (month.value == 1) {
      monthName.value = "February";
    }
    if (month.value == 2) {
      monthName.value = "March";
    }
    if (month.value == 3) {
      monthName.value = "April";
    }
    if (month.value == 4) {
      monthName.value = "May";
    }
    if (month.value == 5) {
      monthName.value = "June";
    }
    if (month.value == 6) {
      monthName.value = "Junly";
    }
    if (month.value == 7) {
      monthName.value = "Ogust";
    }
    if (month.value == 8) {
      monthName.value = "September";
    }
    if (month.value == 9) {
      monthName.value = "October";
    }
    if (month.value == 10) {
      monthName.value = "November";
    }
    if (month.value == 11) {
      monthName.value = "December";
    }

    await axios.post("http://localhost:5000/report", {
      reporter_email: manager_email,
      product_name: solled_product,
      quantity: quantity,
      report_owner: kebele,
      user_email: buyer_email,
      report_status: "sell",
      transaction: "cash in",
      transaction_in_birr: price,
      day: dayName.value,
      monthName: monthName.value,
      year: date.getFullYear(),
      month: month.value + 1,
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
.bg {
  background-color: #d3f5ce;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
