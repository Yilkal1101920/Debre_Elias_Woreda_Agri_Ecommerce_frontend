<template>
  <div class="bg-green-50 dark:bg-gray-800 h-full w-full">
    <div class="flex flex-col lg:mx-8">
      <div class="inset-x-20 inset-y-0">
        <div class="">
          <div
            class="overflow-x-auto text-justify flex justify-center mt-6 shadow-md shadow-gray-500"
          >
            <table class="tableClass table-auto w-full">
              <thead class="text-gray-700 bg-slate-400">
                <tr class="">
                  <th class="py-2 pl-12">
                    <p v-if="languageStore.language == 'Am'">የሻጭ ስም</p>
                    <p v-if="languageStore.language == 'En'">Seller Name</p>
                  </th>
                  <th class="py-2 pl-12">
                    <p v-if="languageStore.language == 'Am'">የእቃው መለያ</p>
                    <p v-if="languageStore.language == 'En'">Product Id</p>
                  </th>
                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">ስም</p>
                    <p v-if="languageStore.language == 'En'">Name</p>
                  </th>
                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">መደብ</p>
                    <p v-if="languageStore.language == 'En'">Category</p>
                  </th>

                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">ዋጋ</p>
                    <p v-if="languageStore.language == 'En'">Price</p>
                  </th>
                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">የእቃ ድምር</p>
                    <p v-if="languageStore.language == 'En'">Quantity</p>
                  </th>
                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">ጠቅላላ ዋጋ</p>
                    <p v-if="languageStore.language == 'En'">Total Price</p>
                  </th>
                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">ምስል</p>
                    <p v-if="languageStore.language == 'En'">Image</p>
                  </th>
                  <th class="py-2 pl-2">
                    <p v-if="languageStore.language == 'Am'">ምርመራ</p>
                    <p v-if="languageStore.language == 'En'">Confirm</p>
                  </th>
                  <th class="py-2 pl-2">
                    <select v-model="selectedFarmer">
                      <option value="">Pay</option>
                      <option
                        v-for="farmer in selectedFarmers"
                        :value="farmer.patent_email"
                      >
                        {{ farmer.fName }}
                      </option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody
                class="text-lg font-bold text-gray-800 dark:text-white text-center"
                v-if="loading"
              >
                <!-- <Circle4></Circle4> -->
                <vue-spinner
                  :color="'#007aff'"
                  :size="'50px'"
                  :margin="'5px'"
                  :radius="'100%'"
                />
                Loading...
              </tbody>
              <tbody v-for="farmer in getFarmers" class="text-gray-700">
                <tr
                  v-if="farmer.user_role == 'user' && farmer.user_state == 1"
                  v-for="item in Ordereddatas"
                  :key="item.order_id"
                  class="hover:bg-slate-200"
                >
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-12"
                  >
                    {{ farmer.fName }}
                    {{ farmer.faName }}
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-12"
                  >
                    {{ item.product_id }}
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-2"
                  >
                    {{ item.title }}
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-2"
                  >
                    {{ item.category }}
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-2"
                  >
                    {{ item.price }}
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-2"
                  >
                    <div>
                      <input
                        type="text"
                        v-if="item.confirm != 1"
                        class="w-12 hover:shadow-md hover:shadow-green-300 h-4 form-control block p text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="orderArray[item.order_id]"
                        v-model.content="item.nOrders"
                      />
                      <h1 v-if="item.confir == 1">{{ item.nOrders }}</h1>
                    </div>
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class=""
                  >
                    {{ item.price * item.nOrders }}
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-2"
                  >
                    <img class="w-10 h-8" :src="item.image" />
                  </td>
                  <td
                    v-if="
                      farmer.email == item.patent_email &&
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 0
                    "
                    class="pl-2"
                  >
                    <div class="flex flex-row">
                      <!-- confirm -->
                      <button
                        v-if="item.confirm != 1"
                        class="hover:cursor-pointer mr-3"
                        @click.prevent="checkInput(item.order_id)"
                      >
                        <svg
                          class="fill-current h-6 w-auto text-green-600"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ThumbUpAltOutlinedIcon"
                          tabindex="-1"
                          title="ThumbUpAltOutlined"
                        >
                          <path
                            d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"
                          ></path>
                        </svg>
                      </button>
                      <!-- confirmed -->
                      <h1 v-if="item.confir == 1">
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
                      <!-- cancel -->
                      <button
                        v-if="item.confirm != 1"
                        class="hover:cursor-pointer ml-3"
                        @click.prevent="getOrderedProductById(item.order_id)"
                      >
                        <svg
                          class="fill-current h-6 w-auto text-red-500"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ClearOutlinedIcon"
                          tabindex="-1"
                          title="ClearOutlined"
                        >
                          <path
                            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                          ></path>
                        </svg>
                      </button>
                      <!-- canceled -->
                      <h v-if="item.cancel == 1">
                        <svg
                          class="fill-current h-6 w-auto text-red-900"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="CancelOutlinedIcon"
                          tabindex="-1"
                          title="CancelOutlined"
                        >
                          <path
                            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
                          ></path>
                        </svg>
                      </h>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            v-if="languageStore.language == 'Am'"
            type="submit"
            class="text-lg p-4 m-6 text-gray-700 text-center bg-green-200 font-mono rounded-lg shadow-md"
          >
            ጠቅላላ ክፍያ = {{ totalCostInBirr }} ብር
          </p>
          <p
            v-if="languageStore.language == 'En'"
            type="submit"
            class="text-lg p-4 m-6 text-gray-700 text-center bg-green-200 font-mono rounded-lg shadow-md"
          >
            Total Price = {{ totalCostInBirr }} Birr
          </p>
          <div class="flex justify-center py-5">
            <button
              type="submit"
              class="text-lg font-bold py-2 px-11 flex justify-center shadow-gray-700 bg-green-300 text-white font-mono rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-non active:shadow-lg transition duration-150 ease-in-out"
              @click.prevent="gotoInfoPage(selectedFarmer)"
            >
              <p v-if="languageStore.language == 'Am'" class="text-lg font-bold">
                አሁን ይክፈሉ
              </p>
              <p v-if="languageStore.language == 'En'" class="text-lg font-bold">
                pay now
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="pl-11 pt-4 flex flex-row gap-2 items-center border-2 p-4 my-3">
        <div class="">
          <p class="text-2xl font-bold font-mono">Your cart from mahiberat or farmer</p>
          <p>
            This is your cart from mahiberat or or farmers. The cart count which is shown
            on top navigation bar is the cart you add from mahiberat or customer. To
            navigate click the cart shown here.
          </p>
        </div>
        <div class="rounded-full h-11 w-11 pl-2 pb-2 flex flex-col justify-center">
          <div class="flex flex-col text-gray-800 dark:text-text-gray-800">
            <button
              class="absolute ml-3 bg-orange-500 w-6 h-6 rounded-[100%] flex justify-center text-lg font-bold font-mono text-white"
              @click.prevent="changeCart()"
            >
              {{ numberOfCarts }}
            </button>
          </div>
          <RouterLink to="/product/cart"
            ><svg class="pt-3 fill-current text-blue-900 w-8 h-8">
              <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              ></path></svg
          ></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// sweetalert start

