<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1">
      <div class="w-full flex flex-col">
        <div class="flex flex-col gap-5 md:flex md:flex-row">
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
        <div class="flex flex-col gap-5 md:flex md:flex-row">
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

const user_email = localStorage.getItem("user_email");

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

onMounted(async () => {
  await getTotalReport();
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
});

onMounted(async () => {
  await getTotalReport();
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
});

// chart end

// bar char
const costBarChart = ref(null);
const revenueBarChart = ref(null);

onMounted(async () => {
  await getTotalReport();
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
        backgroundColor: "rgba(255, 99, 132, 1)",
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

  const costChart = new Chart(costBarChart.value, {
    type: "bar",
    data: costData,
    options: options,
  });
  const revenueChart = new Chart(revenueBarChart.value, {
    type: "bar",
    data: revenueData,
    options: options,
  });
});

const getTotalReport = async () => {
  try {
    const reportData = await axios.get("http://localhost:5000/report");
    reportInfo.value = reportData.data;
    console.log(reportInfo.value);
    for (let x in reportInfo.value) {
      if (
        reportInfo.value[x].reporter_email == user_email &&
        reportInfo.value[x].transaction == "cash out"
      ) {
        if (reportInfo.value[x].monthName == "September") {
          septemberCost.value =
            septemberCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "October") {
          octoberCost.value = octoberCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "November") {
          novemberCost.value =
            novemberCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "December") {
          decemberCost.value =
            decemberCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "January") {
          januaryCost.value = januaryCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "February") {
          februaryCost.value =
            februaryCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "March") {
          marchCost.value = marchCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "April") {
          aprilCost.value = aprilCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "May") {
          mayCost.value = mayCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "June") {
          juneCost.value = juneCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "July") {
          junlyCost.value = junlyCost.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "August") {
          augustCost.value = augustCost.value + reportInfo.value[x].transaction_in_birr;
        }
      }
      if (
        reportInfo.value[x].report_owner == kebele &&
        reportInfo.value[x].transaction == "cash in"
      ) {
        if (reportInfo.value[x].monthName == "September") {
          septemberRevenue.value =
            septemberRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "October") {
          octoberRevenue.value =
            octoberRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "November") {
          novemberRevenue.value =
            novemberRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "December") {
          decemberRevenue.value =
            decemberRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "January") {
          januaryRevenue.value =
            januaryRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "February") {
          februaryRevenue.value =
            februaryRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "March") {
          marchRevenue.value =
            marchRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "April") {
          aprilRevenue.value =
            aprilRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "May") {
          mayRevenue.value = mayRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "June") {
          juneRevenue.value = juneRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "July") {
          junlyRevenue.value =
            junlyRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
        if (reportInfo.value[x].monthName == "August") {
          augustRevenue.value =
            augustRevenue.value + reportInfo.value[x].transaction_in_birr;
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
</style>
