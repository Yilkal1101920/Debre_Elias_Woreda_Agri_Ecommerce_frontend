<template>
  <div class="bg-green-50 dark:bg-gray-800">
    <div class="pb-6 w-full h-full text-white font-bold justify-center items-center flex">
      <div class="inset-y-0 w-full">
<vueper-slides autoplay
  class="bg-green-50 text-gray-800 px-16 pt-1"
  :visible-slides="3"
  slide-multiple
  :gap="1"
  :slide-ratio="1 / 5"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 3, slideMultiple: 2 } }">
  <vueper-slide class=" pb-6"
    v-for="slide in filteredNews.slice().reverse()"
    :key="slide.id"
    :content="slide.description"
    :image="slide.newsImage">
  </vueper-slide>
</vueper-slides>
        <div class="flex justify-center text-blue-600 p-2 m-3">
          <h1
            v-if="languageStore.language == 'Am'"
            class="text-2xl text-center dark:text-white"
          >
            ለሽያጭ የቀረቡ የግብርና ግብአቶች
          </h1>
          <h1
            v-if="languageStore.language == 'En'"
            class="text-2xl text-center dark:text-white"
          >
            Products in the market
          </h1>
        </div>
        <div>
        <p class="text-lg font-bold text-gray-800 dark:text-white text-center" v-if="loading">
          <!-- <Circle4></Circle4> -->
          <vue-spinner
           :color="'#007aff'"
           :size="'30px'"
           :margin="'5px'"
           :radius="'100%'"
         />
        Loading...</p>
        </div>
        <div class="flex border border-gray-300 mx-8 py-5" v-if="!loading" >
          <div class="container flex">
            <div class="text-blue-500 flex flex-row flex-wrap gap-3 justify-center">
              <div class="" v-for="item in datas" :key="item.product_id">
                <div
                  v-if="
                    item.amount > 0 &&
                    !(
                      item.email != undefined &&
                      item.email != order_email 
                    ) &&
                    item.marketState == 1 &&
                    item.postedForMarket != 0
                  "
                >
                  <div class="flex flex-col">
                    <div
                      class="flex text-blue-600 dark:text-white flex-col gap-2 hover:shadow-xl hover:cursor-pointer h-74 w-60 p-4 shadow-md dark:shadow-md dark:shadow-white"
                    >
                      <div
                        class="w-full h-40 hover:bg-blue-300"
                        @click.prevent="getProductById(item.product_id)"
                      >
                        <div class="flex flex-row">
                          <p class="">{{ item.kebele }} 
                          <p v-if="languageStore.language == 'Am'">ቀበሌ</p>
                          <p v-if="languageStore.language == 'En'">Kebele</p>
                          </p>
                          <div class="pl-24">
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
                        </div>
                        <img
                          class="h-28 w-full mt-2 border rounded-lg hover:scale-110"
                          :src="item.image"
                          alt="image"
                        />
                      </div>
                      <p class="w-full flex justify-center">
                        በ {{ item.kebele }} ቀበሌ ማህበራት ለሽያጭ የቀረበ {{ item.title }}
                      </p>
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
                                setRating(item.product_id, rating[item.product_id], item.kebele)
                              "
                            >
                            </star-rating>
                          </div>
                      <div class="flex justify-center">
                        <div>{{ item.price }}</div>
                        <div class="pl-1">
                          <p v-if="languageStore.language == 'Am'">ብር/{{item.measurement}}</p>
                          <p v-if="languageStore.language == 'En'">Birr/{{item.measurement}}</p>
                        </div>
                      </div>
                      <div class="flex gap-0 justify-center">
                        <input
                          v-if="languageStore.language == 'Am'"
                          type="number"
                          name=""
                          id=""
                          class="border text-gray-800 dark:text-gray-800 rounded-sm border-green-300 w-20 hover:shadow-md hover:shadow-green-300"
                          placeholder="መጠን"
                          v-model="count2[item.product_id]"
                        />
                        <input
                          v-if="languageStore.language == 'En'"
                          type="number"
                          name=""
                          id=""
                          class="border text-gray-800 dark:text-gray-800 rounded-sm border-green-300 w-20 hover:shadow-md hover:shadow-green-300"
                          placeholder="amount"
                          v-model="count2[item.product_id]"
                        />
                        <button
                          class="addToCartButton p-1 border rounded-r-lg shadow-lg hover:bg-green-700 text-gray-800 font-bold font-mono px-2 hover:text-white"
                          @click.prevent="checkInput(item.product_id, item.post_email)"
                        >
                          <p v-if="languageStore.language == 'Am'">ወደ ካርት ጨምር</p>
                          <p v-if="languageStore.language == 'En'">Add to cart</p>
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
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

