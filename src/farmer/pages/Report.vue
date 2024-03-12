<template>
  <div class="flex flex-row w-full h-full bg-green-50 dark:bg-gray-800">
    <div class="w-full flex flex-row justify-center">
      <div class="h-full w-full">
        <div class="flex justify-between flex-wrap py-6 lg:mx-8">
          <div class="flex gap-5 items-center">
            <div class="flex gap-1 items-center hover:border-b-2">
              <span
                ><svg
                  class="fill-current h-6 w-6 text-gray-800 dark:text-white"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LocalPrintshopOutlinedIcon"
                  tabindex="-1"
                  title="LocalPrintshopOutlined"
                >
                  <path
                    d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"
                  ></path>
                  <circle cx="18" cy="11.5" r="1"></circle></svg
              ></span>
              <button
                class="text-gray-800 hover:text-green-800 font-mono font-bold hover:scale-110 dark:text-white py-2 rounded-lg text-lg"
                @click.prevent="makePdf"
              >
                Print
              </button>
            </div>
          </div>
          <div class="flex items-center gap-5 flex-wrap">
            <form action="">
              <div>
                <label for="reportDate">Specific Date: </label>
                <input type="date" name="" id="reportDate" v-model="reportDate" />
              </div>
            </form>
            <button
              class="bg-green-300 px-7 hover:bg-green-700 text-gray-900 hover:text-white font-bold py-2 mt-2 rounded-lg text-lg font-mono"
              @click.prevent="filterReportByDate(reportDate)"
            >
              Filter
            </button>
            <form action="">
              <select name="" id="" v-model="reportDuration">
                <option value="">Duration</option>
                <option value="Today">Today</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Quarter">Quarter</option>
                <option value="HalfYear">Half Year</option>
                <option value="Year">Year</option>
              </select>
            </form>
            <button
              class="bg-green-300 px-7 hover:bg-green-700 text-gray-900 hover:text-white font-bold py-2 mt-2 rounded-lg text-lg font-mono"
              @click.prevent="filterReport(reportDuration)"
            >
              Filter Report
            </button>
            <form action="">
              <select name="" id="" v-model="filterForReport">
                <option value="">Filter Table</option>
                <option value="Entire">Entire Table</option>
                <option value="Customer">Customer</option>
                <option value="Product">Product</option>
                <option value="Sale">Sale</option>
              </select>
            </form>
          </div>
        </div>
        <div
          ref="report"
          id="pdfConvertor"
          class="flex flex-col lg:mx-8 p-2 inset-y-0 flex-wrap"
        >
          <div class="w-full flex-wrap">
            <div>
              <p
                class="text-center text-gray-800 dark:text-white font-mono font-bold text-lg pb-6"
              >
                {{ userName }} {{ userFatherName }} Report for one day or...filtered date
                here
              </p>
            </div>
            <div class="flex justify-between items-center pb-4">
              <div class="flex gap-4 items-center">
                <div>
                  <img
                    src="../../assets/debreEliasLogo.png"
                    alt="mahiberat logo"
                    srcset=""
                    class="h-20 w-auto"
                  />
                </div>
                <div>
                  <div class="">
                    <p class="text-gray-800 dark:text-white font-mono font-bold">
                      {{ userName }} {{ userFatherName }}
                    </p>
                    <p class="text-gray-800 dark:text-white font-mono font-bold">
                      +251{{ userPhone }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-gray-800 dark:text-white font-mono font-bold">
                <p class="sub-heading">Date: {{ order_date }}</p>
                <p class="sub-heading">
                  Report: Entire table, customer or... {{ user_email }}
                </p>
              </div>
              <div
                class="text-gray-800 lg:block hidden dark:text-white font-mono font-bold"
              >
                <p class="sub-heading">Phone Number: +251{{ userPhone }}</p>
                <p class="sub-heading">Email: {{ user_email }}</p>
              </div>
            </div>

            <div v-if="isData == false">
              <div colspan="11" class="col-span-full">
                <div class="text-gray-800 dark:text-white block py-11 px-11">
                  <P
                    class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                    >No transaction untill now.</P
                  >
                  <p
                    class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
                  >
                    No thing to show. once farmers or customers performs some transaction,
                    transaction reports will be displayed.
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="isData == true"
              class="overflow-x-auto table-auto text-justify flex justify-center mt-6"
            >
              <!-- <div class="flex gap-1 items-center ml-8 py-4"></div> -->
              <table class="overflow-x-auto table-auto text-justify w-full">
                <thead
                  class="text-gray-700 dark:text-white border-b-4 text-lg font-bold pb-3"
                >
                  <th class="">Product Name</th>
                  <th class="">Price</th>
                  <th class="">Cash Flow</th>
                  <th class="">Amount</th>
                  <th class="">Transaction</th>
                  <th class="">Total Price</th>
                  <th class="">Date</th>
                  <th class="">Time</th>
                  <th class="">Action</th>
                </thead>
                <tbody class="text-gray-700">
                  <tr
                    v-for="report in filteredReport"
                    :key="report.report_id"
                    class="hover:bg-slate-200"
                  >
                    <td
                      v-i
                      v-if="report.report_owner == id"
                      f="item.kebele == kebele"
                      class=""
                    >
                      {{ report.product_name }}
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      {{ report.transaction_in_birr }}
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      {{ report.transaction }}
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      <p v-if="report.transaction == 'cash in'">
                        {{ report.quantity * 50 }}
                      </p>
                      <p v-if="report.transaction == 'cash out'">
                        {{ report.quantity * 50 }}
                      </p>
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      {{ report.report_status }}
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      {{ report.quantity * report.transaction_in_birr }}
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      {{
                        report.day +
                        ", " +
                        report.monthName +
                        " " +
                        report.date +
                        ", " +
                        report.year
                      }}
                    </td>
                    <td v-if="report.report_owner == id" class="">
                      {{ report.hour + ":" + report.minute + ":" + report.second }}
                    </td>
                    <td v-if="report.report_owner == id" class="">Detail</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-if="isData == true" class="flex justify-center py-6 gap-6 flex-wrap">
            <p class="bg-green-300 py-2 rounded-lg px-8 text-lg">
              Total Expense = {{ totalExpense }}
            </p>
            <p class="bg-green-300 py-2 rounded-lg px-8 text-lg">
              Total Revenue = {{ totalRevenue }}
            </p>
            <p class="bg-green-300 py-2 rounded-lg px-8 text-lg">
              Profit = {{ totalRevenue - totalExpense }}
            </p>
          </div>
        </div>
        <div v-if="isData == true" class="flex justify-center py-6">
          <button
            class="bg-green-300 hover:bg-green-700 py-2 rounded-lg px-8 text-lg"
            @click.prevent="makePdf"
          >
            download report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const report = ref(null);

const router = useRouter();

const id = localStorage.getItem("ID");

const reportInfo = ref("");
const filterForReport = ref("");
const reportDate = ref("");
const reportDuration = ref("");

const order_date = ref("");
const today = ref("");

const activeUsers = ref([]);
const userPhone = ref("");
const userName = ref("");
const userFatherName = ref("");

const filteredReport = ref("");

const report_duration = ref("");

const totalExpense = ref(0);
const totalRevenue = ref(0);

const user_email = localStorage.getItem("user_email");

const isData = ref(false);

const makePdf = () => {
  window.html2canvas = html2canvas;
  var doc = new jsPDF("p", "pt", "a2");
  doc.html(document.querySelector("#pdfConvertor"), {
    callback: function (pdf) {
      pdf.save("mypdf.pdf");
    },
  });
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
  await getUsers();
  await getTotalReport();
  await getTotalExpenseAndRevenue();
});