import Swal from "sweetalert2";
// sweetalert end here

import { useLanguageStore } from "../state/languageStore";

const languageStore = useLanguageStore();

//loading

import VueSpinner from "vue-spinner/src/PulseLoader.vue";

//end loading

import { useReportsData } from "../state/reportStore";

const ReportsData = useReportsData();

const router = useRouter();
const datas = ref([]);
const Ordereddatas = ref([]);
const nOrderCart = ref(0);
const productId = ref(0);
var cart_email = localStorage.getItem("customer_email");
const amountRollback = ref(0);

const orderArray = ref([]);
const getFarmers = ref([]);
const getSellerFarmer = ref([]);
const orderDifference = ref(0);

const confirmDisplay = ref([]);

const totalCost = ref("");
var totalCostInBirr = ref(0);
const productName = ref("");
const postedProductForMarket = ref(0);
var orderRecord = ref("");
const selectedProductsToSell = ref([]);
const sellerId = ref("");
const loading = ref(true);
const selectedFarmer = ref("");
const selectedFarmers = ref("");

var reportDatas = ref([]);
var reportData = ref({});

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/order");
    datas.value = response.data;

    confirmDisplay.value[datas.value.order_id] = true;
  } catch (err) {}
};

const getSellerFarmers = async (email) => {
  try {
    const response = await axios.get("http://localhost:5000/farmers");
    getSellerFarmer.value = response.data;
    selectedFarmers.value = getSellerFarmer.value.filter(
      (seller) => seller.user_email == cart_email
    );
  } catch (err) {}
};

const getOrderedProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    Ordereddatas.value = response.data;

    confirmDisplay.value[Ordereddatas.value.order_id] = true;
    for (let x in Ordereddatas.value) {
      orderRecord.value = orderRecord.value + Ordereddatas.value[x].patent_email + " ";
    }
    loading.value = false;
  } catch (err) {}
};

const getOrderedProductById = async (id) => {
  try {
    const getOrder = await axios.get(`http://localhost:5000/order/${id}`);
    nOrderCart.value = getOrder.data.nOrders;
    productId.value = getOrder.data.product_id;

    confirmDisplay.value[getOrder.data.order_id] = false;
    await getProductbyproductid(productId.value);
    await updateOrderByOrderIdCancel(id);
    await updateAmount(productId.value);
    await deleteOrder(id);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }

  confirm.value[id] = 1;
  cancel.value[id] = 1;
};

const checkInput = async (id) => {
  if (orderArray.value[id] > 0 || orderArray.value[id] == undefined) {
    getOrderedProductByIdforConfirm(id);
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የተሳሳተ ቁጥር አስገብተዋል!",
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
  }
};

const getOrderedProductByIdforConfirm = async (id) => {
  try {
    const getOrder = await axios.get(`http://localhost:5000/order/${id}`);
    productId.value = getOrder.data.product_id;
    if (orderArray.value[id] == undefined) {
      orderArray.value[id] = getOrder.data.nOrders;
    }
    orderDifference.value = getOrder.data.nOrders - orderArray.value[id];
    confirmDisplay.value[getOrder.data.order_id] = false;
    await getProductbyproductidConfirm(productId.value);
    if (postedProductForMarket.value + orderDifference.value >= 0) {
      await updateOrderByOrderId(id);
      await updateAmountforConfirm(productId.value);
      await updateOrder(id);
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Product in the market is finished!",
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
    }
    window.location.reload();
  } catch (err) {
    console.log(err);
  }

  confirm.value[id] = 1;
  confir.value[id] = 1;
};

onMounted(async () => {
  if (cart_email == null) {
    cart_email = localStorage.getItem("user_email");
  }
  await getOrderedProducts();
  await getProducts();
  await getSellerFarmers(cart_email);
  await getUsers();
  await getTotalCostPrice();
});

const getProductById = async (id) => {
  // for the purpose of updating amount

  try {
    const updatAmount = await axios.get(`http://localhost:5000/products/${id}`);
    amountRollback.value = updatAmount.data.amount + nOrderCart.value;
  } catch (err) {}
};

const getProductByIdforConfirm = async (id) => {
  // for the purpose of updating amount

  try {
    const updatAmount = await axios.get(`http://localhost:5000/products/${id}`);
    if (orderDifference.value < 0 || orderDifference.value >= 0) {
      amountRollback.value = updatAmount.data.amount + orderDifference.value;
    } else {
      amountRollback.value = updatAmount.data.amount;
    }
  } catch (err) {}
};

const getUsers = async () => {
  // for the purpose of updating amount

  try {
    const getUser = await axios.get(`http://localhost:5000/users`);
    getFarmers.value = getUser.data;
  } catch (err) {}
};

