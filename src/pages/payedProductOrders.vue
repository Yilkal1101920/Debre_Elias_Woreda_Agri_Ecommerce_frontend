<template>
  <div class="bg-green-50 dark:bg-gray-800 h-full w-full">
    <div class="flex flex-col m lg:mx-8">
      <div class="inset-x-20 inset-y-0">
        <div class="">
          <div class="overflow-x-auto text-justify flex justify-center mt-6">
            <table class="tableClass table-auto w-full">
              <thead class="text-gray-700 bg-slate-400">
                <tr class="">
                  <th class="py-2 pl-12">
                    <h4 v-if="languageStore.language == 'En'">Product id</h4>
                    <h4 v-if="languageStore.language == 'Am'">የምርቱ መለያ</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Category</h4>
                    <h4 v-if="languageStore.language == 'Am'">መደብ</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Product Type</h4>
                    <h4 v-if="languageStore.language == 'Am'">የምርቱ አይነት</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Name</h4>
                    <h4 v-if="languageStore.language == 'Am'">ስም</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Price</h4>
                    <h4 v-if="languageStore.language == 'Am'">ዋጋ</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Cost</h4>
                    <h4 v-if="languageStore.language == 'Am'">የመጀመሪያ ዋጋ</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Total Products</h4>
                    <h4 v-if="languageStore.language == 'Am'">የምርቱ ድምር</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Total Price</h4>
                    <h4 v-if="languageStore.language == 'Am'">ጠቅላላ ዋጋ</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Image</h4>
                    <h4 v-if="languageStore.language == 'Am'">ምስል</h4>
                  </th>
                  <th class="py-2 pl-2">
                    <h4 v-if="languageStore.language == 'En'">Confirmation</h4>
                    <h4 v-if="languageStore.language == 'Am'">ምርመራ</h4>
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr
                  v-for="item in Ordereddatas"
                  :key="item.order_id"
                  class="hover:bg-slate-200"
                >
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-12"
                  >
                    {{ item.product_id }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    {{ item.category }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    {{ item.type_product }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    {{ item.title }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    {{ item.price }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    {{ item.original_cost }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
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
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class=""
                  >
                    {{ item.price * item.nOrders }}
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    <img class="w-10 h-8" :src="item.image" />
                  </td>
                  <td
                    v-if="
                      item.user_email == cart_email &&
                      item.cancel != 1 &&
                      item.payStatus == 1
                    "
                    class="pl-2"
                  >
                    <div class="flex flex-row">
                      <!-- confirm -->
                      <button
                        v-if="item.confirm != 1"
                        class="hover:cursor-pointer mr-3"
                        @click.prevent="getOrderedProductByIdforConfirm(item.order_id)"
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
            type="submit"
            class="text-lg p-4 m-6 text-gray-700 text-center bg-green-200 font-mono rounded-lg shadow-md"
          >
            <P v-if="languageStore.language == 'En'">Total Paid = {{ totalCostInBirr }} Birr</P>
            <P v-if="languageStore.language == 'Am'">ጠቅላላ የተከፈለ = {{ totalCostInBirr }} ብር</P>
          </p>
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

const router = useRouter();
const datas = ref([]);
const Ordereddatas = ref([]);
const nOrderCart = ref(0);
const productId = ref(0);
const cart_email = localStorage.getItem("user_email");
const amountRollback = ref(0);

const orderArray = ref([]);
const getUserEmail = ref([]);
const orderDifference = ref(0);

const confirmDisplay = ref([]);

const totalCost = ref("");
var totalCostInBirr = ref(0);
const productName = ref("");
const totalOrderQuantity = ref("");
const orderRestrictAmount = ref("");

const kebele_address = localStorage.getItem("kebele");

const postedProductForMarket = ref(0);

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/order");
    datas.value = response.data;

    confirmDisplay.value[datas.value.order_id] = true;
  } catch (err) {}
};

const getOrderedProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    Ordereddatas.value = response.data;

    confirmDisplay.value[Ordereddatas.value.order_id] = true;
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
      if (totalOrderQuantity.value - orderDifference.value <= orderRestrictAmount.value) {
        await updateTransactionByEmailAndProductNameConfirm(
          productName.value,
          cart_email
        );
        await updateOrderByOrderId(id);
        await updateAmountforConfirm(productId.value);
        await updateOrder(id);
      } else {
        // alert("You Entered amount greater than Allowed");
        let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          // title: "ስህተት",
          html: "ከተፈቀደው መጠን ውጭ አዝዘዋል!",
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
        // sweetalert end
      }
    } else {
      let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          // title: "ስህተት",
          html: "Product in the market is finished",
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
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user" ||
    localStorage.getItem("user_state") != 1
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
  await getOrderedProducts();
  await getProducts();
  await getUserByEmail();
  await getTotalCostPrice();
});

const getProductById = async (id) => {
  // for the purpose of updating amount

  try {
    const updatAmount = await axios.get(`http://localhost:5000/products/${id}`);
    amountRollback.value = updatAmount.data.postedForMarket + nOrderCart.value;
  } catch (err) {}
};

const getProductByIdforConfirm = async (id) => {
  // for the purpose of updating amount

  try {
    const updatAmount = await axios.get(`http://localhost:5000/products/${id}`);
    if (orderDifference.value < 0 || orderDifference.value >= 0) {
      amountRollback.value = updatAmount.data.postedForMarket + orderDifference.value;
    } else {
      amountRollback.value = updatAmount.data.postedForMarket;
    }
  } catch (err) {}
};

const getUserByEmail = async () => {
  // for the purpose of updating amount

  try {
    const getUser = await axios.get(`http://localhost:5000/users`);
    getUserEmail.value = getUser.data;
  } catch (err) {}
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

const updateAmountforConfirm = async (id) => {
  await getProductByIdforConfirm(id);

  console.log(amountRollback.value);

  try {
    if (amountRollback.value != null) {
      console.log("before amount updated");
      axios.put(`http://localhost:5000/rollBack/productsInMarket/${id}`, {
        postedForMarket: amountRollback.value,
        state: 0,
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

const gotoInfoPage = () => {
  router.replace("/product/order");
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
        totalCost.value[x].payStatus == 1
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

const getProductbyproductidConfirm = async (id) => {
  try {
    const product = await axios.get(`http://localhost:5000/products/${id}`);
    productName.value = product.data.title;
    postedProductForMarket.value = product.data.postedForMarket;
    await getTransactionHistoryByEmailAndProductNameConfirm(
      productName.value,
      cart_email
    );
    await getOrderRestrictionQuantity(productName.value, kebele_address);
  } catch (err) {}
};

const getTransactionHistoryByEmailAndProductNameConfirm = async (name, email) => {
  const transactionHistory = await axios.get(
    `http://localhost:5000/transactionHistory/${name}/${email}`
  );
  totalOrderQuantity.value = transactionHistory.data.NoOrders;
};

const updateTransactionByEmailAndProductNameConfirm = async (name, email) => {
  try {
    await axios.put(`http://localhost:5000/transactionHistory/${name}/${email}`, {
      NoOrders: totalOrderQuantity.value - orderDifference.value,
    });
  } catch (err) {}
};

const getOrderRestrictionQuantity = async (name, kebele) => {
  const orderRestriction = await axios.get(
    `http://localhost:5000/orderRestriction/${name}/${kebele}`
  );

  orderRestrictAmount.value = orderRestriction.data.allowed_quantity;
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
