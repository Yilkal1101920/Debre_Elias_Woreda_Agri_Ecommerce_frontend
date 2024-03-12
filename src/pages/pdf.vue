<template>
  <div class="w-full h-full pb-8 bg-green-50">
    <p class="px-6 pt-6 text-center text-lg font-mono text-gray-800">
      Here is your Invoice. It is ony one order step. The total product you bought and
      their single and total cost are associated bellow. You can print it. print show it
      for store while you goto accept the product you bought.
    </p>
    <div class="flex justify-center py-2 pl-2">
      <select v-on:change="selectSeller" v-model="selectedSeller">
        <option value="">Pay</option>
        <option v-for="seller in selectedSellers" :value="seller.patent_email">
          {{ seller.fName }}
        </option>
      </select>
    </div>
    <div id="pdfConvertor" class="px-8 pt-4">
      <div class="flex justify-between sm:px-2 md:px-6">
        <div class="flex gap-3 pb-4">
          <img
            src="https://i.ibb.co/7kWjS0M/Debre-Elias-Agri-Service.png"
            alt="organization's logo"
            class="h-11"
          />
          <div class="text-gray-800 flex-col">
            <p class="">{{ kebele }} Mahiberat</p>
            <p class="">+251{{ userPhone }}</p>
          </div>
        </div>
        <div class="gap-3 pb-4 flex">
          <img
            src="../assets/debreEliasLogo.png"
            alt="organization's logo"
            class="h-11"
          />
          <div class="text-gray-800 flex-col">
            <p class="">Amhara Region</p>
            <p class="">አማራ ክልል</p>
          </div>
        </div>
      </div>

      <div class="body-section">
        <div class="row">
          <div class="col-6 text-gray-800 font-mono font-bold">
            <h2 class="heading">Invoice No.: 001</h2>
            <p class="sub-heading">Tracking No. fabcart2025</p>
            <p class="sub-heading">Order Date: 12-06-2023</p>
            <p class="sub-heading">Email Address: {{ user_email }}</p>
          </div>
          <div class="col-6 text-gray-800 font-mono font-bold">
            <p class="sub-heading">Full Name: {{ userName }} {{ userFatherName }}</p>
            <p class="sub-heading">Address: {{ kebele }}</p>
            <p class="sub-heading">Phone Number: +251{{ userPhone }}</p>
            <p class="sub-heading">ID: {{ userID }}</p>
          </div>
        </div>
      </div>

      <div class="body-section">
        <h3 class="heading text-gray-800 font-mono font-bold text-lg">Ordered Items</h3>
        <br />
        <table class="table-bordered">
          <thead class="text-gray-800 bg-slate-400">
            <tr>
              <th>Product</th>
              <th class="">Price</th>
              <th class="">Quantity</th>
              <th class="">Sub Total</th>
            </tr>
          </thead>
          <tbody class="text-gray-800">
            <tr
              v-if="payment_method == 'chapa'"
              v-for="item in Ordereddatas"
              :key="item.order_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 1
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 1
                "
                class=""
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 1
                "
                class="pl-2"
              >
                {{ item.nOrders }}
              </td>
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 1
                "
                class=""
              >
                {{ item.price * item.nOrders }}
              </td>
            </tr>
            <tr
              v-if="payment_method == 'onDelivery'"
              v-for="item in Ordereddatas"
              :key="item.order_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 0
                "
                class="pl-2"
              >
                {{ item.title }}
              </td>
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 0
                "
                class=""
              >
                {{ item.price }}
              </td>
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 0
                "
                class="pl-2"
              >
                {{ item.nOrders }}
              </td>
              <td
                v-if="
                  item.user_email == user_email &&
                  item.patent_email == seller_email &&
                  item.cancel != 1 &&
                  item.payStatus == 0
                "
                class=""
              >
                {{ item.price * item.nOrders }}
              </td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">Grand Total</td>
              <td>{{ totalCostInBirr }} birr</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div
          class="flex flex-col justify-center px-2 gap-2 md:justify-between md:items-center md:flex-row"
        >
          <div class="">
            <h3
              class="text-gray-800 font-mono font-bold text-lg"
              v-if="payment_method == 'chapa'"
            >
              Payment Status: Paid.
            </h3>
            <h3
              class="text-gray-800 font-mono font-bold text-lg"
              v-if="payment_method == 'chapa'"
            >
              Payment Mode: Chapa.
            </h3>
            <h3
              class="text-gray-800 font-mono font-bold text-lg"
              v-if="payment_method == 'onDelivery'"
            >
              Payment Status: un Paid.
            </h3>
            <h3
              class="text-gray-800 font-mono font-bold text-lg"
              v-if="payment_method == 'onDelivery'"
            >
              Payment Mode: On delivery.
            </h3>
          </div>
          <div class="flex-col items-center text-gray-800 font-mono font-bold">
            <img
              src="../assets/stamp.png"
              class="h-16 w-auto"
              alt="stamp image"
              srcset=""
            />
            <p>Organization's stamp</p>
          </div>
          <div class="flex-col items-center text-gray-800 font-mono font-bold">
            <img
              src="../assets/firma.png"
              class="h-11 w-auto"
              alt="This was head of organization signature image"
              srcset=""
            />
            <p>Admin's signature: Abebe K.</p>
          </div>
        </div>
        <div
          class="flex flex-col justify-center px-2 md:flex-row md:justify-between text-gray-800 font-mono font-bold"
        >
          <p>
            <span class="font-bold italic font-mono text-lg">Note:</span> It is not valid
            if it has not organization's stamp and administrator's signature.
          </p>
          <p class="italic text-orange-500 cursor-pointer">debreEliasAgriService.com</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-3 pb-6">
      <button
        class="bg-green-400 hover:bg-green-700 py-2 px-8 rounded-lg pl-5 pr-5"
        @click="download"
      >
        ደረሰኝ ያውርዱ
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { usePaymentMode } from "../state/paymentMode";
const paymentMode = usePaymentMode();

