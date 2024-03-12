<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div
      v-for="item in datas"
      :key="item.product_id"
      class="w-full text-gray-700 dark:text-white flex flex-row flex-wrap justify-center"
    >
      <div
        v-if="
          item.amount > 0 &&
          item.kebele == kebele_address &&
          item.product_id == selected_product &&
          item.marketState == 1 &&
          item.postedForMarket != 0
        "
        class="px-8 gap-6"
      >
        <div class="border-b-2 flex flex-wrap md:gap-8 py-6">
          <div class="" @click.prevent="getProductById(item.product_id)">
            <div class="w-full">
              <img
                class="h-96 shadow-lg cursor-pointer lg:w-80 lg:mt-2 rounded-lg hover:scale-110"
                :src="item.image"
                alt="This was image"
              />
            </div>
          </div>
          <div class="gap-5 text-lg flex flex-col">
            <p class="w-full flex font-mono font-bold text-lg">
              {{ item.title }}
            </p>
            <div>
              <star-rating
                v-model:rating="rating[item.product_id]"
                class="flex"
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="gray"
                active-color="yellow"
                v-bind:star-size="18"
                @update:rating="setRating(item.product_id, rating[item.product_id])"
              >
              </star-rating>
            </div>
            <div class="flex">
              <div>
                <div class="flex">
                  <p>ችርቻሮ ዋጋ፡</p>
                  <del
                    ><p>{{ item.price }} ብር</p></del
                  >
                </div>
              </div>
              <div class="pl-1"></div>
            </div>
            <div class="flex">
              <div>
                <p>ዋጋ፡ {{ item.price }} ብር</p>
              </div>
            </div>
            <div class="flex">
              <div>
                <p>መደብ፡ {{ item.category }}</p>
              </div>
            </div>
            <div class="flex">
              <div>
                <p>ገለጻ፡ {{ item.description }}</p>
              </div>
            </div>
            <div class="flex">
              <div class="font-mono font-bold text-lg">
                <p>ቀበሌ፡ {{ item.kebele }}</p>
              </div>
            </div>
            <div class="flex py-3">
              <div>
                <input
                  class="py-2 border rounded-sm w-20 border-green-300 hover:shadow-md hover:shadow-green-300"
                  type="number"
                  v-model="count2[item.product_id]"
                  placeholder="መጠን"
                />
              </div>
              <div>
                <button
                  @click.prevent="checkInput(item.product_id, item.post_email)"
                  class="bg-green-400 px-8 py-2 hover:bg-green-700 hover:text-white ml-1 border rounded-lg"
                >
                  ወደ ካርት ጨምር
                </button>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <p class="text-lg font-bold text-gray dark:text-white font-mono">Share:</p>
              <span
                ><img
                  class="h-10 w-auto border border-green-300 hover:scale-110 hover:bg-blue-300 cursor-pointer p-2 rounded-full"
                  src="../assets/facebook.png"
                  alt="Facebook logo"
                  title="share with Facebook"
              /></span>
              <span
                ><img
                  class="h-10 w-auto border border-green-300 hover:scale-110 hover:bg-green-300 cursor-pointer p-2 rounded-full"
                  src="../assets/telegram.png"
                  alt="Telegram logo"
                  title="share with Telegram"
              /></span>
              <span
                ><img
                  class="h-10 w-auto border border-green-300 hover:scale-110 hover:bg-blue-300 cursor-pointer p-2 rounded-full"
                  src="../assets/linkedin.png"
                  alt="LinkedIn logo"
                  title="share with LinkedIn"
              /></span>
              <span
                ><img
                  class="h-10 w-auto border border-green-300 hover:scale-110 hover:bg-red-300 cursor-pointer p-2 rounded-full"
                  src="../assets/email.png"
                  alt="Email logo"
                  title="share with Email"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="font-mono font-bold text-lg text-gray-700 dark:text-white py-4 text-center">
      ተዛማጅ
    </p>
    <!-- related related-->
    <div class="justify-center gap-6 pb-11 flex w-full">
      <div v-for="item in datas" :key="item.product_id">
        <div
          v-if="
            item.amount > 0 &&
            item.kebele == kebele_address &&
            item.marketState == 1 &&
            item.postedForMarket != 0 &&
            item.category == categoryDetail &&
            item.marketState == 1 &&
            item.postedForMarket != 0
          "
        >
          <div class="flex flex-col text-gray-700 dark:text-white">
            <div
              class="flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer h-74 w-60 p-4 shadow-md"
            >
              <div
                class="hover:bg-blue-300"
                @click.prevent="getProductById(item.product_id)"
              >
                <div class="w-full h-32 hover:bg-blue-300">
                  <div class="flex justify-end">
                    <svg
                      class="w-5 h-5 fill-current text-yellow-600"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FavoriteBorderIcon"
                    >
                      <path
                        d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                      ></path>
                    </svg>
                  </div>
                  <img
                    class="h-28 w-full mt-2 border rounded-lg hover:scale-110"
                    :src="item.image"
                    alt="This was image"
                  />
                </div>
              </div>
              <p class="w-full flex justify-center">{{ item.title }}</p>
              <div>
                <star-rating
                  v-model:rating="rating[item.product_id]"
                  class="flex justify-center"
                  v-bind:increment="0.5"
                  v-bind:max-rating="5"
                  inactive-color="gray"
                  active-color="yellow"
                  v-bind:star-size="18"
                  @update:rating="setRating(item.product_id, rating[item.product_id])"
                >
                </star-rating>
              </div>
              <div class="flex justify-center">
                <div>{{ item.price }}</div>
                <div class="pl-1">ብር</div>
              </div>
              <div class="flex flex-row">
                <div>
                  <input
                    class="border rounded-sm w-20 border-green-300 hover:shadow-md hover:shadow-green-300"
                    type="number"
                    v-model="count2[item.product_id]"
                    placeholder="መጠን"
                  />
                </div>
                <div>
                  <button
                    @click.prevent="getProductByIdforVmodel(item.product_id)"
                    class="bg-green-400 hover:bg-green-700 hover:text-white ml-1 border rounded-lg"
                  >
                    ወደ ካርት ጨምር
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useCounterStore } from "../state/store"; //counting sellected cart
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