import { useRouter } from "vue-router";

import { useCounterStore } from "../state/store"; //counting sellected cart
import { useSelectStore } from "../state/selectProStore";
// sweetalert start

import Swal from "sweetalert2";
// sweetalert end here

import { useLanguageStore } from "../state/languageStore";
import StarRating from "vue-star-rating";

//loading

import VueSpinner from 'vue-spinner/src/PulseLoader.vue';

//end loading


// carousle
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
// carousle end
const loading = ref(true);


const rating = ref([]);
const productRateDatas = ref([]);
const productRateData = ref("");

const router = useRouter();

var useCounter = useCounterStore();
var useSelector = useSelectStore();

const languageStore = useLanguageStore();

const datas = ref([]);
const count2 = ref([]); //count in v-model
const idforVmodell = ref(0);

const numberOfItems = ref(0); //total amounts of items before updated
const updatedAmount = ref(0); //total amounts of items after updated
const productName = ref("");
const orderRestrictAmount = ref(0);

const transactProduct = ref("");
const transactionEmail = ref("");
const totalOrderQuantity = ref("");

const order_email = localStorage.getItem("user_email"); // the email of user who orders the product to add cart
const kebele = localStorage.getItem("kebele");

const pro_id = ref(0); ///the primary key id of the product
const check_kebele = ref("");

const updateOrderAmount = ref(0);
const order_date = ref("");
const news = ref([]);

const patent_email = ref("");
const user_email = localStorage.getItem("user_email");
const filteredNews = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
   await getProductRate();
   await getNews();
   await filterNews();
  } catch (err) {}
  finally{
  loading.value = false;
  }
});

