<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth text-black">
      <thead>
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datas" :key="item.product_id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="has-text-centered">
            <a
              class="button is-danger is-small bg-red-600"
              @click="deleteProduct(item.product_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const datas = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    datas.value = response.data;
    console.log(datas.value);
  } catch (err) {
    console.log(err);
  }
});

const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
