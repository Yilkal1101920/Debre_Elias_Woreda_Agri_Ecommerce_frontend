<template>
  <div class="bg-green-50 dark:bg-gray-800">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-20 gap-5">
      <div class="text-black pl-14 py-12 w-full">
        <div class="border p-2">
          <div v-for="user in getUserEmail" :key="user.email">
            <div>
              <div class="" v-if="user.email == cart_email">
                <form>
                  <div class="form-group mb-6">
                    <div class="form-group mb-6">
                      <label
                        for="fname"
                        class="form-label inline-block mb-2 text-gray-700"
                        v-if="languageStore.language == 'En'"
                        >First Name</label
                      >
                      <label
                        for="fname"
                        class="form-label inline-block mb-2 text-gray-700"
                        v-if="languageStore.language == 'Am'"
                        >ስም</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="fname"
                        placeholder="First Name"
                        v-model="user.fName"
                        disabled
                      />
                    </div>
                    <div class="form-group mb-6">
                      <label
                        for="lname"
                        class="form-label inline-block mb-2 text-gray-700"
                        v-if="languageStore.language == 'En'"
                        >Last Name</label
                      >
                      <label
                        for="lname"
                        class="form-label inline-block mb-2 text-gray-700"
                        v-if="languageStore.language == 'Am'"
                        >የአባት ስም</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="lname"
                        placeholder="Last Name"
                        v-model="user.faName"
                        disabled
                      />
                    </div>
                    <div class="form-group mb-6">
                      <label
                        for="phone"
                        class="form-label inline-block mb-2 text-gray-700"
                        v-if="languageStore.language == 'En'"
                        >Phone</label
                      >
                      <label
                        for="phone"
                        class="form-label inline-block mb-2 text-gray-700"
                        v-if="languageStore.language == 'Am'"
                        >ስልክ</label
                      >
                      <input
                        type="phone"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="phone"
                        placeholder="Phone"
                        v-model="user.phone"
                        disabled
                      />
                    </div>
                    <label
                      for="email"
                      class="form-label inline-block mb-2 text-gray-700"
                      v-if="languageStore.language == 'En'"
                      >Email</label
                    >
                    <label
                      class="form-label inline-block mb-2 text-gray-700"
                      v-if="languageStore.language == 'Am'"
                      >ኢሜል</label
                    >
                    <input
                      type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Enter email"
                      v-model="user.email"
                      disabled
                    />
                  </div>
                  <div class="form-group mb-6">
                    <label
                      class="form-label inline-block mb-2 text-gray-700"
                      v-if="languageStore.language == 'En'"
                      >Sub Kebele</label
                    >
                    <label
                      class="form-label inline-block mb-2 text-gray-700"
                      v-if="languageStore.language == 'Am'"
                      >ንኡስ ቀበሌ</label
                    >
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="user.subKebele"
                      placeholder="sub kebele"
                      disabled
                    />
                  </div>
                  <div class="form-group mb-6">
                    <label
                      class="form-label inline-block mb-2 text-gray-700"
                      v-if="languageStore.language == 'En'"
                      >Village</label
                    >
                    <label
                      class="form-label inline-block mb-2 text-gray-700"
                      v-if="languageStore.language == 'Am'"
                      >ጎጥ</label
                    >
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="user.village"
                      placeholder="village"
                      disabled
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-black pl-4 py-12">
        <div class="flex justify-center items-center">
          <div>
            <h2
              v-if="languageStore.language == 'En'"
              class="text-2xl font-mono font-bold pb-3"
            >
              Payment Method
            </h2>
            <h2
              v-if="languageStore.language == 'Am'"
              class="text-lg font-mono font-bold pb-3"
            >
              ክፍያ
            </h2>
            <div class="border border-gray-400 px-3 py-2 mr-5 mb-5">
              <div class="flex items-center gap-2">
                <button
                  type="submit"
                  :disabled="isDisabled"
                  class="flex flex-col bg-green-400 px-6 text-2xl py-2.5 text-white dark:bg-gray-800 font-medium mb-5 rounded-lg cursor-pointer shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  @click.prevent="payWithChapa"
                >
                  <h1 v-if="languageStore.language == 'En'">pay with chapa</h1>
                  <h1 v-if="languageStore.language == 'Am'">በቻፓ ይክፈሉ</h1>
                </button>
                <h1
                  v-if="languageStore.language == 'En'"
                  class="text-2xl font-bold font-mono text-orange-600 dark:text-white"
                >
                  {{ ReportsData.totalPrice }} Birr
                </h1>
                <h1
                  v-if="languageStore.language == 'Am'"
                  class="text-2xl font-bold font-mono text-orange-600 dark:text-white"
                >
                  {{ ReportsData.totalPrice }} ብር
                </h1>
              </div>
              <p>
                If you have deposite on Chapa pay now. Use your Chapa Card number to use
                it, select pay on chapa at the checkout, enter your card details, and
                confirm payment.
              </p>
            </div>
            <div class="border border-gray-500 py- 3 px-3 mr-5">
              <button
                @click.prevent="order"
                class="border border-green-500 focus:bg-green-700 focus:text-white px-3 mt-3 py-2 hover:bg-green-400 rounded-lg"
              >
                <h4 v-if="languageStore.language == 'En'">Pay on Delivery</h4>
                <h4 v-if="languageStore.language == 'Am'">ሲቀበሉ ይክፈሉ</h4>
              </button>
              <p class="pb-5">
                If you are a user who wants to make a payment on delivery, here are some
                general guidelines that you can follow: <br />
                1. Place your order <br />
                2.Wait for confirmation: After you have placed your order, wait for the
                seller to confirm it. This may take a few hours or a few days depending on
                the seller's processing time. <br />
                3.Receive the product: Once your order has been confirmed, the seller will
                ship the product to your address. When the product arrives, check it to
                make sure it is the right product and in good condition. <br />
                4.Pay on delivery: When the delivery person arrives with your product, you
                can pay for it in cash or by using a payment method that the seller has
                made available. Make sure to have the exact amount ready to avoid any
                confusion. <br />5.Sign the receipt: After making the payment, you will be
                asked to sign a receipt as proof of payment. Make sure to check the
                details on the receipt before signing it. Enjoy your purchase: Once you
                have paid for your product, you can enjoy it. If you have any issues with
                the product, contact the seller as soon as possible to resolve the issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useLanguageStore } from "../state/languageStore";
