<template>
  <div class="flex flex-col justify-center items-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Image</label>
        <div class="control">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            @change="onFileChange"
            placeholder="image"
            accept="image/*"
          />
        </div>
      </div>

      <div class="control">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click.prevent="uploadImage"
        >
          SAVE
        </button>
      </div>
    </div>
    <div v-if="url">
      <img :src="url" alt="photo" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "firebase/storage";
import axios from "axios";
const base64Image = ref("");
var selectedFile = ref("");
const url = ref("");
const onFileChange = (e) => {
  selectedFile = e.target.files[0];

  const fileReader = new FileReader();

  fileReader.onload = () => {
    console.log(fileReader.result);
    base64Image.value = fileReader.result.split(",")[1];
  };
  fileReader.readAsDataURL(selectedFile);

  console.log(e.target.files[0]);
};
const uploadImage = async () => {
  if (base64Image.value != "") {
    const fetchData = await axios.post("http://localhost:5000/uploadImage", {
      base64: base64Image.value,
      name: "image",
    });
    console.log(fetchData.data);
    url.value = fetchData.data.url;
    localStorage.setItem("image_id", url.value);
  }

  // let storageRef = firebase.storage().ref('images/').add({ image: this.image })
};
</script>

<style></style>
