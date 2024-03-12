<template>
  <div class="w-full h-full bg-green-50 dark:bg-slate-800">
    <div class="text-black dark:text-white px-14 py-8 w-full">
      <div class="block border-b-8 items-center justify-center">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 userProfile"></div>
        <div class="">
          <div v-for="item in getUserEmail" :key="item.email">
            <div
              class="border border-gray-300 p-8"
              v-if="
                item.email == customer_email ||
                item.email == manager_email ||
                item.email == store_email ||
                item.email == woreda_admin_email
              "
            >
              <div class="flex gap-11 items-center">
                <img
                  :src="item.photo"
                  alt="Your profile"
                  class="h-44 w-44 rounded-full p-2"
                />
                <p class="text-gray-700 dark:text-white text-3xl font-bold font-mono">
                  {{ item.user_role }}
                </p>
              </div>
              <div>
                <form>
                  <div class="form-group mb-1 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="form-group mb-1">
                      <label
                        for="fname"
                        class="form-label inline-block mb-2 text-gray-700 dark:text-white"
                        >First Name</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="fname"
                        placeholder="First Name"
                        v-model="item.fName"
                      />
                    </div>
                    <div class="form-group mb-1">
                      <label
                        for="lname"
                        class="dark:text-white form-label inline-block mb-2 text-gray-700"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="lname"
                        placeholder="Last Name"
                        v-model="item.faName"
                      />
                    </div>
                    <div class="form-group mb-1">
                      <label
                        for="phone"
                        class="dark:text-white form-label inline-block mb-2 text-gray-700"
                        >Phone number</label
                      >
                      <input
                        type="phone"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="phone"
                        placeholder="Phone"
                        v-model="item.phone"
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="dark:text-white form-label inline-block mb-2 text-gray-700"
                        >Your Email</label
                      >
                      <input
                        type="email"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter email"
                        v-model="item.email"
                      />
                    </div>
                    <div class="form-group mb-1">
                      <label
                        class="dark:text-white form-label inline-block mb-2 text-gray-700"
                        >Kebele</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="item.kebele"
                        placeholder="sub kebele"
                      />
                    </div>
                    <div class="form-group mb-1">
                      <label
                        class="dark:text-white form-label inline-block mb-2 text-gray-700"
                        >Sub Kebele</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="item.subKebele"
                        placeholder="sub kebele"
                      />
                    </div>
                    <div class="form-group mb-1">
                      <label
                        class="dark:text-white form-label inline-block mb-2 text-gray-700"
                        >Your Village</label
                      >
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="item.village"
                        placeholder="village"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="hover:scale-x-110 py-2 font-mono font-bold text-lg px-8 my-2 bg-green-300 text-white hover:text-white rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    @click.prevent="updateUserProfilebyEmail(item.email)"
                  >
                    Update now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-3 border border-gray-300 p-8">
          <p
            class="text-lg font-mono font-bold text-center text-gray-700 dark:text-white"
          >
            Your login account
          </p>
          <userLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/state/store";
import userLogin from "./AdminProfilelogin.vue";

const UseCount = useCounterStore();

const router = useRouter();

const getUserEmail = ref([]);

const subkebelie = ref("");
const villagie = ref("");
const name = ref("");
const lastName = ref("");
const userEmail = ref("");
const phone = ref("");

const user_email = localStorage.getItem("user_email");
const customer_email = localStorage.getItem("customer_email");
const manager_email = localStorage.getItem("manager_email");
const store_email = localStorage.getItem("store_email");
const woreda_admin_email = localStorage.getItem("woreda_admin_email");

onMounted(async () => {
  await getUserByEmail();
});

const getUserByEmail = async () => {
  // for the purpose of updating amount

  try {
    const getUser = await axios.get(`http://localhost:5000/users/`);
    getUserEmail.value = getUser.data;
  } catch (err) {}
};
const updateUserProfilebyEmail = async (email) => {
  try {
    axios.put(`http://localhost:5000/users/profile/${email}`, {
      subKebele: subkebelie.value,
      village: villagie.value,
      fName: name.value,
      faName: lastName.value,
      email: userEmail.value,
      phone: phone.value,
    });
    router.replace("/users/profile/");
  } catch (err) {}
};
</script>
<style scoped>
@media screen and(max-width:600px) {
  .userProfile {
    display: block;
  }
}
@media screen and(min-width:640px) {
  .userProfile {
    display: flex;
  }
}
</style>
