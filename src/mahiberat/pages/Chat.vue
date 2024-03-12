<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <ChatPanel />
    <div class="pl-5 w-full">
      <div class="flex justify-between items-center w-full dark:text-white py-4">
        <label class="flex justify-start text-gray-700 text-lg font-bold pl-5"
          >Received
        </label>
        <label class="flex justify-end text-gray-700 text-lg font-bold pr-5"> You</label>
      </div>
      <div class="" v-for="item in chats" :key="item.chat_id">
        <ul>
          <li
            class="flex mr-[50%]"
            v-if="
              item.send_email == chatChatstore.chatEmail &&
              item.receive_email == send_email
            "
          >
            <p class="text-gray-700 font-mono bg-slate-200 my-0.5 p-2 rounded-lg w-full">
              {{ item.message }}
            </p>
          </li>
          <li
            class="flex ml-[50%]"
            v-if="
              item.send_email == send_email &&
              item.receive_email == chatChatstore.chatEmail
            "
          >
            <p
              class="text-gray-700 font-mono rounded-lg px-3 py-2 my-0.5 bg-green-200 w-full"
            >
              {{ item.message }}
            </p>
          </li>
        </ul>
      </div>
      <form action="">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="message"
          v-model="chatt"
          required
        />
        <input
          class="bg-green-300 hover:bg-green-700 m-2 justify-end items-end text-end text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="send"
          type="submit"
          value="Send message"
        />
      </form>
    </div>
  </div>
</template>
<script setup>
import ChatPanel from "../components/ChatPanel.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";

import { useChatStore } from "../state/chatStore";
import Swal from "sweetalert2";

const chatChatstore = useChatStore();

const send_email = localStorage.getItem("manager_email");
const chats = ref([]);

const chatt = ref("");

const router = useRouter();

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
  await getChatts();
});

const send = async () => {
  try {
    await axios.post("http://localhost:5000/chat", {
      send_email: send_email,
      receive_email: chatChatstore.chatEmail,
      message: chatt.value,
    });
    getChatts();
  } catch (err) {
    console.log(err);
  }
};

const getChatts = async () => {
  chatChatstore.chatEmail = localStorage.getItem("chat_with_email");
  try {
    const response = await axios.get("http://localhost:5000/chat");
    chats.value = response.data;
  } catch (err) {
    console.log("error", err);
  }
};
</script>

<style></style>
