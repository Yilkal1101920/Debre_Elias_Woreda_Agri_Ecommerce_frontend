<template>
  <div>
    <button
      type="submit"
      class="px-6 text-2xl py-2.5 bg-blue-400 dark:bg-gray-800 text-white font-medium mb-5 rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      @click.prevent="pay"
    >
      pay
    </button>
    <a
      href="https://checkout.chapa.co/checkout/payment/XSjDNkAwhcRYR1cN9dpiCIRpSg5urDDzcC3WIXpKeAquK"
      >payment</a
    >
  </div>
</template>

<script setup>
import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${"CHASECK_TEST-HGIKNodWHMWzvQaOmVB7NLOHsF1Kmawd"}`,
  },
};

const pay = async () => {
  const url = await axios.post("http://localhost:5000/api/pay", {
    amount: "2000",
    currency: "ETB",
    email: "birhanyaregal@gmail.com",
    first_name: "Birhan",
    last_name: "Yaregal",
  });
  console.log(url.data);
  window.location.href = url.data.url;
};
</script>