import StarRating from "vue-star-rating";
const rating = ref([]);
const productRateDatas = ref([]);
const productRateData = ref("");

const router = useRouter();

const count2 = ref([]); //count in v-model

var useCounter = useCounterStore();
const datas = ref([]);
const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const idforVmodell = ref(0);
const productName = ref("");

const transactProduct = ref("");
const transactionEmail = ref("");
const totalOrderQuantity = ref("");

const kebele_address = localStorage.getItem("kebele");
const order_email = localStorage.getItem("user_email"); // the email of user who orders the product to add cart

const pro_id = ref(0); ///the primary key id of the product
const orderRestrictAmount = ref(0);

const selected_product = localStorage.getItem("product_id");
const productDetail = ref([]);
const categoryDetail = ref("");

const updateOrderAmount = ref(0);
const order_date = ref("");
const patent_email = ref("");
const user_email = localStorage.getItem("user_email");

const checkInput = async (id, seller_email) => {
  patent_email.value = seller_email;
  if (count2.value[id] > 0) {
    getProductByIdforVmodel(id);
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

const getProductByIdforVmodel = async (id) => {
  // get product by id for product_id
  try {
    const idforVmodel = await axios.get(`http://localhost:5000/products/vModel/${id}`);
    idforVmodell.value = idforVmodel.data.product_id;
  } catch (err) {}
  checkAmount(idforVmodell.value);
};

const totalOrderedCart = () => {
  //total  ordered carts calculation
  useCounter.inputValue = count2.value[idforVmodell.value];
  useCounter.totalCart();
};

const getProducts = async () => {
  //show all products
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
  } catch (err) {}
};
//show all related products
const getProductByIdForDetail = async (id) => {
  try {
    const productDetails = await axios.get(`http://localhost:5000/products/${id}`);
    productDetail.value = productDetails.data;
    categoryDetail.value = productDetails.data.category;
  } catch (err) {}
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
  await getProducts();
  await getProductByIdForDetail(selected_product);
  await getProductRate();
});

