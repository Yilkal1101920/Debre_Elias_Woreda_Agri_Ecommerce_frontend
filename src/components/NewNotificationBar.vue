<template>
  <div>
    <aside class="rounded bg-gray-200 dark:bg-gray-800 py-2 px-3" aria-label="Sidebar">
      <div class="">
        <div class="nav" v-for="source in news.slice().reverse()" :key="source.id">
          <ul
            v-if="
              (source.id > useNotification.showNewNotificationStart &&
                source.kebele == kebele &&
                source.newsSource == 'Mahiberat' &&
                role == 'user') ||
              (source.id > useNotification.showNewNotificationStart &&
                source.newsSource == 'User')
            "
          >
            <li
              class="border border-white p-2"
              @click.prevent="
                useNotification.showNotificationBar = !useNotification.showNotificationBar
              "
            >
              <router-link to="/events">
                <div>
                  <p class="hover:text-green-600">{{ source.description }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useNotificationStore } from "../state/showNotification.js";

var useNotification = useNotificationStore();
const news = ref([]);
const kebele = localStorage.getItem("kebele");
const role = localStorage.getItem("role");

const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/news");
    news.value = response.data;
  } catch (err) {
    console.log("error", err);
  }
};

onMounted(async () => {
  await getNews();
});
</script>
