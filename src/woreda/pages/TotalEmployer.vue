<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="mx-8 py-4 flex flex-col">
      <div class="flex justify-between items-center">
        <div class="flex gap-1 items-center justify-center">
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
        <div>
          <p class="text-2xl font-bold font-mono">Total employeers</p>
        </div>
        <button
          class="mb-3 px-2 rounded-lg font-mono font-bold text-lg bg-green-300 hover:bg-green-700 items-end py-2"
        >
          <router-link to="/woreda/addEmployer"> Add Employee </router-link>
        </button>
      </div>
      <div class="pb-6 w-full overflow-x-auto">
        <table class="tableClass table-auto">
          <thead class="text-gray-700 bg-slate-400">
            <tr>
              <th class="py-2">Name</th>
              <th class="py-2">Father Name</th>
              <th class="py-2">ID</th>
              <th class="py-2">Phone</th>
              <th class="py-2">Kebele</th>
              <th class="py-2">Sub Kebele</th>
              <th class="py-2">Village</th>
              <th class="py-2">Job</th>
              <th class="py-2">Sex</th>
              <th class="py-2">Age</th>
              <th class="">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 dark:text-white">
            <tr
              v-for="user in newUsers"
              :key="user.mahiberat_id"
              class="hover:bg-slate-200"
            >
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.fName }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.faName }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.username }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.phone }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.kebele }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.subKebele }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.village }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.job }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.sex }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class=" "
              >
                {{ user.age }}
              </td>
              <td
                v-if="user.user_role == 'manager' || user.user_role == 'store'"
                class="one hs-text-centered"
              >
                <div class="flex">
                  <a
                    class="button is-danger is-small bg-red-300 ounded"
                    @click="deleteEmployee(user.username)"
                  >
                    <svg
                      class="cursor-pointer fill-current h-6 w-auto text-red-500 hover:text-red-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DeleteForeverOutlinedIcon"
                      tabindex="-1"
                      title="DeleteForeverOutlined"
                    >
                      <path
                        d="M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                      ></path></svg
                  ></a>
                  <a
                    class="button is-danger is-small bg-blue-300 ml-2 ounded"
                    @click="editEmployerById(user.username)"
                  >
                    <svg
                      class="cursor-pointer fill-current h-6 w-auto text-blue-500 hover:text-blue-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EditOutlinedIcon"
                      tabindex="-1"
                      title="EditOutlined"
                    >
                      <path
                        d="m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
                      ></path></svg
                  ></a>
                </div>
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
import { useEmployerStore } from "../state/employerStore";
import Swal from "sweetalert2";

var selectEmployer = useEmployerStore();
const newUsers = ref([]);
const router = useRouter();

const getTotalEmployers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/mahiberat/totalMembers");
    newUsers.value = users.data;
  } catch (err) {}
};
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
  }
  getTotalEmployers();
});

const editEmployerById = async (id) => {
  try {
    const getEmployer = await axios.get(
      `http://localhost:5000/mahiberat/totalMembers/${id}`
    );
    selectEmployer.name = getEmployer.data.fName;
    selectEmployer.fatherName = getEmployer.data.faName;
    selectEmployer.username = id;
    selectEmployer.checkUsername = id;
    selectEmployer.phone = getEmployer.data.phone;
    selectEmployer.kebele = getEmployer.data.kebele;
    selectEmployer.idPhoto = getEmployer.data.kebele_id_photo;
    selectEmployer.photo = getEmployer.data.photo;
    selectEmployer.role = getEmployer.data.user_role;
    router.push(`/woreda/totalEmployer/edit/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const deleteEmployee = async (id) => {
  Swal.fire({
    icon: "question",
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteEmployer(id);
      Swal.fire({ icon: "success", title: "Deleted Successfully!" });
    }
  });
};
const deleteEmployer = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/mahiberat/totalMembers/${id}`);
    getTotalEmployers();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
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