const getProductById = async (id) => {
  // show products by id
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    router.push(`/product/selectedProduct`);
  } catch (err) {}
};

const checkAmount = async (id) => {
  ////CHECK USER IS LOG IN OR NOT

  if (!localStorage.getItem("user_email")) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "login first to order product!",
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
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`); /////CALCULATE UN ORDERED AMOUNT
      numberOfItems.value = response.data.postedForMarket;
      productName.value = response.data.title;

      console.log(response.data.postedForMarket);
      console.log(numberOfItems.value);

      if (
        numberOfItems.value >= count2.value[idforVmodell.value] &&
        count2.value[idforVmodell.value] >= 0
      ) {
        updatedAmount.value =
          response.data.postedForMarket - count2.value[idforVmodell.value];

        pro_id.value = response.data.product_id;
        await getOrderRestrictionQuantity(pro_id.value, kebele_address);

        if (count2.value[idforVmodell.value] <= orderRestrictAmount.value) {
          await getTransactionHistoryByEmailAndProductName(pro_id.value, order_email);
          if (transactProduct.value == undefined || transactionEmail.value == undefined) {
            updateProductById(id);
            addToTransaction();
          } else {
            if (
              count2.value[idforVmodell.value] <=
              orderRestrictAmount.value - totalOrderQuantity.value
            ) {
              updateProductById(id);
              updateTransactionByEmailAndProductName(pro_id.value, order_email);
            } else {
              if (
                count2.value[idforVmodell.value] >
                  orderRestrictAmount.value - totalOrderQuantity.value &&
                totalOrderQuantity.value < orderRestrictAmount.value
              ) {
                const remainOrder = orderRestrictAmount.value - totalOrderQuantity.value;
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  // title: "ስህተት",
                  html: "You can order a maximum of " + remainOrder,
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
              } else {
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  // title: "ስህተት",
                  html: "ለአንድ ሰው የተፈቀደዉን ያክል አዝዘሃል ወይም ወስደሃል ከተፈቀደው በላይ ማዘዝ አይቻልም!",
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
            }
          }
        } else {
          if (orderRestrictAmount.value == undefined) {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "ይቅርታ ለማዘህ ገደብ ስላልተሰጠው ገደብ እስቂሰጠው ትንሽ ይጠብቁ",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "You can not order more than " + orderRestrictAmount.value,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title:
            "You can only order from 0 upto " +
            numberOfItems.value +
            " items please re-order again",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {}
  }
};

const getOrderRestrictionQuantity = async (name, kebele) => {
  const orderRestriction = await axios.get(
    `http://localhost:5000/orderRestriction/${name}/${kebele}`
  );

  orderRestrictAmount.value = orderRestriction.data.allowed_quantity;
};

const getTransactionHistoryByEmailAndProductName = async (name, email) => {
  const transactionHistory = await axios.get(
    `http://localhost:5000/transactionHistory/${name}/${email}`
  );

  transactProduct.value = transactionHistory.data.product_id;
  transactionEmail.value = transactionHistory.data.transaction_email;
  totalOrderQuantity.value = transactionHistory.data.NoOrders;
};

const updateProductById = async (id) => {
  // nOrder = ;
  try {
    await axios.put(`http://localhost:5000/products/productsInMarket/${id}`, {
      ///update  amount and norders in agri_product table
      postedForMarket: updatedAmount.value,
      state: 1,
      nOrders: count2.value[idforVmodell.value],
    });

    await getOrderByUserEmailAndProductId(order_email); //add orders into orderstable
    await getProducts();
    window.location.reload();
  } catch (err) {}
  totalOrderedCart();
};

