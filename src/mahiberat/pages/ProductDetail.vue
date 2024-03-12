<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div
      v-for="item in filteredProductData"
      :key="item.product_id"
      class="w-full text-gray-700 dark:text-white flex flex-row flex-wrap"
    >
      <div
        v-if="
          item.amount > 0 &&
          item.kebele == kebele_address &&
          item.product_id == selected_product
        "
        class="flex justify-center w-full px-8 gap-6 h-74"
      >
        <div
          class="border-b-4 justify-center grid sm:grid-cols-1 md:grid-cols-2 md:gap-8 py-6"
        >
          <div class="" @click.prevent="getProductById(item.product_id)">
            <div class="w-full h-48">
              <img
                class="h-40 shadow-lg cursor-pointer lg:w-80 lg:mt-2 rounded-lg hover:scale-110"
                :src="item.image"
                alt="This was image"
              />
            </div>
          </div>
          <div class="gap-11">
            <p class="w-full font-mono font-bold text-lg">
              {{ item.description }}
            </p>
            <div class="flex">
              <div>
                <div class="flex">
                  <p>Product ID፡</p>
                  <p>{{ item.product_id }}</p>
                </div>
              </div>
              <div class="pl-1"></div>
            </div>
            <div class="flex">
              <div>
                <p>የተገዛበት ዋጋ፡ {{ item.original_cost }} ብር</p>
              </div>
            </div>
            <div class="flex">
              <div>
                <p>መሸጫ ዋጋ፡ {{ item.price }} ብር</p>
              </div>
            </div>
            <div class="flex">
              <div>
                <p>ብዛት፡ {{ item.postedForMarket }} ኩንታል</p>
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
          </div>
        </div>
      </div>
    </div>
    <p class="font-mono font-bold text-lg text-gray-700 dark:text-white py-4 text-center">
      ተዛማጅ
    </p>
    <div>
      <!-- related related-->
      <div class="justify-center flex">
        <div v-for="item in datas" :key="item.product_id">
          <div
            v-if="
              item.postedForMarket > 0 &&
              item.kebele == kebele_address &&
              item.title == categoryDetail &&
              item.seller == 'mahiberat' &&
              item.marketState == 1
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
                    <img
                      class="h-28 w-full mt-2 border rounded-lg hover:scale-110"
                      :src="item.image"
                      alt="This was image"
                    />
                  </div>
                </div>
                <p class="w-full flex justify-center">{{ item.title }}</p>
                <div class="flex justify-center">
                  <div>{{ item.price }}</div>
                  <div class="pl-1">ብር</div>
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
import Swal from "sweetalert2";

const router = useRouter();

const datas = ref([]);

const kebele_address = localStorage.getItem("kebele");

var selected_product = localStorage.getItem("product_id");
const productDetail = ref([]);
const categoryDetail = ref("");
const filteredProductData = ref("");

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
    categoryDetail.value = productDetails.data.title;
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
  } else {
    await getProducts();
    await getProductByIdForDetail(selected_product);
    await getProductSelectedProduct();
  }
});

const getProductById = async (id) => {
  // show products by id
  try {
    selected_product = id;
    console.log(selected_product);
    await getProductSelectedProduct();
  } catch (err) {}
};

const getProductSelectedProduct = async () => {
  try {
    filteredProductData.value = datas.value.filter(
      (product) => product.product_id == selected_product
    );
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped></style>
