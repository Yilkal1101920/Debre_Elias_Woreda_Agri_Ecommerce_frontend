<template>
  <div>
    <div class="bg-green-50 flex w-full dark:bg-gray-800 text-gray-700 dark:text-white">
      <AdminPanel />
      <div class="flex flex-col">
        <Dash />
        <reportAnalysis
          class="flex justify-center border border-gray-300 p-4 ml-5 mr-2"
        />
        <userReportAnalysis
          class="flex justify-center pb-8 border border-gray-300 p-4 mx-5 mb-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Dash from "../components/Dash.vue";
import reportAnalysis from "./reportChart.vue";
import userReportAnalysis from "./userReportInChart.vue";
import Swal from "sweetalert2";

const router = useRouter();

onMounted(() => {
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
  }
});
</script>

<style scoped>
.table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: black;
  color: white;
}
</style>
