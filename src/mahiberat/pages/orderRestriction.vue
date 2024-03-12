<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800 w-full h-full">
    <!-- <div class="flex flex-row justify-center items-center bg-green-50 dark:bg-gray-800"> -->
    <AdminPanel />
    <div class="flex flex-row px-8 justify-center gap-5 w-full">
      <div class="p-2 px-8 py-6 pb-8 mb-4">
        <!-- <div class="field dark:text-white"> -->
        <div class="control field dark:text-white">
          <label class="block text-gray-700 text-sm font-bold mb-2">Product Id</label>
          <select v-model="productId" class="w-full border border-green-300">
            <option value="">select product</option>
            <optgroup v-for="product in filteredProduct">
              <option>
                {{ product.product_id }}
              </option>
            </optgroup>
          </select>
          <div class="mb-0 ml-5">
            <p class="text-red-600" v-if="productId == '' && tryCount == 1">
              ለገበያ የቀረበው ምርት ወይም ማዳበሪያ ስም አልተሞላም
            </p>
          </div>
        </div>
        <!-- </div> -->

        <div class="field pt-10">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Allowed Quantity</label
          >
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="allowed quantity"
              v-model="allowedQuantity"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="allowedQuantity == '' && tryCount == 1">
                ለገበያ የቀረበው ምርት ወይም ማዳበሪያ ብዛት ገደብ አልተሞላም
              </p>
            </div>
          </div>
        </div>
        <div class="field pt-10">
          <label class="block text-gray-700 text-sm font-bold mb-2">Expire Date</label>
          <div class="control">
            <input type="date" v-model="expireDate" />
          </div>
          <div class="mb-0 ml-5">
            <p class="text-red-600" v-if="allowedQuantity == '' && tryCount == 1">
              ለገበያ የቀረበው ምርት ወይም ማዳበሪያ ብዛት ገደብ አልተሞላም
            </p>
          </div>
        </div>
        <div class="control pt-10 pl-4">
          <button
            class="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="postOrderRestriction"
          >
            Add Limit
          </button>
        </div>
      </div>
      <div class="w-full p-2 px-8 py-6 mb-4">
        <table class="table-auto w-full text-gray-700">
          <thead>
            <tr>
              <th>code</th>
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
  <!-- </div> -->
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Swal from "sweetalert2";

const router = useRouter();

const productId = ref("");
const allowedQuantity = ref("");
const notifier_email = localStorage.getItem("manager_email");
const kebele = localStorage.getItem("kebele");
const restrictedData = ref("");
const countRestrictionGiven = ref("");

const tryCount = ref("");
const datas = ref([]);
const filteredProduct = ref("");
const seller = localStorage.getItem("seller");
const expireDate = ref("");

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
    await filterProduct();
  }
});
const postOrderRestriction = async () => {
  tryCount.value = 1;
  await getAllRestrictedData();
  // if (countRestrictionGiven.value == 1) {
  //   let timerInterval;
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "warning",
  //     // title: "ስህተት",
  //     html: "Restriction given before!",
  //     timer: 2000,
  //     timerProgressBar: true,
  //     willClose: () => {
  //       clearInterval(timerInterval);
  //     },
  //   }).then((result) => {
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //     }
  //   });
  //   countRestrictionGiven.value = 0;
  // } else {
  if (productId.value != "" && allowedQuantity.value != "") {
    postRestriction();
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "Please fill all fields!",
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
};
// };

const postRestriction = async () => {
  try {
    await deleteOrderRestriction(productId.value, kebele);
    await deleteTransactionByProductIdAndKebele(productId.value, kebele);
    await deleteOrderByProductIdAndKebele(productId.value, kebele);
    await axios.post("http://localhost:5000/orderRestriction", {
      product_Id: productId.value,
      allowed_quantity: allowedQuantity.value,
      notifier_email: notifier_email,
      kebele: kebele,
      expire_date: expireDate.value,
    });
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "success",
      // title: "ስህተት",
      html: "Successfully add Order Restriction!",
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
    router.replace("/mahiberat/orderRestrictionList");
  } catch (err) {
    console.log(err);
  }
};

const getAllRestrictedData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderRestriction");
    restrictedData.value = response.data;
    console.log(restrictedData.value);

    for (let x in restrictedData.value) {
      console.log(restrictedData.value[x].title);
      if (
        productId.value == restrictedData.value[x].product_Id &&
        kebele == restrictedData.value[x].kebele
      ) {
        countRestrictionGiven.value = 1;
      }
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

const deleteTransactionByProductIdAndKebele = async (id, kebele) => {
  try {
    await axios.delete(`http://localhost:5000/transaction/History/${id}/${kebele}`);
  } catch (err) {
    console.log(err);
  }
};

const deleteOrderByProductIdAndKebele = async (id, kebele) => {
  try {
    await axios.delete(`http://localhost:5000/order/delete/${id}/${kebele}`);
  } catch (err) {
    console.log(err);
  }
};
const deleteOrderRestriction = async (id, kebele) => {
  try {
    await axios.delete(`http://localhost:5000/orderRestriction/delete/${id}/${kebele}`);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
