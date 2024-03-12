<template>
  <div class="bg-green-50 dark:bg-gray-800 h-full w-full">
    <div class="flex w-full">
      <div class="px-6 justify-center w-full">
        <div class="w-full">
          <div class="flex justify-between items-center my-6 w-full">
            <div class="flex gap-1 items-center ml-8 py-4">
              <router-link to="/woreda/dashboard">
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
            <p class="font-mono font-bold text-2xl text-gray-700 dark:text-white">
              All events posted
            </p>
            <div class="w-[30%]">
              <form action="">
                <div class="flex gap-0">
                  <input
                    type="search"
                    v-model="eventSearchValue"
                    name="search"
                    id="searchProduct"
                    placeholder=" Search Event..."
                    class="w-[80%] shadow-sm p-2 border-green-300 text-gray-700 ml-6 py-2 rounded-l-md"
                  />
                  <input
                    type="submit"
                    value="Search"
                    @click="searchEvents"
                    class="shadow-sm text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-r-lg hover:text-white hover:cursor-pointer"
                  />
                </div>
              </form>
            </div>
            <router-link to="/mahiberat/addNews">
              <button
                class="text-gray-700 dark:text-white bg-green-300 hover:bg-green-700 p-2 rounded-lg hover:text-white"
                @click="productAdd"
              >
                Post event now
              </button>
            </router-link>
          </div>
        </div>
        <div class="pl-5" v-for="event in filteredNews.slice().reverse()" :key="event.id">
          <div>
            <div v-if="event.title" class="lg:flex lg:flex-row flex flex-col gap-10">
              <div class="flex items-center justify-center pb-10">
                <img
                  class="EventsImage w-40 h-36 lg:w-50 lg:h-40 mt-2 border rounded-lg hover:scale-110"
                  :src="event.newsImage"
                  alt="image"
                />
              </div>
              <div>
                <ul>
                  <li>
                    <div
                      class="block text-black font-mono items-center justify-center flex-wrap"
                    >
                      <div class="text-center text-2xl">{{ event.title }}</div>
                      <div class="pl-3">{{ event.description }}</div>
                      <div
                        class="dateAndLink text-center flex items-center md:gap-24 justify-center flex-wrap"
                      >
                        <div class="pl-3 text-center">
                          <p>የወጣበት ቀን፡ {{ event.postedDate }} ዓ.ም</p>
                        </div>
                        <a href="">
                          <span class="flex gap-1">
                            <span
                              ><span
                                ><svg
                                  class="h-7 w-auto fill-current text-blue-700"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="LinkOutlinedIcon"
                                  tabindex="-1"
                                  title="LinkOutlined"
                                >
                                  <path
                                    d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"
                                  ></path></svg
                              ></span>
                            </span>
                            <div class="pl-3">{{ event.newsSource }}</div>
                          </span>
                        </a>
                        <a
                          class="button is-danger is-small bg-red-300 border rounded"
                          @click="deleteNews(event.id)"
                        >
                          <svg
                            class="cursor-pointer fill-current h-6 w-auto text-red-500 hover:text-red-900"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="DeleteForeverOutlinedIcon"
                            tabindex="-1"
                            title="DeleteForeverOutlined"
                          >
                            <path
                              d="M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                            ></path></svg
                        ></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else class="justify-center items-center">
              <p class="text-6xl font-mono text-orange-900">ባዶ፡ ምንም ክስተት የለም</p>
            </div>
          </div>
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

const router = useRouter();

const news = ref([]);
const filteredNews = ref([]);
const eventSearchValue = ref("");

const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;

    console.log(news.value);
    await filterNews();
  } catch (err) {
    console.log(err);
  }
};

const filterNews = async () => {
  try {
    filteredNews.value = news.value.filter(
      (event) => event.newsSource == "Debre Elias Agricultural Office"
    );
  } catch (err) {}
};
onMounted(async () => {
  if (
    localStorage.getItem("woreda_admin_email") == undefined ||
    localStorage.getItem("woreda_admin_email") == null ||
    localStorage.getItem("role") != "woreda_admin"
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "please login first!",
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    router.replace("/login");
  }
  await getNews();
});
const deleteEvent = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/news/${id}`);
  } catch (err) {
    console.log(err);
  }
  window.location.reload();
};

const deleteNews = async (id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteEvent(id);
      Swal.fire("Deleted Successfully!");
    }
  });
};
const searchEvents = async () => {
  localStorage.setItem("event_search_value", eventSearchValue.value);
  router.push(`/mahiberat/postedNews/${eventSearchValue.value}`);
};
</script>
<style scoped>
@media screen and(max-width:600px) {
  .EventsImage {
    justify-content: center;
    align-content: center;
  }
  .dateAndLink {
    display: block;
  }
  .eventsContainer {
    display: block;
    flex-wrap: wrap;
  }
}
@media screen and(min-width:601px) {
  .EventsImage {
    justify-content: center;
    align-content: center;
  }
  .eventsContainer {
    display: flex;
  }
  .dateAndLink {
    display: flex;
  }
}
</style>
