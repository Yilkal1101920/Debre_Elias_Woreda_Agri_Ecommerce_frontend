<template>
  <div class="bg-blue-100 border-1 py-0 border-blue-300 w-full top-0 block lg:hidden">
    <div v-if="chatChatstore.chatSelector == 0">
      <div v-for="user in Users" :key="user.email" class="nav text-blue-600">
        <ul>
          <li
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
    <div @click.prevent="chatSelector" v-if="chatChatstore.chatSelector == 1">
      <div class="flex gap-1 items-center pt-2">
        <svg
          class="h-8 w-auto fill-current pl-5 text-green-600"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MessageOutlinedIcon"
          tabindex="-1"
          title="MessageOutlined"
        >
          <path
            d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
          ></path>
        </svg>
        <p class="text-lg font-lg font-mono font-bold hover:text-green-500">
          Your Contacts
        </p>
      </div>
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
  chatChatstore.chatSelector = 1;
});

const chatsWith = async (email) => {
  chatChatstore.chatEmail = email;
  localStorage.setItem("chat_with_email", email);
  chatChatstore.chatSelector = 1;
};
const chatSelector = async () => {
  chatChatstore.chatSelector = 0;
};
</script>
