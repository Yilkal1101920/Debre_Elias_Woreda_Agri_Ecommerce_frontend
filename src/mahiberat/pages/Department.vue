<template>
  <div class="bg-green-50 w-full h-full">
<div class="flex gap-1 w-full">
  <AdminPanel/>
  <div>
    <div class="flex text-gray-800 justify-evenly items-center mt-6 mb-2 gap-5 w-full">
      <p class="font-mono font-bold text-lg text-gray-700">Total Employee</p>
      <div class="w-[50%]">
        <form action="">
          <div class="flex gap-0">
            <input
              type="search"
              v-model="productName"
              name="search"
              id="searchProduct"
              placeholder=" Search Employee..."
              class="w-[80%] shadow-sm p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
            />
            <input
              type="submit"
              value="Search"
              @click="searchProductByName"
              class="shadow-sm text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
      <router-link to="/mahiberat/addNewMember">
      <button
        class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
        @click="productAdd"
      >
        Add Employee
      </button>
    </router-link>
    </div>
    <div class="overflow-x-auto text-justify flex justify-center mt-6 px-6">
      <table class="tableClass table-auto w-full">
        <thead class="text-gray-700 bg-slate-400">
          <tr class="">
            <th class="py-2 pl-2">Employee ID</th>
            <th class="py-2 pl-2">First Name</th>
            <th class="py-2 pl-2">Last Name</th>
            <th class="py-2 pl-2">Phone Number</th>
            <th class="py-2 pl-2">Email</th>
            <th class="py-2 pl-2">Role</th>
            <th class="py-2 pl-2">Stream</th>
            <th class="py-2 pl-2">Qualification</th>
            <th class="py-2 pl-2">Nationality</th>
            <th class="py-2 pl-2">Region</th>
            <th class="py-2 pl-2">Woreda</th>
            <th class="py-2 pl-2">Kebele</th>
            <th class="py-2 pl-2">Photo</th>
            <th class="py-2 pl-2">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr
            class="hover:bg-slate-200"
            v-for="user in employees"
            :key="user.email"
          >
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.username }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.fName }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.faName }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.phone }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.email }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.user_role }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.Stream }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.Qualification }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.Nationality }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.Region }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.Woreda }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.kebele }}</td>
            <td class="pl-2" v-if="user.user_role == 'manager'">{{ user.photo }}</td>
            <td>
              <div class="flex">
                <a
                  class="button bg-red-600 border rounded-lg px-2 cursor-pointer hover:text-white"
                  @click="deleteEmployee(user.username)"
                >
                  Delete</a
                >
                <a
                  class="button bg-blue-600 ml-2 border rounded-lg px-2 cursor-pointer hover:text-white"
                  @click="editEmployeeById(user.username)"
                >
                  Edit</a
                >
                <!-- <a
                  class="button is-danger is-small bg-green-600 ml-2 border rounded"
                  @click.prevent="getProductById(user.username)"
                >
                  Detail</a
                > -->
              </div>
            </td>
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
import { useRouter } from "vue-router";
import AdminPanel from '../components/AdminPanel.vue'

const users = ref([]);
const employees = ref([]);

onMounted(() => {
  // userResponse();
  employeeResponse();
});

// const userResponse = async () => {
//   const userData = await axios.get("http://localhost:5000/users");
//   users.value = userData.data;
//   console.log(users.value);
// };
const employeeResponse = async () => {
  const employeeData = await axios.get("http://localhost:5000/employee");
  employees.value = employeeData.data;
  console.log(employees.value);
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
