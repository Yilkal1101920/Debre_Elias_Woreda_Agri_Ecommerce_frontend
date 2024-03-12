<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="w-full">
      <div class="items-center flex">
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
        <p
          class="text-center pl-[30%] text-2xl text-gray-700 dark:text-white font-bold font-mono"
        >
          Register Product
        </p>
      </div>
      <div class="flex flex-row pl-10 flex-wrap justify-center">
        <div
          class="p-2 px-8 pt-6 mb-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div class="field">
            <label class="text-gray-700 font-bold">Category</label>
            <div class="control">
              <select
                v-model="category"
                class="border border-green-300 bg-white text-gray-700 dark:text-white w-full py-2"
              >
                <option value="AGRICULTURAL PRODUCT">AGRICULTURAL PRODUCT</option>
                <option value="AGRICULTURAL MATERIAL">AGRICULTURAL MATERIAL</option>
                <option value="SELECTED SEED">SELECTED SEED</option>
                <option value="FERTILIZER">FERTILIZER</option>
                <option value="SUGAR AND OIL">SUGAR AND OIL</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="category == '' && tryCount == 1">
                የግብርና አቅርቦት መደብ አልመረጡም
              </p>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold">Product Type</label>
            <div
              class="control border border-green-300 bg-white text-gray-700 dark:text-white"
            >
              <select v-model="productType" class="w-full py-2">
                <option value="AGRICULTURAL PRODUCT">AGRICULTURAL PRODUCT</option>
                <option value="AGRICULTURAL MATERIAL">AGRICULTURAL MATERIAL</option>
                <option value="SELECTED SEED">SELECTED SEED</option>
                <option value="FERTILIZER">FERTILIZER</option>
                <option value="SUGAR AND OIL">SUGAR AND OIL</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="productType == '' && tryCount == 1">
                የግብርና አቅርቦት መደብ አልመረጡም
              </p>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold">Title</label>
            <div class="control">
              <div v-if="category == ''">
                <select
                  v-model="title"
                  class="border border-green-300 bg-white text-gray-700 dark:text-white w-full py-2"
                >
                  <option value="DAP">DAP</option>
                  <option value="UREA">UREA</option>
                  <option value="Wheate Seed">Wheate Seed</option>
                  <option value="Maize Seed">Maize Seed</option>
                  <option value="Teff">Teff</option>
                  <option value="Wheate">Wheate</option>
                  <option value="Maize">Maize</option>
                  <option value="Nuggets">Nuggets</option>
                </select>
              </div>
              <div v-if="category == 'FERTILIZER'">
                <select v-model="title">
                  <option value="DAP">DAP</option>
                  <option value="UREA">UREA</option>
                </select>
              </div>
              <div v-if="category == 'AGRICULTURAL PRODUCT'">
                <select v-model="title">
                  <option value="Teff">Teff</option>
                  <option value="Wheate">Wheate</option>
                  <option value="Maize">Maize</option>
                  <option value="Nuggets">Nuggets</option>
                </select>
              </div>
              <div v-if="category == 'SELECTED SEED'">
                <select v-model="title">
                  <option value="Wheate Seed">Wheate Seed</option>
                  <option value="Maize Seed">Maize Seed</option>
                </select>
              </div>
              <div v-if="category == 'SUGAR AND OIL'">
                <select v-model="title">
                  <option value="Sugar">Sugar</option>
                  <option value="Oil">Oil</option>
                </select>
              </div>
            </div>
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="title == '' && tryCount == 1">
                ወደ መጋዝን የሚገባዉን የግብርና አቅርቦት ስም አልመረጡም
              </p>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <div class="control">
              <input
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700 dark:text-white"
                type="number"
                placeholder="Price of one product"
                v-model="price"
                required
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="price == '' && tryCount == 1">ዋጋ አላስገቡም</p>
              </div>
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

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Original Cost</label
            >
            <div class="control">
              <input
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="number"
                placeholder="Original Cost, without discount"
                v-model="orginalCost"
                required
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
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Measurement Unit</label
            >
            <div class="control">
              <select
                v-model="measurementUnit"
                class="border border-green-300 bg-white text-gray-700 dark:text-white w-full py-2"
              >
                <option value="">Measurement</option>
                <option value="50kg">50Kg</option>
                <option value="50kg">100Kg</option>
                <option value="kg">1Kg</option>
                <option value="litter">Litter</option>
              </select>
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="measurementUnit == '' && tryCount == 1">
                  መለኪያ አሃድ አላስገባህም
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
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="number"
                placeholder="Amount"
                v-model="amount"
                required
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
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Address"
                v-model="address"
                required
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="address == '' && tryCount == 1">
                  አድራሻ አላስገቡም
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <div class="control">
              <input
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="file"
                @change="onFileChange"
              />
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <div class="control">
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Description of product"
                v-model="description"
                required
                class="w-full border border-green-300"
              ></textarea>
            </div>
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="description == '' && tryCount == 1">
                ማብራሪያ አላስገቡም
              </p>
            </div>
          </div>
        </div>
        <div class="control flex justify-center pb-16">
          <button
            class="bg-green-300 hover:bg-green-700 text-white font-bold py-2 rounded-lg px-8"
            @click="insertProduct"
          >
            Post now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

