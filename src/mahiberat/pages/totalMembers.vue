<template>
  <div class="flex bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1 w-full">
      <AdminPanel />
      <div class="w-full px-6">
        <div class="flex items-center mt-6 mb-2 gap-5 w-full">
          <router-link to="/mahiberat/dashboard">
            <span class="flex items-center gap-1 pr-4"
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
                ></path>
              </svg>
              <p>Back to Dashboard</p>
            </span>
          </router-link>
          <p class="font-mono font-bold text-2xl text-gray-700 dark:text-white">
            Total Mahiberat Members
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
              @click="searchMember(searchValue)"
              class="shadow-sm text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
            >
              Search
            </button>
          </div>
          <router-link to="/mahiberat/addNewMember">
            <button
              class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
              @click="productAdd"
            >
              Add Member
            </button>
          </router-link>
        </div>
        <div class="overflow-x-auto flex mt-6">
          <div v-if="isData == false">
            <div colspan="11" class="col-span-full">
              <div class="text-gray-800 dark:text-white block py-11 px-11">
                <P
                  class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                  >No Members Registered.</P
                >
                <p
                  class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
                >
                  No thing to show. once Kebele mahiberat Admin register members it will
                  be displayed.
                </p>
              </div>
            </div>
          </div>
          <table
            v-if="isData == true"
            class="table-auto text-justify text-slate-700 dark:text-white w-full"
          >
            <thead class="bg-slate-400 text-white">
              <tr>
                <th class="pl-2 py-2">Name</th>
                <th class="pl-2 py-2">Father Name</th>
                <th class="pl-2 py-2">ID</th>
                <th class="pl-2 py-2">Phone</th>
                <th class="pl-2 py-2">Kebele</th>
                <th class="pl-2 py-2">Sub Kebele</th>
                <th class="pl-2 py-2">Village</th>
                <th class="pl-2 py-2">Job</th>
                <th class="pl-2 py-2">Sex</th>
                <th class="pl-2 py-2">Age</th>
                <th class="pl-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-700 dark:text-white">
              <tr
                v-for="member in filteredMemersData"
                :key="member.username"
                class="hover:bg-slate-200"
              >
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.fName }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.faName }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.username }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.phone }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.kebele }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.subKebele }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.village }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.job }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.sex }}
                </td>
                <td
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  class="pl-2"
                >
                  {{ member.age }}
                </td>
                <button
                  class="pl-2 hover:bg-red-700 bg-red-300"
                  v-if="member.kebele == kebele && member.user_role == 'user'"
                  @click.prevent="deleteMember(member.username)"
                >
                  delete
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

const totalMembers = ref([]);
const router = useRouter();
const filteredMemersData = ref("");
const searchValue = ref("");
var isData = ref(false);

const kebele = localStorage.getItem("kebele");

const getTotalMahiberatMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    totalMembers.value = users.data;
    filteredMemersData.value = totalMembers.value;
    for (let x in filteredMemersData.value) {
      if (
        filteredMemersData.value[x].kebele == kebele &&
        filteredMemersData.value[x].user_role == "user"
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
  await getTotalMahiberatMembers();
});
const deleteMember = async (m_id) => {
  Swal.fire({
    icon: "question",
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteMahiberatMember(m_id);
      Swal.fire({ icon: "success", title: "Deleted Successfully!" });
    }
  });
};

const deleteMahiberatMember = async (m_id) => {
  try {
    await axios.delete(`http://localhost:5000/mahiberat/mahiberatMembers/${m_id}`);
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};
const searchMember = async (searchResult) => {
  try {
    filteredMemersData.value = totalMembers.value.filter(
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

<style scoped>
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
