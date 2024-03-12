<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <div class="w-full">
      <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-full">
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/mahiberat/storeDashboard">
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
          <p class="text-gray-700 dark:text-white">Back to Dashboard</p>
        </div>
        <div>
          <p class="text-2xl font-bold font-mono">Store Product list</p>
        </div>
        <div class="w-[30%]">
          <form action="">
            <div class="flex gap-0">
              <input
                type="search"
                v-model="productName"
                name="search"
                id="searchProduct"
                placeholder=" Search Product..."
                class="w-[80%] p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
              />
              <input
                type="submit"
                value="Search"
                @click="searchProductByName"
                class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
              />
            </div>
          </form>
        </div>
        <button
          class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
          @click="productAdd"
        >
          Add Product
        </button>
      </div>
      <div class="overflow-x-auto text-justify flex justify-center mt-1 mx-6 mb-28">
        <div v-if="isData == false">
          <div colspan="11" class="col-span-full">
            <div class="text-gray-800 dark:text-white block py-11 px-11">
              <P
                class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                >No Products in store.</P
              >
              <p
                class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
              >
                No thing to show. once upload products from store, the products will be
                displayed.
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
              <th class="py-2 pl-2">Category</th>
              <th class="py-2 pl-2">Title</th>
              <th class="py-2 pl-2">Amout(Kuntal)</th>
              <th class="py-2 pl-2">Image</th>
              <th class="py-2 pl-2">Description</th>
              <th class="py-2 pl-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in filteredJsonData"
              :key="item.product_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.category }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.amount }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="pl-2"
              >
                {{ item.description }}
              </td>
              <td
                v-if="item.kebele == kebele && item.post_email == store_email"
                class="border-none hs-text-centered"
              >
                <div class="flex flex-row">
                  <a
                    class="button is-danger is-small bg-red-300 border rounded"
                    @click="deleteProduct(item.product_id)"
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
                    class="button is-danger is-small bg-blue-300 ml-2 border rounded"
                    @click="editProductById(item.product_id)"
                  >
                    <svg
                      class="cursor-pointer fill-current h-6 w-auto text-blue-500 hover:text-blue-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EditOutlinedIcon"
                      tabindex="-1"
                      title="EditOutlined"
                    >
                      <path
                        d="m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
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
import { onMounted, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useSelectStore } from "../state/selectProStore";
import Swal from "sweetalert2";

const datas = ref([]);
var useSelector = useSelectStore();
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const productName = ref("");
const store_email = localStorage.getItem("store_email");
const filteredJsonData = ref([]);
var isData = ref(false);

const productAdd = () => {
  router.replace("/mahiberat/addProductToStore");
};

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    console.log(datas.value);
  } catch (err) {
    console.log(err);
  }
};
onMounted(async () => {
  if (
    localStorage.getItem("store_email") == undefined ||
    localStorage.getItem("store_email") == null ||
    localStorage.getItem("role") != "store"
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

const deleteProduct = async (id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteProductInTheStore(id);
      Swal.fire("Deleted Successfully!");
    }
  });
};
const deleteProductInTheStore = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  } catch (err) {
    console.log(err);
  }
};
const getProductById = async (id) => {
  try {
    await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.itemId = id;
    localStorage.setItem("product_id", useSelector.itemId);
    router.push(`/mahiberat/storeProduct/${id}`);
  } catch (err) {
    console.log(err);
  }
};
const editProductById = async (id) => {
  try {
    const getProduct = await axios.get(`http://localhost:5000/products/${id}`);
    useSelector.product_id = id;
    useSelector.category = getProduct.data.category;
    useSelector.product_type = getProduct.data.type_product;
    useSelector.title = getProduct.data.title;
    useSelector.price = getProduct.data.price;
    useSelector.orginal_cost = getProduct.data.original_cost;
    useSelector.amount = getProduct.data.amount;
    useSelector.address = getProduct.data.address;
    useSelector.description = getProduct.data.description;
    router.push(`/mahiberat/product/edit/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const searchProductByName = async () => {
  localStorage.setItem("product_name", productName.value);
  router.push("/mahiberat/storeProductsListByName");
};

const filteredData = async () => {
  // Create an empty object to store unique names
  const uniqueNames = {};
  const sums = {};

  const filteredProducts = datas.value.filter((item) => item.post_email == store_email);

  // Loop through the array and add each unique name to the object
  filteredProducts.forEach((obj) => {
    if (obj.post_email === store_email && obj.kebele === kebele) {
      if (sums[obj.title]) {
        sums[obj.title] += obj.amount;
      } else {
        sums[obj.title] = obj.amount;
      }
      uniqueNames[obj.title] = true;
    }
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
      postedForMarket: obj.postedForMarket,
      image: obj.image,
      address: obj.address,
      description: obj.description,
    };
  });

  // Convert the filtered array back to JSON
  filteredJsonData.value = filteredArray;
  for (let x in filteredJsonData.value) {
    if (
      filteredJsonData.value[x].kebele == kebele &&
      filteredJsonData.value[x].post_email == store_email
    ) {
      isData.value = true;
    }
  }
  console.log(filteredJsonData.value);
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