import { useReportsData } from "../state/reportStore";
import { useTransferReport } from "../woreda/state/transferReport";
import { usePaymentMode } from "../state/paymentMode";
import { useCounterStore } from "../state/store"; //for counting total cart
import { useRouter } from "vue-router";
const UseCount = useCounterStore();
const paymentMode = usePaymentMode();

const TransferReports = useTransferReport();

const ReportsData = useReportsData();

const languageStore = useLanguageStore();

const router = useRouter();

const getUserEmail = ref([]);

const name = ref("");
const fname = ref("");
const payemail = ref("");
var cart_email = localStorage.getItem("user_email");
const selled_date = ref("");
const day = ref("");
const dayName = ref("");
const month = ref("");
const monthName = ref("");

const kebele = localStorage.getItem("kebele");
const seller_email = ref("");
const reportOwner = ref("");
const quantity = ref(0);

var reportDatas = ref([]);
var reportData = ref({});
var isDisabled = ref(false);

onMounted(async () => {
  if (cart_email == null) {
    cart_email = localStorage.getItem("customer_email");
  }
  await getUserByEmail();
  if (localStorage.getItem("role") == "user") {
    await seller(kebele, "manager");
  }
});

const getUserByEmail = async () => {
  try {
    const getUser = await axios.get(`http://localhost:5000/users`);
    getUserEmail.value = getUser.data;
    for (let x in getUserEmail.value) {
      if (cart_email == getUserEmail.value[x].email) {
        name.value = getUserEmail.value[x].fName;
        fname.value = getUserEmail.value[x].faName;
        payemail.value = getUserEmail.value[x].email;
      }
    }
  } catch (err) {}
};
const order = () => {
  UseCount.totalCount = 0;
  paymentMode.paymentMode = "onDelivery";
  localStorage.setItem("payment_method", "onDelivery");
  router.replace("/reciet/pdf");
};

const payWithChapa = async () => {
  try {
    localStorage.setItem("payment_method", "chapa");
    isDisabled.value = true;
    if (localStorage.getItem("productSeller") == "mahiberat") {
      reportOwner.value = kebele;
      quantity.value = localStorage.getItem("quantity");
    }
    if (localStorage.getItem("productSeller") == "farmer") {
      reportOwner.value = localStorage.getItem("sellerID");
      quantity.value = localStorage.getItem("quantity");
    }
    selled_date.value = new Date();
    const date = new Date(selled_date.value);
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
    for (let x in ReportsData.reportDatas) {
      reportData.value = {
        amount: ReportsData.reportDatas[x].cost,
        currency: "ETB",
        email: payemail.value,
        first_name: name.value,
        last_name: fname.value,
        order_id: ReportsData.reportDatas[x].orderId,
        reporter_email: localStorage.getItem("reporterEmail"),
        product_name: ReportsData.reportDatas[x].product,
        quantity: ReportsData.reportDatas[x].quantity,
        report_owner: reportOwner.value,
        seller_category: localStorage.getItem("productSeller"),
        report_status: "sell",
        transaction: "cash in",
        transaction_in_birr: ReportsData.reportDatas[x].cost,
        day: dayName.value,
        monthName: monthName.value,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        millisecond: date.getMilliseconds(),
      };
      reportDatas.value.push(reportData.value);
    }
    const postData = reportDatas.value;
    console.log("Before Data Posted");
    console.log(postData);
    console.log("After Data Posted");
    const url = await axios.post("http://localhost:5000/api/pay", { postData });
    window.location.href = url.data.url;
    console.log("dagmawuy");
    console.log(url.data.url);
    console.log("Amare");
  } catch (err) {
    console.log(err);
  }
};

const seller = async (kebele, role) => {
  try {
    const seller = await axios.get(
      `http://localhost:5000/users/sellReport/${kebele}/${role}`
    );
    seller_email.value = seller.data.email;
  } catch (err) {}
};
</script>