const getTotalReport = async () => {
  try {
    order_date.value = new Date();
    const date = new Date(order_date.value);
    today.value = date.getTime();
    const reportData = await axios.get("http://localhost:5000/report");
    reportInfo.value = reportData.data;
    filteredReport.value = reportInfo.value.filter(
      (report) => report.reporter_email == user_email
    );
    for (let x in filteredReport.value) {
      if (filteredReport.value[x].report_owner == id) {
        isData.value = true;
      }
    }
  } catch (err) {}
};

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    activeUsers.value = users.data;
    for (let x in activeUsers.value) {
      if (id == activeUsers.value[x].username) {
        userPhone.value = activeUsers.value[x].phone;
        userName.value = activeUsers.value[x].fName;
        userFatherName.value = activeUsers.value[x].faName;
      }
    }
  } catch (err) {}
};

const filterReport = async (selector) => {
  try {
    report_duration.value = new Date();
    const date = new Date(report_duration.value);
    if (selector == "Year") {
      filteredReport.value = reportInfo.value.filter(
        (report) => report.year == date.getFullYear()
      );
    } else if (selector == "HalfYear") {
      filteredReport.value = reportInfo.value.filter(
        (report) =>
          report.year == date.getFullYear() && date.getMonth() + 1 - report.month <= 5
      );
    } else if (selector == "Quarter") {
      filteredReport.value = reportInfo.value.filter(
        (report) =>
          report.year == date.getFullYear() && date.getMonth() + 1 - report.month <= 2
      );
    } else if (selector == "Month") {
      filteredReport.value = reportInfo.value.filter(
        (report) =>
          report.year == date.getFullYear() && report.month == date.getMonth() + 1
      );
    } else if (selector == "Week") {
      filteredReport.value = reportInfo.value.filter(
        (report) =>
          report.year == date.getFullYear() &&
          report.month == date.getMonth() + 1 &&
          date.getDate() - report.date <= 6
      );
    } else if (selector == "Today") {
      filteredReport.value = reportInfo.value.filter(
        (report) =>
          report.year == date.getFullYear() &&
          report.month == date.getMonth() + 1 &&
          report.date == date.getDate()
      );
    } else {
      filteredReport.value = reportInfo.value;
    }
  } catch (err) {}
};
const filterReportByDate = async (dateSelector) => {
  try {
    report_duration.value = new Date(dateSelector);
    const date = new Date(report_duration.value);
    filteredReport.value = reportInfo.value.filter(
      (report) =>
        report.year == date.getFullYear() &&
        report.month == date.getMonth() + 1 &&
        report.date == date.getDate()
    );
  } catch (err) {}
};
const getTotalExpenseAndRevenue = async () => {
  for (let x in filteredReport.value) {
    if (
      filteredReport.value[x].transaction == "cash out" &&
      filteredReport.value[x].report_owner == localStorage.getItem("ID")
    ) {
      totalExpense.value =
        totalExpense.value +
        filteredReport.value[x].quantity * filteredReport.value[x].transaction_in_birr;
    }
    if (
      filteredReport.value[x].transaction == "cash in" &&
      filteredReport.value[x].report_owner == localStorage.getItem("ID")
    ) {
      totalRevenue.value =
        totalRevenue.value +
        filteredReport.value[x].quantity * filteredReport.value[x].transaction_in_birr;
    }
  }
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
}

/* tr:nth-child(even) {
  background-color: #f2f2f2;
} */
</style>