const checkInput = async (id, seller_email) => {
  patent_email.value = seller_email;
  localStorage.setItem("seller", "mahiberat");
  if (count2.value[id] > 0) {
    await getProductByIdforVmodel(id);
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
  try {
    const idforVmodel = await axios.get(`http://localhost:5000/products/vModel/${id}`);
    idforVmodell.value = idforVmodel.data.product_id;
    check_kebele.value = idforVmodel.data.kebele;
  } catch (err) {}
  if (check_kebele.value == kebele) {
    await checkAmount(idforVmodell.value);
  } else {
    // alert("you can not order other than your kebele");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ከምትገለገልበት የገበሬ ማህበራት ውጭ ማዘዝ አትችልም!",
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
};

const checkAmount = async (id) => {
  ////CHECK USER IS LOG IN OR NOT
  if (!localStorage.getItem("user_email")) {
    // alert("login first to order product");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ለማዘዝ መጀመሪያ በመለያ ግባ!",
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
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      numberOfItems.value = response.data.postedForMarket;
      productName.value = response.data.title;
      if (
        numberOfItems.value >= count2.value[idforVmodell.value] &&
        count2.value[idforVmodell.value] >= 0
      ) {
        updatedAmount.value =
          response.data.postedForMarket - count2.value[idforVmodell.value];

        pro_id.value = response.data.product_id;

        await getOrderRestrictionQuantity(pro_id.value, kebele);

        if (count2.value[idforVmodell.value] <= orderRestrictAmount.value) {
          await getTransactionHistoryByEmailAndProductName(
            pro_id.value,
            order_email
          );
          if (transactProduct.value == undefined || transactionEmail.value == undefined) {
           await updateProductById(id);
           await addToTransaction();
          } else {
            if (
              count2.value[idforVmodell.value] <=
              orderRestrictAmount.value - totalOrderQuantity.value
            ) {
             await updateProductById(id);
             await updateTransactionByEmailAndProductName(pro_id.value, order_email);
            } else {
              if (
                count2.value[idforVmodell.value] >
                  orderRestrictAmount.value - totalOrderQuantity.value &&
                totalOrderQuantity.value < orderRestrictAmount.value
              ) {
                const remainOrder = orderRestrictAmount.value - totalOrderQuantity.value;
                // alert("You can order a maximum of " + remainOrder);
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  // title: "ስህተት",
                  html: "ከ " + remainOrder + " በላይ ማዘዝ አትችልም!",
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
                // alert("ለአንድ ሰው የተፈቀደዉን ያክል አዝዘሃል ወይም ወስደሃል ከተፈቀደው በላይ ማዘዝ አይቻልም");
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
        // alert(
        //   "You can only order from 0 upto " +
        //     numberOfItems.value +
        //     " items please re-order again"
        // );
        // Swal.fire({
        //   position: "top-end",
        //   icon: "warning",
        //   title: "ማዘዝ የምትችል ከ 0 እስክ " + numberOfItems.value + " እንደገና ያዝዙ!",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          // title: "ስህተት",
          html: "ማዘዝ የምትችል ከ 0 እስክ " + numberOfItems.value + " እንደገና ያዝዙ!",
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
    } catch (err) {}
  }
};

const addToTransaction = async () => {
  try {
    await axios.post("http://localhost:5000/transactionHistory", {
      transaction_email: order_email,
      product_id: pro_id.value,
      NoOrders: count2.value[idforVmodell.value],
      transaction_kebele: kebele
    });
  } catch (err) {}
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
  try {
    await axios.put(`http://localhost:5000/products/productsInMarket/${id}`, {
      postedForMarket: updatedAmount.value,
      state: 1,
    });

    await getOrderByUserEmailAndProductId(order_email);
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
      order_kebele: kebele,
    });
  } catch (err) {}
};

const totalOrderedCart = () => {
  //total  ordered carts calculation
  useCounter.inputValue = count2.value[idforVmodell.value];
  useCounter.totalCart();
};

const getProductById = async (id) => {
  // show products by id
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/product/${id}`);
  } catch (err) {}
};

const setRating = async (id, star, mahiberat) => {
  if(kebele == mahiberat){
  await getProductRateByEmailAndProuctId(user_email, id);
  if (productRateData.value.star == undefined) {
    await insertProductRate(id, star);
  } else {
    await updateProductRateById(productRateData.value.favorite_id, star);
  }}
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

const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;

    console.log(news.value);
    loading.value = false;
  } catch (err) {
  }
};

const filterNews = async () => {
  try {
      filteredNews.value = news.value.filter(
        (event) => event.newsSource == "Debre Elias Agricultural Office"
      );
  }catch (err) {}
};

</script>

<style scoped>
.addToCartButton{
  background-color: #17cf97;
}
@keyframes fadeInLeft {
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(0);
  }
}
/* .product{
  animation: fadeInLeft 2s ease-in;
} */
.rating {
  position: absolute;
  /* top: 50%;
    left: 50%; */
  transform: translate(0%, 0%) rotateY(180deg);
  display: flex;
}

.rating input {
  display: none;
}

.rating label {
  display: block;
  cursor: pointer;
  width: 30px;
}

.rating label:before {
  /* content: '\f005'; */
  font-family: fontAwesome;
  position: relative;
  display: block;
  font-size: 1rem;
  color: #2b10f5;
}

.rating label:after {
  /* content: '\f005'; */
  font-family: fontAwesome;
  position: absolute;
  top: 0;
  display: block;
  font-size: 1rem;
  color: #ff711f;
  opacity: 0;
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5s);
}

.rating label:hover:after,
.rating label:hover ~ label:after,
.rating input:checked ~ label:after {
  opacity: 1;
}
</style>
