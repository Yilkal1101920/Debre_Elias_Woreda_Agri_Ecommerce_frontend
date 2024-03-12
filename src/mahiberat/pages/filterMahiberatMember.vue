<template>
  <div class="flex bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="flex gap-1 w-full">
      <AdminPanel />
      <div class="w-full px-6">
        <div class="flex gap-1 items-center ml-8 py-4">
          <router-link to="/mahiberat/totalMembers">
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
          <p class="text-gray-700 dark:text-white">Back to total mahiberat members</p>
        </div>
        <div class="overflow-x-auto flex mt-6">
          <table class="table-auto text-justify text-slate-700 dark:text-white w-full">
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
                v-for="item in newUsers"
                :key="item.mahiberat_id"
                class="hover:bg-slate-200"
              >
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.first_name }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.last_name }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.mahiberat_id }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.phone }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.kebele }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.sub_kebele }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.village }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.job }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.sex }}
                </td>
                <td
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  class="pl-2"
                >
                  {{ item.age }}
                </td>
                <button
                  class="pl-2"
                  v-if="
                    item.kebele == kebele &&
                    (item.first_name == filterMahiberatMember ||
                      item.last_name == filterMahiberatMember ||
                      item.mahiberat_id == filterMahiberatMember ||
                      item.phone == filterMahiberatMember)
                  "
                  @click.prevent="deleteMember(item.mahiberat_id)"
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

const newUsers = ref([]);
const router = useRouter();

const kebele = localStorage.getItem("kebele");

const filterMahiberatMember = localStorage.getItem("mahiberat_member_name");

const getTotalMahiberatMembers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    newUsers.value = users.data;
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
  getTotalMahiberatMembers();
});
const deleteMember = async (m_id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteMahiberatMember(m_id);
      Swal.fire("Deleted Successfully!");
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
