<template>
  <div class="w-60 bg-blue-100 border-1 py-0 border-blue-300 top-0 hidden lg:block">
    <div v-for="user in Users" :key="user.email" class="nav text-blue-600">
      <ul>
        <li
          class="cursor-pointer text-lg text-left pl-8 pt-2 font-bold font-mono hover:text-green-600"
          v-if="
            (user.user_role == 'manager' &&
              user.kebele == kebele_address &&
              user.user_state == 1) ||
            (user.user_role == 'user' &&
              user.user_state == 1 &&
              user.email != user_email) ||
            (user.user_role == 'customer' &&
              user.user_state == 1 &&
              user.email != user_email)
          "
          @click.prevent="chatsWith(user.email)"
        >
          {{ user.fName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useChatStore } from "../state/chatStore";
const chatChatstore = useChatStore();

const kebele_address = localStorage.getItem("kebele");
var user_email = localStorage.getItem("user_email");

const Users = ref([]);

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    Users.value = users.data;
  } catch (err) {}
};
onMounted(async () => {
  if (user_email == null || user_email == undefined) {
    user_email = localStorage.getItem("customer_email");
  }
  getUsers();
});

const chatsWith = async (email) => {
  chatChatstore.chatEmail = email;
  localStorage.setItem("chat_with_email", email);
};
</script>
