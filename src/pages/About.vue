<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <section class="">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <img src="../assets/agriculture.jpg" class="pt-0 h-screen w-auto" />
        <div class="pt-6 px-4 text-slate-800 dark:text-white">
          <h2 class="text-2xl font-mono font-bold">
            <h2 v-if="languageStore.language == 'En'">About Us</h2>
            <h2 v-if="languageStore.language == 'Am'">ስለ እኛ</h2>
          </h2>
          <h5 class="font-bold font-mono text-lg">
              <h5 v-if="languageStore.language == 'En'">Agriculture services of Debre Elias</h5>
              <h5 v-if="languageStore.language == 'Am'">የደብረ ኤልያስ ወረዳ ግብርና አገልግሎት</h5>
          </h5>
          <p class="font-mono font-bold">
            <p v-if="languageStore.language == 'En'">Agricultural services of Debre Elias Woreda is one of the oldest services in Ethiopia. 
            We are always ready to serve our people with great morality and humility and to provide quality agricultural raw materials and other services to our people on time.
            In 2028 by producing agricultural raw materials in our institution. It is our vision to be one of the best Agri services in Ethiopia.
            </p>
            <p v-if="languageStore.language == 'Am'">የደብረ ኤልያስ ወረዳ ገበሬወች ማህበር በኢትዮጵያ ካሉት ጥንታዊ አገልግሎቶች አንዱና ቀዳሚው ነው። ተቋሙ ለበርካታ ዓመታት
            ህዝቡን ሲያገለግል ቆይቷል። ሁሌም ህዝባችንን በታላቅ ስነ ምግባር እና ትህትና ለማገልገል እና ጥራት ያለው የግብርና ጥሬ
            እቃዎችን እና ሌሎች አገልግሎቶችን በሰዓቱ ለህዝባችን ለማቅረብ ዝግጁ ነን። በ 2020 ዓ.ም በራሳችን ተቋም ጥሬ እቃዎችን
            በማምረት በኢትዮጵያ ከሚገኙ ምርጥ የግብርና አገልግሎቶች አንዱ መሆን ራእያችን ነው።
            </p>
          </p>
          <div class="py-6">
            <router-link
              to="/help"
              class="flex justify-center bg-green-400 text-lg font-bold font-mono text-white hover:bg-green-700 py-2 px-11 rounded-lg"
            >
              <h4 v-if="languageStore.language == 'En'">contact</h4>
              <h4 v-if="languageStore.language == 'Am'">ያግኙን</h4>
            </router-link>
          </div>

          <div class="py-3">
            <p class="font-mono font-bold text-2xl flex justify-center">
               <p v-if="languageStore.language == 'En'">Phone number</p>
               <p v-if="languageStore.language == 'Am'">ስልክ ቁጥር</p>
            </p>
            <p class="font-mono font-bold text-lg flex justify-center">
              +251 923 14 6361
            </p>
            <p class="font-mono font-bold text-lg flex justify-center">
              +251 923 23 4130
            </p>
            <p class="font-mono font-bold text-lg flex justify-center"></p>
            <p class="font-mono font-bold text-2xl flex justify-center pt-3">
               <p v-if="languageStore.language == 'En'">Email</p>
               <p v-if="languageStore.language == 'Am'">ኢሜል</p>
            </p>
            <p class="font-mono font-bold text-lg flex justify-center">
              dearlight1221@gmail.com
            </p>
            <p class="font-mono font-bold text-lg flex justify-center">
              ayinalemmenberr@gmail.com
            </p>
            <p class="font-mono font-bold text-lg flex justify-center">
              desalegn251@gmail.com
            </p>
          </div>

          <div
            class="grid text-gray-800 dark:text-white gap-5 justify-center items-center px-5 pb-11 mt-4 flex-wrap sm:grid-cols-2 md:grid-cols-5"
          >
            <div class="flex gap-3 items-center justify-center">
              <a href="https://www.facebook.com/yilkal.derseh.3" target="_blank">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="fill-current hover:scale-110 text-blue-600 hover:text-blue-900 w-auto h-8 cursor-pointer"
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
                    class="w-auto hover:scale-110 h-8 text-green-500 hover:text-green-900 fill-current"
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
              <a
                href="http://www.linkedin.com/in/desalegn-getachew-23b213234"
                target="_blank"
              >
                <span>
                  <svg
                    class="w-auto hover:scale-110 h-8 text-blue-500 hover:text-blue-900 fill-current"
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
              <p class="">Linkedin</p>
            </div>
            <div class="flex gap-3 justify-center items-center">
              <a href="recipient@email.com?body=Message%20body%20text%20" target="_blank">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    class="w-auto hover:scale-110 h-8 text-green-500 hover:text-green-900 fill-current"
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
              <p>Google</p>
            </div>
            <div class="flex gap-3 justify-center items-center">
              <a href="http://www.instagram.com/desgeta" target="_black">
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="w-auto hover:scale-110 h-8 text-red-500 hover:text-red-900 fill-current"
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
    </section>
  </div>
</template>
<script setup>
import { useLanguageStore } from "../state/languageStore";
const languageStore = useLanguageStore();
</script>
<style scoped></style>
