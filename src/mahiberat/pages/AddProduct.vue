<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex flex-row w-full">
      <AdminPanel />
      <div class="ml-6 w-full flex flex-row">
        <div class="w-full flex flex-col pl-10 flex-wrap">
          <div class="flex justify-center pt-4">
            <p class="dark:text-white text-2xl font-bold font-mono">Request for market</p>
          </div>
          <div class="w-full p-2 px-8 py-6 mb-4">
            <div class="field">
              <label class="block text-gray-700 text-sm font-bold mb-2">Product Id</label>
              <div class="control">
                <div>
                  <select v-model="productId" class="w-full py-2 border border-green-300">
                    <option value="">product_id</option>
                    <optgroup v-for="product in filteredProduct">
                      <option>
                        {{ product.product_id }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="productId == 0 && tryCount == 1">
                    የሚሸጠዉን አልመረጡም
                  </p>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Products amount for Market</label
              >
              <div class="control">
                <input
                  class="shadow border-green-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Amount"
                  v-model="amount"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="amount == '' && tryCount == 1">
                    ብዛቱን አላስገቡም
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
            <div class="control flex justify-center">
              <button
                class="bg-green-300 py-2 px-8 hover:bg-green-500 text-white font-bold my-4 hover:scale-x-110 rounded focus:outline-none focus:shadow-outline"
                @click="postProductForMarket(productId)"
              >
                Send request
              </button>
            </div>
          </div>
        </div>
        <div class="w-full p-2 px-8 py-6 mb-4">
          <table class="table-auto w-full text-gray-700">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Title</th>
                <th>price</th>
                <th>amount</th>
                <th>amountInMarket</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in filteredProduct" :key="product.product_id">
                <td>{{ product.product_id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.postedForMarket }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Swal from "sweetalert2";

const router = useRouter();
var amount = ref("");
const AmountOfPostedInToMarket = ref(0);
const kebele = localStorage.getItem("kebele");

const tryCount = ref("");
const amountNumberCheck = ref(false);

const totalUsers = ref("");
const storeEmployee = ref("");

const store_email = ref("");
const datas = ref("");
const seller = localStorage.getItem("seller");

const filteredProduct = ref("");

const productId = ref(0);
const totalAmount = ref(0);

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
    await getStoreEmployee();
    await filterProduct();
  }
});

const postProductForMarket = async (id) => {
  tryCount.value = 1;
  amountNumberCheck.value = isNaN(amount.value);
  if (id != "" && amount.value != "") {
    await getProductById(id);
    if (AmountOfPostedInToMarket.value == 0) {
      if (amount.value > 0) {
        await updateProduct(id);
      } else {
        let timerInterval;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          html: "ብዛቱ የተሰሳተ ነው!",
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
    } else if (AmountOfPostedInToMarket.value == undefined) {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "ለገበያ የመረጡት የግብርና አቅርቦት ገና ወደ ማሂበራታችን መጋዘን አልገባም!",
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
        html: "Please Finish first Products In The Market!",
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
const getProductById = async (id) => {
  try {
    const productByNameAndKebele = await axios.get(
      `http://localhost:5000/products/${id}`
    );
    AmountOfPostedInToMarket.value = productByNameAndKebele.data.postedForMarket;
    totalAmount.value = productByNameAndKebele.data.amount;
  } catch (err) {}
};
const updateProduct = async (id) => {
  try {
    if (totalAmount.value - amount.value >= 0) {
      await axios.put(`http://localhost:5000/products/addProductToMarket/${id}`, {
        amount: totalAmount.value - amount.value,
        postedForMarket: amount.value,
        marketState: 0,
      });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "success",
        // title: "ስህተት",
        html: "successfull done!",
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
      router.push("/mahiberat/productsList");
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "your request is greater than total amount!",
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
      router.push("/mahiberat/addProduct");
    }
  } catch (err) {
    console.log(err);
  }
};

const getStoreEmployee = async () => {
  try {
    const getUsers = await axios.get("http://localhost:5000/users");
    totalUsers.value = getUsers.data;

    storeEmployee.value = totalUsers.value.filter(
      (employeeData) => employeeData.kebele == kebele && employeeData.user_role == "store"
    );
    for (let x in storeEmployee.value) {
      store_email.value = storeEmployee.value[x].email;
    }
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async () => {
  //show all products
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
  } catch (err) {}
};

const filterProduct = async () => {
  try {
    filteredProduct.value = datas.value.filter(
      (product) => product.kebele == kebele && product.seller == seller
    );
  } catch (err) {}
};
</script>

<style></style>
