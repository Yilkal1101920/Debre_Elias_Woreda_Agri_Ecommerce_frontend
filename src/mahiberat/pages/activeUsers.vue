<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1">
      <AdminPanel />
      <div class="w-full">
        <div class="flex items-center mt-6 mb-2 gap-2 w-full">
          <div class="flex gap-1 items-center ml-8 py-4">
            <router-link to="/mahiberat/dashboard">
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
            <p class="text-gray-700 dark:text-white pr-6">Back to Dashboard</p>
          </div>
          <p class="font-mono font-bold text-2xl text-gray-700 dark:text-white">
            Total Active Members
          </p>
          <div class="w-[30%] flex gap-0">
            <form action="">
              <input
                type="search"
                v-model="searchValue"
                name="search"
                id="searchProduct"
                placeholder=" Search member..."
                class="shadow-sm p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
              />
            </form>
            <button
              @click="searchUser(searchValue)"
              class="shadow-sm text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
            >
              Search
            </button>
          </div>
          <router-link to="/mahiberat/totalMembers">
            <button
              class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
              @click="productAdd"
            >
              Total Member
            </button>
          </router-link>
        </div>
        <div class="p-6 overflow-x-auto text-justify flex justify-center">
          <div v-if="isData == false">
            <div colspan="11" class="col-span-full">
              <div class="text-gray-800 dark:text-white block py-11 px-11">
                <P
                  class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                  >No Active Members.</P
                >
                <p
                  class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
                >
                  No thing to show. once farmers create account active users will be
                  displayed.
                </p>
              </div>
            </div>
          </div>
          <table v-if="isData == true" class="table-auto w-full text-gray-700">
            <thead class="bg-slate-400">
              <tr>
                <th class="py-2 pl-2">Name</th>
                <th class="py-2 pl-2">Father Name</th>
                <th class="py-2 pl-2">Phone</th>
                <th class="py-2 pl-2">Email</th>
                <th class="py-2 pl-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in filteredActiveUsersData" :key="user.email">
                <td
                  class="pl-2"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.password != ''
                  "
                >
                  {{ user.fName }}
                </td>
                <td
                  class="pl-2"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.password != ''
                  "
                >
                  {{ user.faName }}
                </td>
                <td
                  class="pl-2"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.password != ''
                  "
                >
                  {{ user.phone }}
                </td>
                <td
                  class="pl-2"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.password != ''
                  "
                >
                  {{ user.email }}
                </td>
                <button
                  class="pl-2 bg-red-300 hover:bg-red-700"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.user_state == 1 &&
                    user.password != ''
                  "
                  @click.prevent="deActivateAccount(user.email)"
                >
                  Deactivate
                </button>
                <button
                  class="pl-2 pr-2 bg-green-400 hover:bg-green-700"
                  v-if="
                    user.kebele == kebele &&
                    user.user_role == 'user' &&
                    user.user_state == 0 &&
                    user.password != ''
                  "
                  @click.prevent="activateAccount(user.email)"
                >
                  Activate
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import AdminPanel from "../components/AdminPanel.vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const totalActiveUsers = ref([]);
const filteredActiveUsersData = ref("");
const router = useRouter();
const kebele = localStorage.getItem("kebele");
const searchValue = ref("");
var isData = ref(false);

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    totalActiveUsers.value = users.data;
    filteredActiveUsersData.value = totalActiveUsers.value;
    for (let x in filteredActiveUsersData.value) {
      if (
        filteredActiveUsersData.value[x].kebele == kebele &&
        filteredActiveUsersData.value[x].user_role == "user" &&
        filteredActiveUsersData.value[x].password != ""
      ) {
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
  }
  getUsers();
});

const deActivateAccount = async (email) => {
  Swal.fire({
    icon: "question",
    title: "Are you sure to deactivate this account?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deActivateMahiberatUserAccount(email);
      Swal.fire({ icon: "success", title: "Deactivated Successfully!" });
    }
  });
};

const deActivateMahiberatUserAccount = async (email) => {
  try {
    await axios.put(`http://localhost:5000/users/email/${email}`, {
      user_state: 0,
    });
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};

const activateAccount = async (email) => {
  try {
    await axios.put(`http://localhost:5000/users/email/${email}`, {
      user_state: 1,
    });
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};
const searchUser = async (searchResult) => {
  try {
    filteredActiveUsersData.value = totalActiveUsers.value.filter(
      (member) =>
        member.fName == searchResult ||
        member.faName == searchResult ||
        member.phone == searchResult ||
        member.email == searchResult ||
        member.username == searchResult ||
        member.subKebele == searchResult ||
        member.village == searchResult ||
        member.sex == searchResult
    );
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
