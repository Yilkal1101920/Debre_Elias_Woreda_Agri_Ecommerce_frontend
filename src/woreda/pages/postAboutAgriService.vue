<template>
  <div class="bg-green-50 w-full h-full dark:bg-slate-800">
    <div class="flex gap-4 w-full">
      <form action="">
        <div
          class="text-gray-700 dark:text-white w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-6 pb-8"
        >
          <div class="field">
            <label class="block text-gray-700 text-lg font-bold mb-2">Title</label>
            <div class="control">
              <input
                required
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder=""
                v-model="title"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="title == '' && tryCount == 1">እርስ አላስገቡም</p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-lg font-bold mb-2">Date</label>
            <div class="control">
              <input
                required
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="date"
                placeholder="Today's Date"
                v-model="posted_date"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="posted_date == '' && tryCount == 1">
                  ቀን አላስገቡም
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-lg font-bold mb-2">Source name</label>
            <div class="control">
              <select
                required
                class="border border-green-300 rounded w-full py-2 px-3 text-gray-700"
                type="text"
                v-model="news_source"
              >
                <option>Debre Elias Agricultural Office</option>
              </select>
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="news_source == '' && tryCount == 1">
                  የማስታዎቂያዉን ምንጭ አላስገቡም
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="contentID" class="block text-gray-700 text-lg font-bold mb-2"
              >Content</label
            >
            <div class="control">
              <quill-editor
                theme="snow"
                cols="60"
                rows="3"
                placeholder="Contents or some description"
                v-model:content="description"
                required
                class="border border-green-300 rounded w-full h-60 py-2 px-3 text-gray-700"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="description == '' && tryCount == 1">
                  የማስታዎቂያዉን ዝርዝር አላስገቡም
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-lg font-bold mb-2">Image</label>
            <div class="control">
              <input
                class="rounded-lg w-full py-2 px-3 text-gray-700"
                type="file"
                @change="onFileChange"
              />
            </div>
          </div>
        </div>
        <div class="control flex justify-center">
          <button
            class="bg-green-300 px-7 hover:bg-green-700 text-gray-900 hover:text-white font-bold py-2 mt-2 rounded-lg text-lg font-mono"
            @click.prevent="postNotification"
          >
            Post now
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const router = useRouter();

const base64Image = ref("");
var selectedFile = ref("");
const url = ref("");

const title = ref("");
const posted_date = ref("");
const news_source = ref("");
const description = ref("");

const tryCount = ref("");

onMounted(() => {
  if (
    localStorage.getItem("woreda_admin_email") == undefined ||
    localStorage.getItem("woreda_admin_email") == null ||
    localStorage.getItem("role") != "woreda_admin"
  ) {
    // alert("please login first");
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
});

const onFileChange = (e) => {
  selectedFile = e.target.files[0];

  var fileReader = new FileReader();

  fileReader.onload = () => {
    console.log(fileReader.result);
    base64Image.value = fileReader.result.split(",")[1];
  };
  fileReader.readAsDataURL(selectedFile);
  console.log(e.target.files[0]);
};

const postNotification = async () => {
  try {
    console.log(description);
    tryCount.value = 1;
    if (base64Image.value != "") {
      const fetchData = await axios.post("http://localhost:5000/newsUploadImage", {
        base64: base64Image.value,
        name: "News Image",
      });
      console.log(fetchData.data);
      url.value = fetchData.data.url;
    }
    if (
      title.value != "" &&
      posted_date.value != "" &&
      news_source.value != "" &&
      description.value.ops[0].insert != ""
    ) {
      await notify();
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Please fill all fields!",
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const notify = async () => {
  try {
    await axios.post("http://localhost:5000/addNews", {
      title: title.value,
      postedDate: posted_date.value,
      newsSource: news_source.value,
      poster_email: localStorage.getItem("woreda_admin_email"),
      description: description.value.ops[0].insert,
      newsImage: url.value,
      news_quantity: 1,
      kebele: "Debre Elias Woreda",
    });
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "success",
      html: "Posted successfully!",
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    router.replace("/woreda/postedNews");
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
