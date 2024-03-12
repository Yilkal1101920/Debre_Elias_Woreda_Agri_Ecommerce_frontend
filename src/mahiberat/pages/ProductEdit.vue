<template>
  <div class="flex flex-row bg-green-50 dark:bg-slate-800 w-full h-full">
    <!-- <AdminPanel /> -->

    <div class="container">
      <div class="py-6 pl-10">
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
          <div class="w-[50%]">
            <p class="font-mono font-bold text-lg text-gray-800 dark:text-white">
              Edit product information
            </p>
          </div>
        </div>

        <div
          class="p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 px-8 pt-6 pb-8 mb-4"
        >
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Category"
                v-model="category"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="category == '' && tryCount == 1">
                  የግብርና አቅርቦት መደብ አልመረጡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Product Type</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Product type"
                v-model="productType"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="productType == '' && tryCount == 1">
                  የግብርና አቅርቦት መደብ አልመረጡም
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                v-model="title"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="title == '' && tryCount == 1">
                  ወደ መጋዝን የሚገባዉን የግብርና አቅርቦት ስም አልመረጡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Price"
                v-model="price"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="price == '' && tryCount == 1">ዋጋ አላስገቡም</p>
              </div>
              <div class="mb-0 ml-5">
                <p
                  class="text-red-600"
                  v-if="
                    (price <= 0 || price == null || priceNumberCheck) &&
                    tryCount == 1 &&
                    price != ''
                  "
                >
                  ትክክለኛ ዋጋ አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Orginal Cost</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Orginal Cost"
                v-model="orginalCost"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="orginalCost == '' && tryCount == 1">
                  የተገዛበትን ዋጋ አላስገቡም
                </p>
              </div>
              <div class="mb-0 ml-5">
                <p
                  class="text-red-600"
                  v-if="
                    (orginalCost <= 0 || orginalCost == null || costNumberCheck) &&
                    orginalCost != '' &&
                    tryCount == 1
                  "
                >
                  ትክክለኛ ዋጋ አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Amount</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Amount"
                v-model="amount"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="amount == '' && tryCount == 1">
                  ብዛት አላስገቡም
                </p>
              </div>
              <div class="mb-0 ml-5">
                <p
                  class="text-red-600"
                  v-if="
                    (amount <= 0 || amount == null || amountNumberCheck) &&
                    amount != '' &&
                    tryCount == 1
                  "
                >
                  ብዛቱ የተሳሳተ ነው
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address"
                v-model="address"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="address == '' && tryCount == 1">
                  አድራሻ አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Description"
                v-model="description"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="description == '' && tryCount == 1">
                  ማብራሪያ አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                @change="onFileChange"
                placeholder="image"
              />
            </div>
          </div>

          <div class="control">
            <button
              class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
              @click="uploadImage(useSelector.product_id)"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useSelectStore } from "../state/selectProStore";

import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

var useSelector = useSelectStore();
const base64Image = ref("");
var selectedFile = ref("");
const url = ref("");

const category = ref(useSelector.category);
const productType = ref(useSelector.product_type);
const title = ref(useSelector.title);
const price = ref(useSelector.price);
const orginalCost = ref(useSelector.orginal_cost);
const amount = ref(useSelector.amount);
const address = ref(useSelector.address);
const description = ref(useSelector.description);

const kebele = localStorage.getItem("kebele");

const tryCount = ref(0);
const costNumberCheck = ref(false);
const priceNumberCheck = ref(false);
const amountNumberCheck = ref(false);

onMounted(() => {
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
  }
});

const onFileChange = (e) => {
  selectedFile = e.target.files[0];

  const fileReader = new FileReader();

  fileReader.onload = () => {
    console.log(fileReader.result);
    base64Image.value = fileReader.result.split(",")[1];
  };
  fileReader.readAsDataURL(selectedFile);
  console.log(e.target.files[0]);
};
const uploadImage = async (id) => {
  tryCount.value = 1;
  costNumberCheck.value = isNaN(orginalCost.value);
  priceNumberCheck.value = isNaN(price.value);
  amountNumberCheck.value = isNaN(amount.value);

  if (base64Image.value != "") {
    const fetchData = await axios.post("http://localhost:5000/uploadImage", {
      base64: base64Image.value,
      name: "agriculture",
    });
    console.log(fetchData.data);
    url.value = fetchData.data.url;
  }
  if (
    category.value != "" &&
    productType.value != "" &&
    title.value != "" &&
    price.value != "" &&
    orginalCost != "" &&
    amount.value != "" &&
    address.value != "" &&
    description.value != "" &&
    kebele != ""
  ) {
    if (price.value > 0 && orginalCost.value > 0 && amount.value > 0) {
      await saveOrder(id);
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "እባክዎ ትክክለኛ ቁጥር ያስገቡ!",
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
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ያልተሞላ ቦታ አለ!",
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
  // await saveOrder(id);
};
const saveOrder = async (id) => {
  try {
    await axios.put(`http://localhost:5000/products/edit/${id}`, {
      category: category.value,
      type_product: productType.value,
      title: title.value,
      price: price.value,
      original_cost: orginalCost.value,
      amount: amount.value,
      address: address.value,
      description: description.value,
      image: url.value,
    });
    console.log("title:", title.value);
    router.replace("/mahiberat/storeProductsList");
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped></style>
