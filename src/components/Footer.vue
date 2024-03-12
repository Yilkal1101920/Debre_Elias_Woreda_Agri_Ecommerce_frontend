<template>
  <div class="w-full h-full">
    <footer
      class="text-center justify-center items-center w-full bg-gray-200 dark:bg-gray-800 text-black bottom-0"
    >
      <div
        class="socialmedia flex-wrap flex justify-center items-center lg:justify-evenly p-2 border-b border-gray-300"
      ></div>
      <div class="text-gray-800 dark:text-white mx-6 pt-6 pb-2 text-center md:text-left">
        <div
          class="text-gray-800 dark:text-white grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          <div class="text-gray-800 dark:text-white lex flex-col items-center md:pl-24">
            <h6
              class="font-bold font-mono mb-4 flex items-center justify-center md:justify-start"
            >
              {{ kebele_address }}
            </h6>

            <p v-if="languageStore.language == 'Am'">
              የግብርና ምርቶችን እና ጥሬ እቃዎችን ለገበሬዎች የሚያከፋፍል ድርጂት ነው፡፡
            </p>
            <p v-if="languageStore.language == 'En'">
              The company is a distributor of agricultural products and raw materials to
              farmers.
            </p>
          </div>
          <!-- google map -->
          <googlemap />
          <div class="flex flex-col gap-3 items-center">
            <span class="flex gap-3 items-center">
              <span>
                <svg
                  class="fill-current h-5 w-auto text-2xl"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LinkOutlinedIcon"
                  tabindex="-1"
                  title="LinkOutlined"
                >
                  <path
                    d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"
                  ></path>
                </svg>
              </span>
              <span
                ><h6
                  v-if="languageStore.language == 'En'"
                  class="font-bold font-mono flex justify-center md:justify-start"
                >
                  Important links
                </h6>
                <h6
                  v-if="languageStore.language == 'Am'"
                  class="font-bold font-mono flex justify-center md:justify-start"
                >
                  ጠቃሚ ማስፈንጠሪያዎች
                </h6>
              </span>
            </span>

            <p class="hover:scale-110">
              <router-link to="/" class="text-gray-800 dark:text-white"
                ><p v-if="languageStore.language == 'Am'">መነሻ ገጽ</p>
                <p v-if="languageStore.language == 'En'">Home Page</p></router-link
              >
              <router-link to="/farmersProduct" class="text-gray-800 dark:text-white"
                ><div v-if="user_role == 'user'">
                  <p v-if="languageStore.language == 'Am'">ወደ ገበሬዎች ምርት</p>
                  <p v-if="languageStore.language == 'En'">Go to farmers product</p>
                </div>
              </router-link>
            </p>
          </div>
          <div class="flex justify-center flex-wrap items-center">
            <a href="https://www.facebook.com/desetyibyit.sol" class="mr-6">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                class="w-2.5 hover:scale-110 hover:shadow-lg shadow-green-300 dark:text-white text-blue-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a href="https://t.me/deseget" class="mr-6">
              <svg
                class="w-6 h-6 text-blue-500 dark:text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                ></path>
              </svg>
            </a>
            <a href="#!" class="mr-6">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                class="w-3.5 dark:text-white text-blue-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </a>
            <a href="#!" class="mr-6">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                class="w-3.5 dark:text-white text-blue-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-4">
        <p v-if="languageStore.language == 'En'" class="text-gray-800 dark:text-white">
          payment method:
        </p>
        <p v-if="languageStore.language == 'Am'" class="text-gray-800 dark:text-white">
          የክፍያ መንገድ:
        </p>
        <img
          src="../assets/chapa-logo.png"
          title="Chapa"
          alt="chapa logo"
          class="h-11 rounded-lg w-auto"
        />
        <p v-if="languageStore.language == 'En'">CHAPA</p>
        <p v-if="languageStore.language == 'Am'">ቻፓ</p>
      </div>
      <div class="text-center p-6 dark:text-white text-blue-600">
        <span v-if="languageStore.language == 'En'">© 2022 Copyright: </span>
        <span v-if="languageStore.language == 'Am'">© 2015 የቅጂ መብት : </span>
        <a
          v-if="languageStore.language == 'Am'"
          class="font-semibold dark:text-white text-blue-600"
          href=""
          >ደብረ ኤልያስ ግብርና ቢሮ, በይልቃል</a
        >
        <a
          v-if="languageStore.language == 'En'"
          class="font-semibold dark:text-white text-blue-600"
          href=""
          >Debre Elias Agricultural Office, Developed by Yilkal.</a
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useLanguageStore } from "../state/languageStore";
import googlemap from "./googlemap.vue";

const languageStore = useLanguageStore();
const kebele_address = localStorage.getItem("kebele");
const user_role = localStorage.getItem("role");
</script>
<style scoped>
@media screen and(max-width:600px) {
}
</style>
