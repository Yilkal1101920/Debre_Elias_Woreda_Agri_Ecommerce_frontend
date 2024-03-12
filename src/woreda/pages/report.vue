<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full flex flex-col justify-center">
    <div class="flex justify-between items-center">
      <div class="flex gap-1 items-center pl-9 py-3">
        <router-link to="/woreda/dashboard">
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
      <div
        class="flex flex-row gap-0 border-2 justify-end mt-4 h-11 w-[20%] shadow-md mr-10"
      >
        <select v-model="selectedMahiberat" class="w-full" @change="selectReport">
          <option value="">Select Kebele</option>
          <option v-for="mahiberat in mahiberats" :value="mahiberat.kebele">
            {{ mahiberat.kebele }}
          </option>
        </select>
        <select v-model="selectedYear" class="w-full border-l-2" @change="selectReport">
          <option value="">Report Year</option>
          <option v-for="year in years" :value="year.year">
            {{ year.year }}
          </option>
        </select>
      </div>
    </div>
    <div id="pdfConvertor" class="">
      <div class="flex justify-center">
        <h1 class="text-2xl text-gray-800 dark:text-white font-mono font-bold">
          {{ selectedYear }} G.C {{ selectedMahiberat }} Kebele Fertilizer and Selected
          Seed Report
        </h1>
      </div>
      <div class="overflow-x-auto text-justify flex justify-center mt-2 px-4 mb-16">
        <table class="tableClass table-auto w-full">
          <thead class="text-white bg-gray-500 border-b-2 font-bold">
            <tr class="">
              <th class="py-2 pl-2">
                <p v-if="languageStore.language == 'Am'">የእቃው አይነት</p>
                <p v-if="languageStore.language == 'En'">product Name</p>
              </th>
              <th class="py-2 pl-2">
                <p v-if="languageStore.language == 'Am'">የተሸጠ-በብር</p>
                <p v-if="languageStore.language == 'En'">sold in Birr</p>
              </th>
              <th class="py-2 pl-2">
                <p v-if="languageStore.language == 'Am'">ወጭ-በብር</p>
                <p v-if="languageStore.language == 'En'">bought in Birr</p>
              </th>
              <th class="py-2 pl-2">
                <p v-if="languageStore.language == 'Am'">የተገዛ ብዛት</p>
                <p v-if="languageStore.language == 'En'">bought quantity</p>
              </th>
              <th class="py-2 pl-2">
                <p v-if="languageStore.language == 'Am'">የተሸጠ ብዛት</p>
                <p v-if="languageStore.language == 'En'">Sold quantity</p>
              </th>
              <th class="py-2 pl-2">
                <p v-if="languageStore.language == 'Am'">መጋዘን ያል ብዛት</p>
                <p v-if="languageStore.language == 'En'">Remain quantity in stock</p>
              </th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr class="hover:bg-slate-200">
              <td class="pl-12">DAP</td>
              <td class="pl-2">{{ dapRevenue }}</td>
              <td class="pl-2">{{ dapCost }}</td>
              <td class="pl-2">{{ buyedDapQuantity }}</td>
              <td class="pl-2">{{ soledDapQuantity }}</td>
              <td class="pl-2">{{ buyedDapQuantity - soledDapQuantity }}</td>
            </tr>
            <tr class="hover:bg-slate-200">
              <td class="pl-12">UREA</td>
              <td class="pl-2">{{ ureaRevenue }}</td>
              <td class="pl-2">{{ ureaCost }}</td>
              <td class="pl-2">{{ buyedUreaQuantity }}</td>
              <td class="pl-2">{{ soledUreaQuantity }}</td>
              <td class="pl-2">{{ buyedUreaQuantity - soledUreaQuantity }}</td>
            </tr>
            <tr class="hover:bg-slate-200">
              <td class="pl-12">Selected Maize Seed</td>
              <td class="pl-2">{{ selectedMaizeSeedRevenue }}</td>
              <td class="pl-2">{{ selectedMaizeSeedCost }}</td>
              <td class="pl-2">{{ buyedSelectedMaizeSeedQuantity }}</td>
              <td class="pl-2">{{ soledSelectedMaizeSeedQuantity }}</td>
              <td class="pl-2">
                {{ buyedSelectedMaizeSeedQuantity - soledSelectedMaizeSeedQuantity }}
              </td>
            </tr>
            <tr class="hover:bg-slate-200">
              <td class="pl-12">Selected Wheate Seed</td>
              <td class="pl-2">{{ selectedWheateSeedRevenue }}</td>
              <td class="pl-2">{{ selectedWheateSeedCost }}</td>
              <td class="pl-2">{{ buyedSelectedWheateSeedQuantity }}</td>
              <td class="pl-2">{{ soledSelectedWheateSeedQuantity }}</td>
              <td class="pl-2">
                {{ buyedSelectedWheateSeedQuantity - soledSelectedWheateSeedQuantity }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-center py-6">
      <button
        class="bg-green-300 hover:bg-green-700 py-2 rounded-lg px-8 text-lg"
        @click.prevent="makePdf"
      >
        download report
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useLanguageStore } from "../../state/languageStore";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Swal from "sweetalert2";
const languageStore = useLanguageStore();
const mahiberats = ref("");
const years = ref("");
const selectedMahiberat = ref("Yemezegn");
const selectedYear = ref("2023");
const reportInfo = ref("");
const dapCost = ref(0);
const dapRevenue = ref(0);
const buyedDapQuantity = ref(0);
const soledDapQuantity = ref(0);

