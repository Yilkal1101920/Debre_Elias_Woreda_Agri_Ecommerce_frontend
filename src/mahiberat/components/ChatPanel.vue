<template>
  <div class="w-60 pl-5 bg-blue-100 py-5 border-1 border-blue-300 h-screen">
    <div class="flex gap-1 items-center">
      <router-link to="/mahiberat/Dashboard">
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
    <div v-for="user in Users" :key="user.email" class="nav text-blue-600">
      <ul>
        <li
          class="cursor-pointer hover:text-green-500 p-1 text-lg font-bold font-mono"
          v-if="
            user.user_role == 'user' &&
            user.kebele == kebele_address &&
            user.user_state == 1
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

const Users = ref([]);

const getUsers = async () => {
  try {
    const users = await axios.get("http://localhost:5000/users");
    Users.value = users.data;
  } catch (err) {}
};
onMounted(async () => {
  getUsers();
});

const chatsWith = async (email) => {
  chatChatstore.chatEmail = email;
  localStorage.setItem("chat_with_email", email);
};
</script>