const updateAmount = async (id) => {
  await getProductById(id);
  try {
    axios.put(`http://localhost:5000/farmer/product/${id}`, {
      amount: amountRollback.value,
      state: 0,
    });
  } catch (err) {}
};

const updateAmountforConfirm = async (id) => {
  await getProductByIdforConfirm(id);

  console.log(amountRollback.value);

  try {
    if (amountRollback.value != null) {
      console.log("before amount updated");
      axios.put(`http://localhost:5000/farmer/product/${id}`, {
        amount: amountRollback.value,
      });
      console.log("after amount updated");
    }
  } catch (err) {}
};

const updateOrderByOrderId = async (id) => {
  try {
    axios.put(`http://localhost:5000/order/${id}`, {
      confirm: 1,
      confir: 1,
      cancel: 0,
    });
  } catch (err) {}
};

const updateOrder = async (id) => {
  console.log(orderArray.value[id]);
  try {
    if (orderArray.value[id] != undefined) {
      axios.put(`http://localhost:5000/order/confirm/${id}`, {
        nOrders: orderArray.value[id],
      });
    }
  } catch (err) {}
};

const updateOrderByOrderIdCancel = async (id) => {
  try {
    axios.put(`http://localhost:5000/order/${id}`, {
      confirm: 1,
      confir: 0,
      cancel: 1,
    });
  } catch (err) {}
};

const gotoInfoPage = async (seller_email) => {
  try {
    await getFarmerID(seller_email);
    localStorage.setItem("reporterEmail", seller_email);
    ReportsData.totalPrice = 0;
    selectedProductsToSell.value = Ordereddatas.value.filter(
      (product) =>
        product.user_email == cart_email &&
        product.cancel != 1 &&
        product.payStatus == 0 &&
        product.patent_email == seller_email
    );
    for (let x in selectedProductsToSell.value) {
      reportData.value = {
        orderId: selectedProductsToSell.value[x].order_id,
        cost: selectedProductsToSell.value[x].price,
        quantity: selectedProductsToSell.value[x].nOrders,
        product: selectedProductsToSell.value[x].title,
      };
      ReportsData.totalPrice =
        ReportsData.totalPrice +
        selectedProductsToSell.value[x].nOrders * selectedProductsToSell.value[x].price;
      reportDatas.value.push(reportData.value);
    }
    ReportsData.reportDatas = reportDatas.value;
    router.replace("/product/order");
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (id) => {
  console.log("Are You sure to delete");
  try {
    await axios.delete(`http://localhost:5000/order/${id}`);
    getProducts();
  } catch (err) {
    console.log(err);
  }
};

const getTotalCostPrice = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    totalCost.value = response.data;

    for (let x in totalCost.value) {
      if (
        totalCost.value[x].user_email == cart_email &&
        totalCost.value[x].payStatus == 0
      ) {
        totalCostInBirr.value =
          totalCostInBirr.value + totalCost.value[x].nOrders * totalCost.value[x].price;
        console.log(totalCost.value[x].nOrders);
        console.log(totalCost.value[x].price);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getProductbyproductid = async (id) => {
  try {
    const product = await axios.get(`http://localhost:5000/products/${id}`);
    productName.value = product.data.title;
    getTransactionHistoryByEmailAndProductName(productName.value, cart_email);
  } catch (err) {}
};
const getProductbyproductidConfirm = async (id) => {
  try {
    const product = await axios.get(`http://localhost:5000/products/${id}`);
    productName.value = product.data.title;
    postedProductForMarket.value = product.data.amount;
  } catch (err) {}
};
const getFarmerID = async (email) => {
  try {
    const userInfo = await axios.get(`http://localhost:5000/users/${email}`);
    sellerId.value = userInfo.data.username;
    localStorage.setItem("sellerID", sellerId.value);
    localStorage.setItem("productSeller", "farmer");
    console.log(userInfo.data);
  } catch (err) {
    console.log(err);
  }
};
const changeCart = async () => {
  localStorage.setItem("seller", "mahiberat");
  location.href = "/product/cart";
};
</script>
<style scoped>
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
