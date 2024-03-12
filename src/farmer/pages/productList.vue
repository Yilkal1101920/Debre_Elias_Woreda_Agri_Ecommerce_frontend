<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <div class="w-full">
      <div
        class="flex justify-between items-center mt-6 mb-2 gap-5 flex-wrap px-4 w-full"
      >
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/farmer/dashboard">
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
        <div class="">
          <form action="">
            <div class="flex gap-0">
              <input
                type="search"
                v-model="productName"
                name="search"
                id="searchProduct"
                placeholder=" Search Product..."
                class="w-full p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
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
      <div class="overflow-x-auto text-justify flex justify-center mt-1 mx-6 mb-6">
        <div v-if="isData == false">
          <div colspan="11" class="col-span-full">
            <div class="text-gray-800 dark:text-white block py-11 px-11">
              <P
                class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                >No Products.</P
              >
              <p
                class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
              >
                No thing to show. once post products, the products will be displayed.
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
              <th class="py-2 pl-2">Price</th>
              <th class="py-2 pl-2">Amout(Kuntal)</th>
              <th class="py-2 pl-2">Image</th>
              <th class="py-2 pl-2">Description</th>
              <th class="py-2 pl-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in datas" :key="item.product_id" class="hover:bg-slate-200">
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
                class="pl-2"
              >
                {{ item.product_id }}
              </td>
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
                class="pl-2"
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
                class="pl-2"
              >
                {{ item.amount }}
              </td>
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
                class="pl-2"
              >
                <img class="w-10 h-8" :src="item.image" />
              </td>
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
                class="pl-2"
              >
                {{ item.description }}
              </td>
              <td
                v-if="
                  item.post_email == user_email &&
                  item.marketState == 1 &&
                  (item.category.includes(productName) ||
                    item.type_product.includes(productName) ||
                    item.title.includes(productName) ||
                    item.description.includes(productName))
                "
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
import Swal from "sweetalert2";

const datas = ref([]);
const router = useRouter();
const user_email = localStorage.getItem("user_email");
const productName = ref("");
const isData = ref(false);

const productAdd = () => {
  router.replace("/farmer/addProduct");
};

const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    console.log(datas.value);
    for (let x in datas.value) {
      if (datas.value[x].post_email == user_email && datas.value[x].marketState == 1) {
        isData.value = true;
      }
    }
  } catch (err) {
    console.log(err);
  }
};
onMounted(async () => {
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user"
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
  console.log(user_email);
});

const deleteProduct = async (id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteFarmerProduct(id);
      Swal.fire("Deleted Successfully!");
    }
  });
};

const deleteFarmerProduct = async (id) => {
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
    router.push(`/mahiberat/product/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const searchProductByName = async () => {
  localStorage.setItem("product_name", productName.value);
  router.push(`/mahiberat/product/productByName/${productName.value}`);
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
