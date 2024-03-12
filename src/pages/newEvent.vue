<template>
  <div class="bg-green-50 dark:bg-gray-800 ">
  <p class="font-mono font-bold pt-4 text-center text-lg text-gray-800 dark:text-white">
ማንኛውንም አይነት የገበሬ ማህበራት መረጃ እዚህ ማግኘት ይችላሉ፡፡ 
<pre class="font-bold font-mono"> 
  ማህበራቶች የሚያወጡት ማስታዎቂያ
  ማህበራቶች እና የወረዳው የስራ ቅጥር
  ማህበራቶች የሚያደርጓቸውን ድርጊቶች
መከታተል ይችላሉ፡፡
   </pre>
              </p>
              <div>
                <p
                  class="text-lg font-bold text-gray-800 dark:text-white text-center"
                  v-if="loading"
                >
                  <!-- <Circle4></Circle4> -->
                  <vue-spinner
                    :color="'#007aff'"
                    :size="'50px'"
                    :margin="'5px'"
                    :radius="'100%'"
                  />
                  Loading...
                </p>
              </div>
        <div class="px-10" v-for="source in news.slice().reverse()" :key="source.id">
         <div v-if="(source.kebele == kebele_address && user_role == 'user' && source.newsSource == 'Mahiberat') || source.newsSource == 'User'">
         <div v-if="source.title" class="lg:flex lg:flex-row flex flex-col gap-10">
          <div class="flex items-center justify-center pb-10">
            <img
             class="EventsImage w-70 h-60 lg:w-50 lg:h-40 mt-2 border rounded-lg hover:scale-110"
                      :src="source.newsImage"
                      alt="image"
                    />
          </div>
          <div>
            <ul>
            <li>
                <div class="block text-black font-mono items-center justify-center flex-wrap">
                  <div class="text-center text-2xl text-gray-700 dark:text-white">{{ source.title }}</div>
                  <div class="pl-3 text-gray-700 dark:text-white">{{ source.description }}</div>
                  <div class="dateAndLink text-center flex items-center md:gap-24 justify-center flex-wrap">
                    <div class="pl-3 text-center text-gray-700 dark:text-white"><p>የወጣበት ቀን፡ {{ source.postedDate }} ዓ.ም</p></div>
                    <a href="">
                    <span class="flex gap-1 items-center">
                    <span>
                      <svg class="fill-current h-8 w-auto text-blue" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkOutlinedIcon" tabindex="-1" title="InsertLinkOutlined"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
                    </span>
                    <div class="pl-3 text-gray-700 dark:text-white">{{ source.kebele }}</div>
                  </span>
                </a>
                  </div>
                </div>
            </li>
          </ul>
          </div>
        </div>
        <div v-else class="justify-center items-center">
<p class="text-6xl font-mono text-orange-900 dark:text-white">
  ባዶ፡ ምንም ሁነት የለም
</p>
        </div>
        </div>
        </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

//loading

import VueSpinner from "vue-spinner/src/PulseLoader.vue";

//end loading

const router = useRouter();

const news = ref([]);
const kebele_address = localStorage.getItem("kebele");
const user_role = localStorage.getItem("role");

const loading = ref(true);

const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;

    console.log(news.value);
    loading.value = false;
  } catch (err) {
  }
};

onMounted(async () => {
    if (
    (localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user" ||
    localStorage.getItem("user_state") != 1)&&
    (localStorage.getItem("customer_email") == undefined ||
    localStorage.getItem("customer_email") == null ||
    localStorage.getItem("role") != "customer" ||
    localStorage.getItem("user_state") != 1)
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
  await getNews();
});
</script>
<style scoped>
@media screen and(max-width:600px) {
  .EventsImage{
    justify-content: center;
    align-content: center;
    
  }
  .dateAndLink{
    display: block;
  }
  .eventsContainer{
    display: block;
    flex-wrap: wrap;
  }
}
@media screen and(min-width:601px) {
  .EventsImage{
    justify-content: center;
    align-content: center;

  }
  .eventsContainer{
    display: flex;
  }
  .dateAndLink{
    display: flex;

  }
}
</style>
