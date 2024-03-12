<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1">
      <div class="w-full">
        <!-- pie chart  -->
        <div class="h-60 py-6 flex justify-center">
          <canvas ref="pieChartRef" style="width: 1400px; height: 1400px"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

var activeUsers = ref(0);
var inActiveUsers = ref(0);
const kebele = localStorage.getItem("kebele");
var Users = ref("");

// pie chart
const pieChartRef = ref(null);

onMounted(async () => {
  await getTotalMahiberatMembers();
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
});
// pie chart end

const getTotalMahiberatMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");

    Users.value = users.data;
    for (let x in Users.value) {
      if (
        Users.value[x].kebele == kebele &&
        Users.value[x].user_state == 1 &&
        Users.value[x].user_role == "user"
      ) {
        activeUsers.value = activeUsers.value + 1;
      }
      if (
        Users.value[x].kebele == kebele &&
        Users.value[x].user_state == 0 &&
        Users.value[x].user_role == "user"
      ) {
        inActiveUsers.value = inActiveUsers.value + 1;
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
