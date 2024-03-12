<template>
  <div class="flex w-full h-full bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="w-full mx-5">
      <div class="flex justify-evenly items-center mt-6 mb-2 gap-5 w-[95%]">
        <div class="w-[50%] flex gap-0">
          <form action="">
            <input
              type="search"
              name="search"
              v-model="searchValue"
              id="searchProduct"
              placeholder=" Search"
              class="w-[80%] p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
            />
          </form>
          <button
            @click="searchOrderRestriction(searchValue)"
            class="text-gray-700 bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      <div class="overflow-x-auto text-justify flex justify-center mt-3 mb-6">
        <div v-if="isData == false">
          <div colspan="11" class="col-span-full">
            <div class="text-gray-800 dark:text-white block py-11 px-11">
              <P
                class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                >No Product restricted.</P
              >
              <p
                class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
              >
                No thing to show. once mahiberat admin restrict the products restricted
                products will be displayed.
              </p>
            </div>
          </div>
        </div>
        <table v-if="isData == true" class="table-auto w-full text-gray-700">
          <thead class="bg-slate-400">
            <tr class="">
              <th class="py-2 pl-2">Product ID</th>
              <th class="py-2 pl-2">Allowed Quantity</th>
              <th class="py-2 pl-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="restriction in filteredOrderRestriction"
              :key="restriction.restriction_id"
              class="hover:bg-slate-200"
            >
              <td v-if="restriction.kebele == kebele" class="pl-2">
                {{ restriction.product_Id }}
              </td>
              <td v-if="restriction.kebele == kebele" class="pl-2">
                {{ restriction.allowed_quantity }}
              </td>
              <td v-if="restriction.kebele == kebele" class="pl-2">
                {{ restriction.expire_date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
import Swal from "sweetalert2";

const router = useRouter();

const datas = ref([]);

const filteredOrderRestriction = ref([]);

const kebele = localStorage.getItem("kebele");

const isData = ref(false);

const getRestrictions = async () => {
  try {
    const response = await axios.get("http://localhost:5000/orderRestriction");
    datas.value = response.data;
    filteredOrderRestriction.value = datas.value;
    for (let x in filteredOrderRestriction.value) {
      if (filteredOrderRestriction.value[x].kebele == kebele) {
        isData.value = true;
      }
    }
  } catch (err) {}
};

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
    await getRestrictions();
  }
});

const searchOrderRestriction = async (searchResult) => {
  try {
    filteredOrderRestriction.value = datas.value.filter(
      (restriction) => restriction.product_Id == searchResult
    );
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
.bg {
  background-color: #d3f5ce;
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
</style>
