<template>
  <div class="w-full h-full">
    <div class="bg-green-50 dark:bg-gray-800 pb-6 pt-8 w-full">
      <div class="h-full mx-8">
        <div class="gap-7 flex flex-col lg:flex lg:flex-row">
          <div class="text-black dark:text-white w-60 p-10 lg:p-0">
            <div class=" ">
              <h1 v-if="languageStore.language == 'En'"><b>Filter by Price</b></h1>
              <h1 v-if="languageStore.language == 'Am'"><b>በዋጋ ምረጥ</b></h1>
              <div class="">
                <div class="flex flex-row">
                  <input
                    type="text"
                    v-model="filterByPrice"
                    class="py-2 rounded-l-lg border border-green-300 text-gray-800 dark:text-gray-800"
                  />
                  <button
                    @click.prevent="getProductByPrice"
                    class="bg-green-400 hover:text-white hover:bg-green-700 px-3 rounded-r-lg"
                  >
                    <h4 v-if="languageStore.language == 'En'">Filter</h4>
                    <h4 v-if="languageStore.language == 'Am'">ምረጥ</h4>
                  </button>
                </div>
              </div>
            </div>
            <div class="">
              <h1 class="text-2xl py-3" v-if="languageStore.language == 'Am'">
                የመደብ ዝርዝር
              </h1>
              <h1 class="text-2xl py-3" v-if="languageStore.language == 'En'">
                Category List
              </h1>
              <ul class="">
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="pMore = !pMore">
                    <h1
                      v-if="languageStore.language == 'Am'"
                      class="text-gray-800 dark:text-white"
                    >
                      የግብርና ዉጤቶች
                    </h1>
                    <h1
                      v-if="languageStore.language == 'En'"
                      class="text-gray-800 dark:text-white"
                    >
                      Agricultural Products
                    </h1>
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

                  <ul v-if="pMore" class="p-3">
                    <li
                      @click.prevent="getProductByName('Teff')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">ጤፍ</p>
                      <p v-if="languageStore.language == 'En'">Teff</p>
                    </li>
                    <li
                      @click.prevent="getProductByName('Wheate')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">ስንዴ</p>
                      <p v-if="languageStore.language == 'En'">Wheate</p>
                    </li>
                    <li
                      @click.prevent="getProductByName('Maize')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">በቆሎ</p>
                      <p v-if="languageStore.language == 'En'">Maize</p>
                    </li>
                    <li
                      @click.prevent="getProductByName('Nuggets')"
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                    >
                      <p v-if="languageStore.language == 'Am'">ኑግ</p>
                      <p v-if="languageStore.language == 'En'">Nug</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="mMore = !mMore">
                    <h1 v-if="languageStore.language == 'Am'">የግብርና መሳሪያዎች</h1>
                    <h1 v-if="languageStore.language == 'En'">Agricultural Materials</h1>
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
                  <ul v-if="mMore" class="p-3">
                    <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ማጭድ</li>
                    <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ማረሻ</li>
                    <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">ወገል</li>
                    <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">አዷማ</li>
                    <li class="pt-2 pl-2 cursor-pointer hover:text-blue-500">አካፋ</li>
                  </ul>
                </li>
                <li>
                  <button class="flex flex-row" @click.prevent="sMore = !sMore">
                    <h1 v-if="languageStore.language == 'Am'">ምርጥ ዘር</h1>
                    <h1 v-if="languageStore.language == 'En'">Selected Seed</h1>
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
                  <ul v-if="sMore" class="p-3">
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Wheate Seed')"
                    >
                      <p v-if="languageStore.language == 'Am'">ስንዴ</p>
                      <p v-if="languageStore.language == 'En'">Wheate</p>
                    </li>
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Maize Seed')"
                    >
                      <p v-if="languageStore.language == 'Am'">በቆሎ</p>
                      <p v-if="languageStore.language == 'En'">Maize</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="fMore = !fMore">
                    <h1 v-if="languageStore.language == 'Am'">ማዳበሪያ</h1>
                    <h1 v-if="languageStore.language == 'En'">Fertlizer</h1>
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
                  <ul v-if="fMore" class="p-3">
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('UREA')"
                    >
                      <p v-if="languageStore.language == 'Am'">ዩሪያ</p>
                      <p v-if="languageStore.language == 'En'">URIA</p>
                    </li>
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('DAP')"
                    >
                      <p v-if="languageStore.language == 'Am'">ዳፕ</p>
                      <p v-if="languageStore.language == 'En'">DAP</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="osMore = !osMore">
                    <h1 v-if="languageStore.language == 'Am'">ዘይትና ስኳር</h1>
                    <h1 v-if="languageStore.language == 'En'">Sugar And Oil</h1>
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
                  <ul v-if="osMore" class="p-3">
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Oil')"
                    >
                      <p v-if="languageStore.language == 'Am'">ዘይት</p>
                      <p v-if="languageStore.language == 'En'">Oil</p>
                    </li>
                    <li
                      class="pt-2 pl-2 cursor-pointer hover:text-blue-500"
                      @click.prevent="getProductByName('Sugar')"
                    >
                      <p v-if="languageStore.language == 'Am'">ስኳር</p>
                      <p v-if="languageStore.language == 'En'">Sugar</p>
                    </li>
                  </ul>
                </li>
                <li class="py-1">
                  <button class="flex flex-row" @click.prevent="">
                    <h1 v-if="languageStore.language == 'Am'">ሌሎች</h1>
                    <h1 v-if="languageStore.language == 'En'">Others</h1>
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
                </li>
                <li
                  class="py-1 border border-blue-100 shadow-lg p-2 rounded-lg hover:bg-green-400 bg-slate-100"
                >
                  <button class="flex flex-row" @click.prevent="getFarmersProduct">
                    <h1 v-if="languageStore.language == 'Am'">ከገበሬዎች ይግዙ</h1>
                    <h1 v-if="languageStore.language == 'En'">Buy From Farmers</h1>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex w-full">
            <div class="lg:p-2 w-full">
              <div>
                <p
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
                </p>
              </div>
              <div class="container">
                <div class="text-blue-500 flex flex-row flex-wrap gap-3 px-8">
                  <div v-for="item in filteredProductsData" :key="item.product_id">
                    <div
                      v-if="
                        item.amount > 0 &&
                        item.kebele == kebele_address &&
                        item.marketState == 1 &&
                        item.postedForMarket != 0
                      "
                    >
                      <div class="flex flex-col">
                        <div
                          class="dark:text-white dark:shadow-md dark:shadow-white flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer h-74 w-60 p-4 shadow-md"
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
                              @update:rating="
                                setRating(item.product_id, rating[item.product_id])
                              "
                            >
                            </star-rating>
                          </div>
                          <div class="flex justify-center">
                            <div class="flex flex-row">
                              {{ item.price }}
                              <h4 class="pl-1" v-if="languageStore.language == 'En'">
                                Birr
                              </h4>
                              <h4 class="pl-1" v-if="languageStore.language == 'Am'">
                                ብር
                              </h4>
                              <h4 v-if="languageStore.language == 'En'" class="pl-1">
                                /
                              </h4>
                              <h4 v-if="languageStore.language == 'Am'" class="pl-1">
                                /
                              </h4>
                            </div>
                            <div class="pl-1">{{ item.measurement }}</div>
                          </div>
                          <div class="flex flex-row">
                            <div>
                              <input
                                v-if="languageStore.language == 'Am'"
                                class="border text-gray-800 dark:text-green-800 rounded-sm w-20 border-green-300 hover:shadow-md hover:shadow-green-300"
                                type="number"
                                v-model="count2[item.product_id]"
                                placeholder="መጠን"
                              />
                              <input
                                v-if="languageStore.language == 'En'"
                                class="border text-gray-800 dark:text-green-800 rounded-sm w-20 border-green-300 hover:shadow-md hover:shadow-green-300"
                                type="number"
                                v-model="count2[item.product_id]"
                                placeholder="amount"
                              />
                            </div>
                            <div>
                              <button
                                @click.prevent="
                                  checkInput(item.product_id, item.post_email)
                                "
                                class="bg-green-400 hover:bg-green-700 hover:text-white ml-1 border rounded-lg"
                              >
                                <p v-if="languageStore.language == 'Am'">ወደ ቅርጫት ጨምር</p>
                                <p v-if="languageStore.language == 'En'">add to cart</p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

