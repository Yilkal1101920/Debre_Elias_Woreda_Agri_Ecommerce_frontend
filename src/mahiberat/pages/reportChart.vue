<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1">
      <!-- <AdminPanel /> -->
      <div class="w-full flex flex-col">
        <div class="flex justify-around items-center py-4">
          <h1 class="text-center text-3xl">Report Analysis</h1>
          <select name="" v-model="selectedYear" @change="selectReport">
            <option value="">Select Year</option>
            <option v-for="year in years" :value="year.year">
              {{ year.year }}
            </option>
          </select>
        </div>
        <div class="flex gap-5">
          <!-- chart  -->
          <div class="h-60 py-6 flex">
            <!-- <canvas ref="chart"></canvas> -->
            <canvas ref="chartRevenueRef"></canvas>
          </div>
          <!-- chart end  -->

          <!-- bar chart  -->
          <div class="h-60 py-6 flex">
            <canvas ref="revenueBarChart" style="width: 500px; height: 200px"></canvas>
          </div>
          <!-- bar chart end  -->
        </div>
        <div class="flex gap-5">
          <!-- chart  -->
          <div class="h-60 py-6 flex">
            <!-- <canvas ref="chart"></canvas> -->
            <canvas ref="chartCostRef"></canvas>
          </div>
          <!-- chart end  -->

          <!-- bar chart  -->
          <div class="h-60 py-6 flex">
            <canvas ref="costBarChart" style="width: 500px; height: 200px"></canvas>
          </div>
          <!-- bar chart end  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const chartCostRef = ref(null);
const chartRevenueRef = ref(null);

const kebele = localStorage.getItem("kebele");
const reportInfo = ref("");
const filteredReport = ref("");
const septemberCost = ref(0);
const octoberCost = ref(0);
const novemberCost = ref(0);
const decemberCost = ref(0);
const januaryCost = ref(0);
const februaryCost = ref(0);
const marchCost = ref(0);
const aprilCost = ref(0);
const mayCost = ref(0);
const juneCost = ref(0);
const junlyCost = ref(0);
const augustCost = ref(0);

const septemberRevenue = ref(0);
const octoberRevenue = ref(0);
const novemberRevenue = ref(0);
const decemberRevenue = ref(0);
const januaryRevenue = ref(0);
const februaryRevenue = ref(0);
const marchRevenue = ref(0);
const aprilRevenue = ref(0);
const mayRevenue = ref(0);
const juneRevenue = ref(0);
const junlyRevenue = ref(0);
const augustRevenue = ref(0);
const years = ref([]);
const selectedYear = ref("2023");

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const costBarChart = ref(null);
const revenueBarChart = ref(null);

onMounted(async () => {
  await getTotalReport();
  await getYears();
  await getChartData();
  await getRevenueData();
  await getCostData();
});

