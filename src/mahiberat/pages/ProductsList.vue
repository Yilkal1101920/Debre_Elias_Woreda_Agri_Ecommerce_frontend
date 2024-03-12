<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="w-full">
      <div class="flex items-center mt-6 mb-2 gap-5 w-full">
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
          <p class="text-gray-700 dark:text-white pr-5">Back to dashboard</p>
        </div>
        <div><p class="text-2xl font-mono font-bold">Total product list</p></div>
        <div class="w-[30%] flex gap-0">
          <form action="" class="flex gap-0">
            <input
              type="search"
              v-model="searchValue"
              name="search"
              id="searchProduct"
              placeholder=" Search Product..."
              class="p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
            />
          </form>
          <button
            @click="searchProduct(searchValue)"
            class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
          >
            Search
          </button>
        </div>
        <button
          class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
          @click="productAdd"
        >
          Add Product
        </button>
      </div>
      <div class="overflow-x-auto text-justify flex justify-center mt-1 mx-6 mb-6">
        <div v-if="isData == false">
          <div colspan="11" class="col-span-full">
            <div class="text-gray-800 dark:text-white block py-11 px-11">
              <P
                class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                >No Product in market.</P
              >
              <p
                class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
              >
                No thing to show. once Kebele mahiberat Admin requests products from store
                and the store approve the product, the products will be displayed.
              </p>
            </div>
          </div>
        </div>
        <table
          v-if="isData == true"
          class="table-auto text-gray-700 dark:text-white w-full"
        >
          <thead class="bg-slate-400 dark:bg-white">
            <tr>
              <th class="py-2 pl-2">ProductId</th>
              <th class="py-2 pl-2">Title</th>
              <th class="py-2 pl-2">Price(Birr)</th>
              <th class="py-2 pl-2">OrginalCost(Birr)</th>
              <th class="py-2 pl-2">Amout(Kuntal)</th>
              <th class="py-2 pl-2">Image</th>
              <th class="py-2 pl-2">Description</th>
              <th class="py-2 pl-2">Actions</th>
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
          <tbody>
            <tr
              v-for="item in filteredProductsData"
              :key="item.product_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.product_id }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.original_cost }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.postedForMarket }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="pl-2"
              >
                {{ item.description }}
              </td>
              <td
                v-if="
                  item.kebele == kebele &&
                  item.marketState == 1 &&
                  item.postedForMarket != 0
                "
                class="border-none hs-text-centered"
              >
                <div class="flex flex-row">
                  <a
                    class="button is-danger is-small bg-red-300 border rounded"
                    @click="deleteProductInTheMarket(item.product_id)"
                  >
                    <svg
                      class="cursor-pointer fill-current h-6 w-auto text-red-500 hover:text-red-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DeleteForeverOutlinedIcon"
                      tabindex="-1"
                      title="DeleteForeverOutlined"
                    >
                      <path
                        d="M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                      ></path></svg
                  ></a>
                  <a
                    class="button is-danger is-small bg-green-300 ml-2 border rounded"
                    @click.prevent="getProductById(item.product_id)"
                  >
                    <svg
                      class="cursor-pointer fill-current h-6 w-auto text-green-500 hover:text-green-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DisplaySettingsOutlinedIcon"
                      tabindex="-1"
                      title="DisplaySettingsOutlined"
                    >
                      <path
                        d="M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z"
                      ></path>
                      <path
                        d="M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"
                      ></path></svg
                  ></a>
                </div>
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
import { useSelectStore } from "../state/selectProStore";
import Swal from "sweetalert2";

//loading

import VueSpinner from "vue-spinner/src/PulseLoader.vue";

//end loading

const datas = ref([]);
var useSelector = useSelectStore();
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const searchValue = ref("");
const loading = ref(true);

const filteredProductsData = ref("");

var isData = ref("");

const productAdd = () => {
  router.replace("/mahiberat/addProduct");
};

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    filteredProductsData.value = datas.value;
    console.log(datas.value);
    loading.value = false;
  } catch (err) {
    console.log(err);
  }
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
    await filteredData();
  }
});

const deleteProductInTheMarket = async (id) => {
  Swal.fire({
    icon: "question",
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteProductFromMarket(id);
      Swal.fire({ icon: "success", title: "Deleted Successfully!" });
    }
  });
};

const deleteProductFromMarket = async (id) => {
  try {
    await axios.put(`http://localhost:5000/product/market/${id}`, {
      postedForMarket: 0,
      marketState: 0,
    });
    await getProducts();
  } catch (err) {
    console.log(err);
  }
};
const getProductById = async (id) => {
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/mahiberat/product/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const searchProduct = async (searchResult) => {
  try {
    filteredProductsData.value = filteredProductsData.value.filter(
      (product) =>
        product.title == searchResult ||
        product.product_id == searchResult ||
        product.category == searchResult ||
        product.description == searchResult
    );
  } catch (err) {
    console.log(err);
  }
};
const filteredData = async () => {
  // Create an empty object to store unique names
  const uniqueNames = {};
  const sums = {};

  const filteredProducts = datas.value.filter(
    (item) => item.seller == "mahiberat" && item.kebele == kebele && item.marketState == 1
  );
  // Loop through the array and add each unique name to the object
  filteredProducts.forEach((obj) => {
    if (sums[obj.title]) {
      sums[obj.title] += obj.postedForMarket;
    } else {
      sums[obj.title] = obj.postedForMarket;
    }
    uniqueNames[obj.title] = true;
  });
  // Create a new array of objects with unique names
  const filteredArray = Object.keys(uniqueNames).map((title) => {
    const obj = filteredProducts.find((item) => item.title === title);
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
      postedForMarket: sums[title],
      image: obj.image,
      address: obj.address,
      description: obj.description,
      marketState: obj.marketState,
    };
  });

  // Convert the filtered array back to JSON
  filteredProductsData.value = filteredArray;
  for (let x in filteredProductsData.value) {
    if (
      filteredProductsData.value[x].kebele == kebele &&
      filteredProductsData.value[x].postedForMarket != 0
    ) {
      isData.value = true;
    }
  }
};
</script>

<style>
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
