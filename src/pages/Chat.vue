<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <div class="lg:flex">
      <ChatPanel />
      <MobileChatPanel />
      <MobileChat />
      <div class="pl-5 w-full lg:block hidden">
        <p
          class="text-lg font-mono text-gray-700 dark:text-white text-center justify-center my-4"
        >
          ማንኛውንም ስለምተገለገልበት የገበሬ አገልገሎት ጥያቄ መጠየቅ እንዲሁም አስተያየት መስጠት ይችላሉ::
        </p>
        <div class="flex justify-between items-center w-full">
          <label
            class="flex dark:text-white text-gray-700 font-bold pl-5 pt-5 font-mono text-lg"
            for="messageFromMahiberatId"
            >የተቀበልከዉ መልእክት</label
          >
          <label
            class="flex text-gray-700 dark:text-white text-lg font-bold pr-5 font-mono"
            for="messageToMahiberatId"
            >ያንተ መልእክት</label
          >
        </div>
        <div
          v-if="isChat == true"
          class="w-full"
          v-for="item in chats"
          :key="item.chat_id"
        >
          <div class="">
            <div
              class="lg:mr-[50%] rounded-tl-full px-3 py-2 my-0.5 bg-slate-200 group/item"
              id="messageFromMahiberatId"
              v-if="
                item.send_email == chatChatstore.chatEmail &&
                item.receive_email == send_email
              "
            >
              <div>
                <p
                  class="text-gray-700 dark:text-white font-mono my-0.5 p-2 rounded-lg w-full"
                >
                  {{ item.message }}
                </p>
              </div>
              <div class="flex gap-5 group/edit invisible group-hover/item:visible">
                <div>
                  <svg
                    class="fill-current h-6 w-auto hover:text-red-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-red-900"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="HighlightOffOutlinedIcon"
                    tabindex="-1"
                    title="HighlightOffOutlined"
                  >
                    <path
                      d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    class="fill-current h-6 w-auto hover:text-yellow-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-yellow-900"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ModeEditOutlineOutlinedIcon"
                    tabindex="-1"
                    title="ModeEditOutlineOutlined"
                  >
                    <path
                      d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="lg:ml-[50%] rounded-tr-full rounded-l-lg px-3 py-2 my-0.5 bg-green-200 group/item"
              id="messageToMahiberatId"
              v-if="
                item.send_email == send_email &&
                item.receive_email == chatChatstore.chatEmail
              "
            >
              <div>
                <p class="text-gray-700 font-mono w-full">{{ item.message }}</p>
              </div>
              <div class="flex gap-2 group/edit invisible group-hover/item:visible">
                <div>
                  <svg
                    class="fill-current h-6 w-auto hover:text-red-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-red-900"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="HighlightOffOutlinedIcon"
                    tabindex="-1"
                    title="HighlightOffOutlined"
                  >
                    <path
                      d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    class="fill-current h-6 w-auto hover:text-yellow-700 hover:cursor-pointer group-hover/edit:translate-x-0.5 group-hover/edit:text-yellow-900"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ModeEditOutlineOutlinedIcon"
                    tabindex="-1"
                    title="ModeEditOutlineOutlined"
                  >
                    <path
                      d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isChat == false" col>
          <div colspan="11" class="col-span-full">
            <div class="text-gray-800 dark:text-white block py-11 px-11">
              <P
                class="text-gray-400 text-center dark:text-white text-4xl italic font-mono font-bold"
                >No Message.</P
              >
              <p
                class="text-center text-gray-400 dark:text-white font-mono font-bold text-lg"
              >
                No thing to show. once you send or receive the message it will be
                displayed here.
              </p>
            </div>
          </div>
        </div>
        <form action="" class="flex items-center">
          <input
            class="shadow appearance-none border border-green-300 rounded-l-full pl-6 w-[85%] mt-2 mb-6 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="ጥያቄ፣ አስተያየት፣ መልእክት ወ.ዘ.ተ..."
            v-model="chatt"
            required
          />
          <input
            class="bg-green-300 cursor-pointer hover:bg-green-700 text-white font-bold mb-5 py-2 mt-2 px-2 justify-end items-end text-end rounded-r-full focus:outline-none focus:shadow-outline"
            @click="send"
            type="submit"
            value="መልእክት ላክ"
          />
        </form>
        <div>
          <p
            class="text-center text-lg font-mono font-bold text-gray-700 dark:text-white"
          >
            ሌሎች አማራጮች
          </p>
          <div
            class="grid gap-5 justify-center items-center px-5 pb-11 mt-4 flex-wrap sm:grid-cols-2 md:grid-cols-5"
          >
            <div class="flex gap-3 items-center justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100069123253677"
                target="_blank"
              >
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="fill-current dark:text-white text-blue-600 hover:text-blue-900 w-auto h-8 cursor-pointer"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </span>
              </a>
              <p>Facebook</p>
            </div>
            <div class="flex gap-3 justify-center items-center">
              <a href="https://t.me/deseget" target="_blank">
                <span>
                  <svg
                    class="w-auto h-8 text-green-500 hover:text-green-900 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                    ></path>
                  </svg>
                </span>
              </a>
              <p>Telegram</p>
            </div>
            <div class="flex gap-3 justify-center items-center">
              <a href="" target="_blank">
                <span>
                  <svg
                    class="w-auto h-8 text-blue-500 hover:text-blue-900 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg> </span
              ></a>
              <p>Linkedin</p>
            </div>
            <div class="flex gap-3 justify-center items-center">
              <a
                href="mailto:desalegn251@gmail.com"
                target="_blank"
                title="get in touch with Email"
              >
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    class="w-auto h-8 text-green-500 hover:text-green-900 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg> </span
              ></a>
              <p>Gmail</p>
            </div>
            <div class="flex gap-3 justify-center items-center">
              <a href="" target="_black">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="w-auto h-8 text-red-500 hover:text-red-900 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg> </span
              ></a>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ChatPanel from "../components/ChatPanel.vue";
