<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full mr-24 ml-20 my-4 flex justify-center">
    <div class="flex gap-1">
      <div class="w-full flex justify-center gap-32">
        <!-- pie chart  -->
        <div class="h-60 py-6">
          <canvas ref="pieChartRef" style="width: 1400px; height: 1400px"></canvas>
        </div>
        <div class="h-60 py-6">
          <canvas ref="pieChartRef2" style="width: 1400px; height: 1400px"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const activeUsers = ref(0);
const inActiveUsers = ref(0);
var Users = ref("");
const employerCounter = ref(0);
const farmerCounter = ref(0);
const customerCounter = ref(0);

// pie chart
const pieChartRef = ref(null);
const pieChartRef2 = ref(null);

onMounted(async () => {
  await getTotalMembers();
  const data = {
    labels: ["Active members", "Inactive members"],
    datasets: [
      {
        label: "Customer",
        data: [activeUsers.value, inActiveUsers.value],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverOffset: 4,
      },
    ],
  };

  const data2 = {
    labels: ["Employers", "Farmers", "Customers"],
    datasets: [
      {
        label: "Customer",
        data: [employerCounter.value, farmerCounter.value, customerCounter.value],
        backgroundColor: ["#FF6384", "#36A2EB", "green"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const chart = new Chart(pieChartRef.value, {
    type: "pie",
    data: data,
    options: options,
  });

  const chart2 = new Chart(pieChartRef2.value, {
    type: "pie",
    data: data2,
    options: options,
  });
});
// pie chart end

const getTotalMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");

    Users.value = users.data;
    for (let x in Users.value) {
      if (Users.value[x].user_state == 1) {
        activeUsers.value = activeUsers.value + 1;
      }
      if (Users.value[x].user_state == 0) {
        inActiveUsers.value = inActiveUsers.value + 1;
      }
      if (Users.value[x].user_role == "store" || Users.value[x].user_role == "manager") {
        employerCounter.value = employerCounter.value + 1;
      }
      if (Users.value[x].user_role == "user") {
        farmerCounter.value = farmerCounter.value + 1;
      }
      if (Users.value[x].user_role == "customer") {
        customerCounter.value = customerCounter.value + 1;
      }
    }
  } catch (err) {}
};
</script>

<style>
.bg {
  background-color: #d3f5ce;
}
</style>