const updateTransactionByEmailAndProductName = async (name, email) => {
  try {
    await axios.put(`http://localhost:5000/transactionHistory/${name}/${email}`, {
      NoOrders: count2.value[idforVmodell.value] + totalOrderQuantity.value,
    });
  } catch (err) {}
};

const getOrderByUserEmailAndProductId = async (email) => {
  try {
    const getOrder = await axios.get(
      `http://localhost:5000/order/email/${email}/${pro_id.value}`
    );
    if (
      getOrder.data.product_id == pro_id.value &&
      getOrder.data.user_email == email &&
      getOrder.data.payStatus == 0
    ) {
      updateOrderAmount.value = getOrder.data.nOrders + count2.value[idforVmodell.value];
      await updateOrder(email, pro_id.value);
    } else if (
      getOrder.data.product_id == pro_id.value &&
      getOrder.data.user_email == email &&
      getOrder.data.payStatus == 1
    ) {
      await getOrderByUserEmailAndProductIdAndPaymentStatus(email);
    } else {
      await addOrder();
    }
  } catch (err) {}
};

const getOrderByUserEmailAndProductIdAndPaymentStatus = async (email) => {
  try {
    const getOrderData = await axios.get(
      `http://localhost:5000/order/email/payment/${email}/${pro_id.value}/${0}`
    );
    if (
      getOrderData.data.product_id == pro_id.value &&
      getOrderData.data.user_email == email &&
      getOrderData.data.payStatus == 0
    ) {
      updateOrderAmount.value =
        getOrderData.data.nOrders + count2.value[idforVmodell.value];
      await updateOrder(email, pro_id.value);
    } else {
      await addOrder();
    }
  } catch (err) {}
};

const updateOrder = async (email, id) => {
  order_date.value = new Date();
  try {
    await axios.put(`http://localhost:5000/order/emailAndId/${email}/${id}`, {
      nOrders: updateOrderAmount.value,
      edited_date: order_date.value,
    });
  } catch (err) {}
};

const addOrder = async () => {
  try {
    await axios.post("http://localhost:5000/order", {
      patent_email: patent_email.value,
      user_email: order_email,
      nOrders: count2.value[idforVmodell.value],
      totalCart: useCounter.totalCount,
      product_id: pro_id.value,
      ordered_date: order_date.value,
      edited_date: order_date.value,
      order_kebele: kebele_address,
    });
  } catch (err) {}
};

const addToTransaction = async () => {
  try {
    await axios.post("http://localhost:5000/transactionHistory", {
      transaction_email: order_email,
      product_id: pro_id.value,
      NoOrders: count2.value[idforVmodell.value],
      transaction_kebele: kebele_address,
    });
  } catch (err) {}
};

const setRating = async (id, star) => {
  await getProductRateByEmailAndProuctId(user_email, id);
  if (productRateData.value.star == undefined) {
    await insertProductRate(id, star);
  } else {
    await updateProductRateById(productRateData.value.favorite_id, star);
  }
};
const getProductRate = async () => {
  try {
    const responseRate = await axios.get(
      "http://localhost:5000/products/ratingAndFavorite"
    );
    productRateDatas.value = responseRate.data;
    for (let x in productRateDatas.value) {
      if (productRateDatas.value[x].user_email == user_email) {
        rating.value[productRateDatas.value[x].product_id] =
          productRateDatas.value[x].star;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getProductRateByEmailAndProuctId = async (email, id) => {
  try {
    const productRate = await axios.get(
      `http://localhost:5000/products/ratingAndFavorite/${email}/${id}`
    );
    productRateData.value = productRate.data;
  } catch (err) {
    console.log(err);
  }
};

const insertProductRate = async (id, star) => {
  try {
    await axios.post("http://localhost:5000/products/ratingAndFavorite", {
      user_email: user_email,
      product_id: id,
      star: star,
      favorite: 0,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateProductRateById = async (id, star) => {
  try {
    await axios.put(`http://localhost:5000/products/ratingAndFavorite/${id}`, {
      star: star,
    });
  } catch (err) {}
};
</script>

<style scoped></style>