import MobileChatPanel from "../components/MobileChatPannel.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useChatStore } from "../state/chatStore";
import { useRouter } from "vue-router";
// sweetalert import
import Swal from "sweetalert2";
import MobileChat from "../components/MobileChat.vue";

const router = useRouter();
const chatChatstore = useChatStore();
var send_email = localStorage.getItem("user_email");

const chats = ref([]);

const chatt = ref("");
const filteredChats = ref([]);
const countMessage = ref(0);
const isChat = ref(false);
onMounted(async () => {
  if (
    (localStorage.getItem("user_email") == undefined ||
      localStorage.getItem("user_email") == null ||
      localStorage.getItem("role") != "user") &&
    (localStorage.getItem("customer_email") == undefined ||
      localStorage.getItem("customer_email") == null ||
      localStorage.getItem("role") != "customer")
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
  if (send_email == null || send_email == undefined) {
    send_email = localStorage.getItem("customer_email");
  }
  await getChatts();
  await getChatBySenderAndReciever(send_email, chatChatstore.chatEmail);
});

const send = async () => {
  try {
    await axios.post("http://localhost:5000/chat", {
      send_email: send_email,
      receive_email: chatChatstore.chatEmail,
      message: chatt.value,
    });
    await getChatts();
    await getChatBySenderAndReciever(send_email, chatChatstore.chatEmail);
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
const getChatBySenderAndReciever = async (sender, receiver) => {
  try {
    filteredChats.value = chats.value.filter(
      (chat) =>
        (chat.send_email == sender && chat.receive_email == receiver) ||
        (chat.receive_email == sender && chat.send_email == receiver)
    );

    for (let x in filteredChats.value) {
      if (
        filteredChats.value[x].message != undefined ||
        filteredChats.value[x].message != null
      ) {
        isChat.value = true;
        countMessage.value = countMessage.value + 1;
      }
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped></style>