const getTotalReport = async () => {
  try {
    const reportData = await axios.get("http://localhost:5000/report");
    reportInfo.value = reportData.data;

    filteredReport.value = reportInfo.value.filter(
      (report) => report.year == selectedYear.value
    );
    for (let x in filteredReport.value) {
      if (
        filteredReport.value[x].report_owner == kebele &&
        filteredReport.value[x].transaction == "cash out"
      ) {
        if (filteredReport.value[x].monthName == "September") {
          septemberCost.value =
            septemberCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "October") {
          octoberCost.value =
            octoberCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "November") {
          novemberCost.value =
            novemberCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "December") {
          decemberCost.value =
            decemberCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "January") {
          januaryCost.value =
            januaryCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "February") {
          februaryCost.value =
            februaryCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "March") {
          marchCost.value = marchCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "April") {
          aprilCost.value = aprilCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "May") {
          mayCost.value = mayCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "June") {
          juneCost.value = juneCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "July") {
          junlyCost.value = junlyCost.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "August") {
          augustCost.value =
            augustCost.value + filteredReport.value[x].transaction_in_birr;
        }
      }
      if (
        filteredReport.value[x].report_owner == kebele &&
        filteredReport.value[x].transaction == "cash in"
      ) {
        if (filteredReport.value[x].monthName == "September") {
          septemberRevenue.value =
            septemberRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "October") {
          octoberRevenue.value =
            octoberRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "November") {
          novemberRevenue.value =
            novemberRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "December") {
          decemberRevenue.value =
            decemberRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "January") {
          januaryRevenue.value =
            januaryRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "February") {
          februaryRevenue.value =
            februaryRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "March") {
          marchRevenue.value =
            marchRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "April") {
          aprilRevenue.value =
            aprilRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "May") {
          mayRevenue.value =
            mayRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "June") {
          juneRevenue.value =
            juneRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "July") {
          junlyRevenue.value =
            junlyRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
        if (filteredReport.value[x].monthName == "August") {
          augustRevenue.value =
            augustRevenue.value + filteredReport.value[x].transaction_in_birr;
        }
      }
    }
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
const selectReport = async () => {
  try {
    septemberCost.value = 0;
    octoberCost.value = 0;
    novemberCost.value = 0;
    decemberCost.value = 0;
    januaryCost.value = 0;
    februaryCost.value = 0;
    marchCost.value = 0;
    aprilCost.value = 0;
    mayCost.value = 0;
    juneCost.value = 0;
    junlyCost.value = 0;
    augustCost.value = 0;

    septemberRevenue.value = 0;
    octoberRevenue.value = 0;
    novemberRevenue.value = 0;
    decemberRevenue.value = 0;
    januaryRevenue.value = 0;
    februaryRevenue.value = 0;
    marchRevenue.value = 0;
    aprilRevenue.value = 0;
    mayRevenue.value = 0;
    juneRevenue.value = 0;
    junlyRevenue.value = 0;
    augustRevenue.value = 0;
    await getTotalReport();
    await getChartData();
    await getRevenueData();
    await getCostData();
  } catch (err) {
    console.log(err);
  }
};

const getChartData = async () => {
  const costData = {
    labels: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Monthly Buys",
        data: [
          septemberCost.value,
          octoberCost.value,
          novemberCost.value,
          decemberCost.value,
          januaryCost.value,
          februaryCost.value,
          marchCost.value,
          aprilCost.value,
          mayCost.value,
          juneCost.value,
          junlyCost.value,
          augustCost.value,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",

        borderWidth: 1,
      },
    ],
  };
  const revenueData = {
    labels: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Monthly Sells",
        data: [
          septemberRevenue.value,
          octoberRevenue.value,
          novemberRevenue.value,
          decemberRevenue.value,
          januaryRevenue.value,
          februaryRevenue.value,
          marchRevenue.value,
          aprilRevenue.value,
          mayRevenue.value,
          juneRevenue.value,
          junlyRevenue.value,
          augustRevenue.value,
        ],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const previousChart = Chart.getChart(costBarChart.value);
  if (previousChart) {
    previousChart.destroy();
  }
  const costChart = new Chart(costBarChart.value, {
    type: "bar",
    data: costData,
    options: options,
  });
  const previousChart2 = Chart.getChart(revenueBarChart.value);
  if (previousChart2) {
    previousChart2.destroy();
  }
  const revenueChart = new Chart(revenueBarChart.value, {
    type: "bar",
    data: revenueData,
    options: options,
  });
};

const getRevenueData = async () => {
  const previousChart3 = Chart.getChart(chartRevenueRef.value);
  if (previousChart3) {
    previousChart3.destroy();
  }
  const revenueChart = new Chart(chartRevenueRef.value, {
    type: "line",
    data: {
      labels: [
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      datasets: [
        {
          label: "Monthly Sells",
          data: [
            septemberRevenue.value,
            octoberRevenue.value,
            novemberRevenue.value,
            decemberRevenue.value,
            januaryRevenue.value,
            februaryRevenue.value,
            marchRevenue.value,
            aprilRevenue.value,
            mayRevenue.value,
            juneRevenue.value,
            junlyRevenue.value,
            augustRevenue.value,
          ],
          fill: false,

          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });
};
const getCostData = async () => {
  const previousChart4 = Chart.getChart(chartCostRef.value);
  if (previousChart4) {
    previousChart4.destroy();
  }
  const costChart = new Chart(chartCostRef.value, {
    type: "line",
    data: {
      labels: [
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      datasets: [
        {
          label: "Monthly Buys",
          data: [
            septemberCost.value,
            octoberCost.value,
            novemberCost.value,
            decemberCost.value,
            januaryCost.value,
            februaryCost.value,
            marchCost.value,
            aprilCost.value,
            mayCost.value,
            juneCost.value,
            junlyCost.value,
            augustCost.value,
          ],
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
      ],
    },
    options: chartOptions,
  });
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
</style>