const ureaCost = ref(0);
const ureaRevenue = ref(0);
const buyedUreaQuantity = ref(0);
const soledUreaQuantity = ref(0);

const selectedMaizeSeedCost = ref(0);
const selectedMaizeSeedRevenue = ref(0);
const buyedSelectedMaizeSeedQuantity = ref(0);
const soledSelectedMaizeSeedQuantity = ref(0);

const selectedWheateSeedCost = ref(0);
const selectedWheateSeedRevenue = ref(0);
const buyedSelectedWheateSeedQuantity = ref(0);
const soledSelectedWheateSeedQuantity = ref(0);

onMounted(async () => {
  if (
    localStorage.getItem("woreda_admin_email") == undefined ||
    localStorage.getItem("woreda_admin_email") == null ||
    localStorage.getItem("role") != "woreda_admin"
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "please login first!",
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    router.replace("/login");
  } else {
    await getMahiberats();
    await getYears();
    await getTotalReport();
  }
});

const getMahiberats = async () => {
  try {
    const response = await axios.get("http://localhost:5000/kebele");
    mahiberats.value = response.data;
  } catch (err) {
    console.log(err);
  }
};

const getTotalReport = async () => {
  try {
    const reportData = await axios.get("http://localhost:5000/report");
    reportInfo.value = reportData.data;
    for (let x in reportInfo.value) {
      if (reportInfo.value[x].year == selectedYear.value) {
        if (selectedMahiberat.value == reportInfo.value[x].report_owner) {
          if (reportInfo.value[x].product_name == "DAP") {
            if (reportInfo.value[x].transaction == "cash out") {
              dapCost.value =
                dapCost.value +
                reportInfo.value[x].quantity * reportInfo.value[x].transaction_in_birr;
              buyedDapQuantity.value =
                buyedDapQuantity.value + reportInfo.value[x].quantity;
            }
            if (reportInfo.value[x].transaction == "cash in") {
              dapRevenue.value =
                dapRevenue.value +
                reportInfo.value[x].quantity * reportInfo.value[x].transaction_in_birr;
              soledDapQuantity.value =
                soledDapQuantity.value + reportInfo.value[x].quantity;
            }
          }
          if (reportInfo.value[x].product_name == "UREA") {
            if (reportInfo.value[x].transaction == "cash out") {
              ureaCost.value =
                ureaCost.value +
                reportInfo.value[x].quantity * reportInfo.value[x].transaction_in_birr;
              buyedUreaQuantity.value =
                buyedUreaQuantity.value + reportInfo.value[x].quantity;
            }
            if (reportInfo.value[x].transaction == "cash in") {
              ureaRevenue.value =
                ureaRevenue.value +
                reportInfo.value[x].quantity * reportInfo.value[x].transaction_in_birr;
              soledUreaQuantity.value =
                soledUreaQuantity.value + reportInfo.value[x].quantity;
            }
          }
          if (reportInfo.value[x].product_name == "SelectedMaizeSeed") {
            if (reportInfo.value[x].transaction == "cash out") {
              selectedMaizeSeedCost.value =
                selectedMaizeSeedCost.value +
                reportInfo.value[x].quantity * reportInfo.value[x].transaction_in_birr;
              buyedSelectedMaizeSeedQuantity.value =
                buyedSelectedMaizeSeedQuantity.value + reportInfo.value[x].quantity;
            }
            if (reportInfo.value[x].transaction == "cash in") {
              selectedMaizeSeedRevenue.value =
                selectedMaizeSeedRevenue.value +
                reportInfo.value[x].quantity * reportInfo.value[x].transaction_in_birr;
              soledSelectedMaizeSeedQuantity.value =
                soledSelectedMaizeSeedQuantity.value + reportInfo.value[x].quantity;
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
const selectReport = async () => {
  try {
    soledDapQuantity.value = 0;
    dapRevenue.value = 0;
    buyedDapQuantity.value = 0;
    dapCost.value = 0;

    soledUreaQuantity.value = 0;
    ureaRevenue.value = 0;
    buyedUreaQuantity.value = 0;
    ureaCost.value = 0;
    await getTotalReport();
  } catch (err) {
    console.log(err);
  }
};
const getYears = async () => {
  try {
    const response = await axios.get("http://localhost:5000/year");
    years.value = response.data;
  } catch (err) {
    console.log(err);
  }
};

const makePdf = () => {
  window.html2canvas = html2canvas;
  var doc = new jsPDF("p", "pt", "a2");
  doc.html(document.querySelector("#pdfConvertor"), {
    callback: function (pdf) {
      pdf.save("mypdf.pdf");
    },
  });
};
</script>