const base64Image = ref("");
var selectedFile = ref("");
const url = ref("");

const category = ref("");
const productType = ref("");
const title = ref("");
const price = ref("");
const orginalCost = ref("");
var amount = ref("");
const measurementUnit = ref("");
const address = ref("");
const description = ref("");
const costNumberCheck = ref(false);
const priceNumberCheck = ref(false);
const amountNumberCheck = ref(false);

const datas = ref();

const kebele = localStorage.getItem("kebele");
const count = ref(0);
const productIdforUpdate = ref(0);
const updatedAmount = ref(0);

const tryCount = ref("");

const order_date = ref("");
const store_email = localStorage.getItem("store_email");

const day = ref("");
const dayName = ref("");
const month = ref("");
const monthName = ref("");

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
const insertProduct = async () => {
  tryCount.value = 1;
  costNumberCheck.value = isNaN(orginalCost.value);
  priceNumberCheck.value = isNaN(price.value);
  amountNumberCheck.value = isNaN(amount.value);
  await checkInputForProductUpdate();
  if (count.value == 0) {
    await uploadImage();
    if (
      category.value != "" &&
      productType.value != "" &&
      title.value != "" &&
      price.value != "" &&
      orginalCost != "" &&
      amount.value != "" &&
      measurementUnit.value != "" &&
      address.value != "" &&
      kebele != ""
    ) {
      if (price.value > 0 && orginalCost.value > 0 && amount.value > 0) {
        await saveOrder();
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
  }
};

const checkInputForProductUpdate = async () => {
  if (
    category.value != "" &&
    productType.value != "" &&
    title.value != "" &&
    price.value != "" &&
    orginalCost != "" &&
    amount.value != "" &&
    measurementUnit.value != "" &&
    address.value != "" &&
    kebele != ""
  ) {
    if (price.value > 0 && orginalCost.value > 0 && amount.value > 0) {
      await getAllProducts();
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
};
const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    for (let x in datas.value) {
      console.log(datas.value[x].title);
      if (
        store_email == datas.value[x].email &&
        title.value == datas.value[x].title &&
        price.value == datas.value[x].price &&
        orginalCost.value == datas.value[x].original_cost &&
        kebele == datas.value[x].kebele
      ) {
        count.value = 1;
        productIdforUpdate.value = datas.value[x].product_id;
        updatedAmount.value = parseInt(amount.value) + datas.value[x].amount;
        updateProductById(productIdforUpdate.value);
      } else {
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const updateProductById = async (id) => {
  try {
    await axios.put(`http://localhost:5000/products/${id}`, {
      amount: updatedAmount.value,
    });
    await insertReport();
  } catch (err) {}
  router.push("/mahiberat/storeProductsList");
};

const uploadImage = async () => {
  if (base64Image.value != "") {
    const fetchData = await axios.post("http://localhost:5000/uploadImage", {
      base64: base64Image.value,
      name: "agriculture",
    });
    console.log(fetchData.data);
    url.value = fetchData.data.url;
  }
};

const saveOrder = async () => {
  try {
    await axios.post("http://localhost:5000/products", {
      post_email: store_email,
      seller: "mahiberat",
      category: category.value,
      type_product: productType.value,
      title: title.value,
      price: price.value,
      original_cost: orginalCost.value,
      measurement: measurementUnit.value,
      amount: amount.value,
      address: address.value,
      description: description.value,
      image: url.value,
      kebele: kebele,
    });
    await insertReport();
    router.push("/mahiberat/storeProductsList");
  } catch (err) {
    console.log(err);
  }
};

const insertReport = async () => {
  try {
    order_date.value = new Date();
    const date = new Date(order_date.value);
    day.value = date.getDay();
    if (day.value == 0) {
      dayName.value = "Monday";
    }
    if (day.value == 1) {
      dayName.value = "Tuesday";
    }
    if (day.value == 2) {
      dayName.value = "Wednsday";
    }
    if (day.value == 3) {
      dayName.value = "Tursday";
    }
    if (day.value == 4) {
      dayName.value = "Friday";
    }
    if (day.value == 5) {
      dayName.value = "Saturday";
    }
    if (day.value == 6) {
      dayName.value = "Sunday";
    }

    month.value = date.getMonth();

    if (month.value == 0) {
      monthName.value = "January";
    }
    if (month.value == 1) {
      monthName.value = "February";
    }
    if (month.value == 2) {
      monthName.value = "March";
    }
    if (month.value == 3) {
      monthName.value = "April";
    }
    if (month.value == 4) {
      monthName.value = "May";
    }
    if (month.value == 5) {
      monthName.value = "June";
    }
    if (month.value == 6) {
      monthName.value = "Junly";
    }
    if (month.value == 7) {
      monthName.value = "Ogust";
    }
    if (month.value == 8) {
      monthName.value = "September";
    }
    if (month.value == 9) {
      monthName.value = "October";
    }
    if (month.value == 10) {
      monthName.value = "November";
    }
    if (month.value == 11) {
      monthName.value = "December";
    }
    await axios.post("http://localhost:5000/report", {
      reporter_email: store_email,
      product_name: title.value,
      quantity: amount.value,
      report_owner: kebele,
      report_status: "buy",
      transaction: "cash out",
      transaction_in_birr: orginalCost.value,
      day: dayName.value,
      monthName: monthName.value,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
/* Googlefont Poppins CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: sticky;
  height: 100%;
  width: 240px;
  background: #0a2558;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 60px;
}
.sidebar .logo-details {
  height: 80px;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 60px;
  text-align: center;
}
.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.sidebar .nav-links {
  margin-top: 10px;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  height: 50px;
}
.sidebar .nav-links li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active {
  background: #081d45;
}
.sidebar .nav-links li a:hover {
  background: #081d45;
}
.sidebar .nav-links li i {
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
}
.sidebar .nav-links .log_out {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.sidebar.active ~ .home-section {
  width: calc(100% - 60px);
  left: 60px;
}
.sidebar.active ~ .home-section nav {
  left: 60px;
  width: calc(100% - 60px);
}
/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar {
    width: 60px;
  }
  .sidebar.active {
    width: 220px;
  }
  .sidebar.active ~ .home-section {
    /* width: calc(100% - 220px); */
    overflow: hidden;
    left: 220px;
  }
  .sidebar.active ~ .home-section nav {
    width: calc(100% - 220px);
    left: 220px;
  }
}
@media (max-width: 1000px) {
}
@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i {
    display: none;
  }
  .home-section nav .profile-details {
    height: 50px;
    min-width: 40px;
  }
  .home-content .sales-boxes .sales-details {
    width: 560px;
  }
}
@media (max-width: 550px) {
  .sidebar.active ~ .home-section nav .profile-details {
    display: none;
  }
}
@media (max-width: 400px) {
  .sidebar {
    width: 0;
  }
  .sidebar.active {
    width: 60px;
  }

  .sidebar.active ~ .home-section {
    left: 60px;
    width: calc(100% - 60px);
  }
  .sidebar.active ~ .home-section nav {
    left: 60px;
    width: calc(100% - 60px);
  }
}
</style>