import { useSelectStore } from "../state/selectProStore";
import { useRouter } from "vue-router";

import { useFilterStore } from "../state/filterStore"; //for filtering purpose
import Swal from "sweetalert2";

import { useLanguageStore } from "../state/languageStore";
import StarRating from "vue-star-rating";

//loading

import VueSpinner from "vue-spinner/src/PulseLoader.vue";
//end loading

const loading = ref(true);

const rating = ref([]);
const productRateDatas = ref([]);
const productRateData = ref("");
const languageStore = useLanguageStore();

var usefilter = useFilterStore();

const router = useRouter();

const count2 = ref([]); //count in v-model
// var nOrder = ref(0);

var filterByPrice = ref(0); // use this variable for filtering purpose

var useCounter = useCounterStore();
var useSelector = useSelectStore();
const pMore = ref(false);
const mMore = ref(false);
const osMore = ref(false);
const fMore = ref(false);
const sMore = ref(false);
const datas = ref([]);
var filteredProductsData = ref([]);
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
const updateOrderAmount = ref(0);
const user_email = localStorage.getItem("user_email");
const order_date = ref("");

const patent_email = ref("");
const checkInput = async (id, email) => {
  patent_email.value = email;
  localStorage.setItem("seller", "mahiberat");
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
    filteredProductsData.value = datas.value;
  } catch (err) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
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
  getProducts();
  getProductRate();
});

const getProductByPrice = () => {
  try {
    filteredProductsData.value = datas.value.filter(
      (product) => product.price == filterByPrice.value
    );
  } catch (err) {
    console.log(err);
  }
};

const getProductByName = (name) => {
  try {
    filteredProductsData.value = datas.value.filter((product) => product.title == name);
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (id) => {
  // show products by id
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/product/selectedProduct`);
  } catch (err) {}
};

const checkAmount = async (id) => {
  ////CHECK USER IS LOG IN OR NOT

  if (!localStorage.getItem("user_email")) {
    alert("login first to order product");
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
                alert("You can order a maximum of " + remainOrder);
              } else {
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  // title: "ስህተት",
                  html: "ለአንድ ሰው የተፈቀደዉን ያክል አዝዘሃል ወይም ወስደሃል ከተፈቀደው በላይ ማዘዝ አይቻልም",
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
    await getOrderByUserEmailAndProductId(order_email);
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
  order_date.value = new Date();
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
const getFarmersProduct = async () => {
  localStorage.setItem("seller", "farmer");
  router.replace("/farmersProduct");
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