const kebele = localStorage.getItem("kebele");
var user_email = localStorage.getItem("user_email");

const getUserEmail = ref([]);
const Ordereddatas = ref([]);

const userName = ref("");
const userFatherName = ref("");
const userPhone = ref("");
const userKebele = ref("");
const userSubKebele = ref("");
const userVillage = ref("");
const userID = ref("");

const totalCost = ref("");
var totalCostInBirr = ref(0);
const getSeller = ref("");
const selectedSeller = ref("");
const selectedSellers = ref("");
const payment_method = localStorage.getItem("payment_method");
const seller_email = localStorage.getItem("reporterEmail");
onMounted(async () => {
  if (localStorage.getItem("role") == "customer") {
    user_email = localStorage.getItem("customer_email");
  }
  await getUserByEmail(user_email);
  await getOrderedProducts();
  await getTotalPrice();
  await getSellers();
});

const download = async () => {
  window.html2canvas = html2canvas;
  var doc = new jsPDF("p", "pt", "a1");
  doc.html(document.querySelector("#pdfConvertor"), {
    callback: function (pdf) {
      pdf.save("mypdf.pdf");
    },
  });
  await finishOrder();
};

const finishOrder = async () => {
  try {
    await axios.delete(`http://localhost:5000/order/delete/${user_email}`);
  } catch (err) {
    console.log(err);
  }
};

const getUserByEmail = async (email) => {
  try {
    const getUser = await axios.get(`http://localhost:5000/users/${email}`);
    getUserEmail.value = getUser.data;
    userName.value = getUser.data.fName;
    userFatherName.value = getUser.data.faName;
    userPhone.value = getUser.data.phone;
    userKebele.value = getUser.data.kebele;
    userSubKebele.value = getUser.data.subKebele;
    userVillage.value = getUser.data.village;
    userID.value = getUser.data.username;
  } catch (err) {}
};

const getOrderedProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    Ordereddatas.value = response.data;

    // confirmDisplay.value[Ordereddatas.value.order_id] = true;
  } catch (err) {}
};
const getTotalPrice = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderedProducts");
    totalCost.value = response.data;

    for (let x in totalCost.value) {
      if (payment_method == "chapa") {
        if (
          totalCost.value[x].user_email == user_email &&
          totalCost.value[x].patent_email == seller_email &&
          totalCost.value[x].payStatus == 1
        ) {
          totalCostInBirr.value =
            totalCostInBirr.value + totalCost.value[x].nOrders * totalCost.value[x].price;
        }
      }
      if (payment_method == "onDelivery") {
        if (
          totalCost.value[x].user_email == user_email &&
          totalCost.value[x].patent_email == seller_email &&
          totalCost.value[x].payStatus == 0
        ) {
          totalCostInBirr.value =
            totalCostInBirr.value + totalCost.value[x].nOrders * totalCost.value[x].price;
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getSellers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/sellers");
    getSeller.value = response.data;
    selectedSellers.value = getSeller.value.filter(
      (seller) => seller.user_email == user_email
    );
  } catch (err) {}
};
const selectSeller = async () => {
  try {
    Ordereddatas.value = Ordereddatas.value.filter(
      (seller) =>
        seller.user_email == user_email && seller.patent_email == selectedSeller.value
    );
  } catch (err) {}
};
</script>
<style scoped>
body {
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
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
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
.logo {
  width: 50%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}
.col-6 {
  width: 50%;
  flex: 0 0 auto;
}
.company-details {
  float: right;
  text-align: right;
}
.body-section {
  padding: 16px;
  border: 1px solid gray;
}

table {
  background-color: #fff;
  width: 100%;
  border-collapse: collapse;
}
table thead tr {
  border: 1px solid #111;
  background-color: #f2f2f2;
}
table td {
  vertical-align: middle !important;
  text-align: center;
}
table th,
table td {
  padding-top: 08px;
  padding-bottom: 08px;
}
.table-bordered {
  box-shadow: 0px 0px 5px 0.5px gray;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.text-right {
  text-align: end;
}

.float-right {
  float: right;
}
</style>
