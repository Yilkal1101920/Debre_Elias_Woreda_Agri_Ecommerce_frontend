<template>
  <div class="text-start col-4 p-5">
    <form
      ref="myform"
      id="paymentForm"
      action="http://localhost:5000/payment"
      method="POST"
    >
      <button class="stripe-button">payment</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let myform;
let foo;

onMounted(async () => {
  myform = document.createElement("myform");
  document.body.appendChild(myform);
  foo = document.createElement("script");
  foo.setAttribute("src", "//checkout.stripe.com/v2/checkout.js");
  foo.setAttribute("class", "stripe-button");
  foo.setAttribute("action", "http://localhost:3000/payment");
  foo.setAttribute(
    "data-key",
    "pk_test_51MrgvLGPITKsRzWNNJrPhxOG1MEhKTbZ7EuOpK0cu4CAHQ5aCuY8V6AsLjBJKd5XCmsB655Xdu6IZSr4EhlCP7D4005hohlAIz"
  );
  foo.setAttribute("data-amount", "250000");
  foo.setAttribute("data-currency", "ETB");
  foo.setAttribute("data-name", "Ethiopian Birr");
  foo.setAttribute("data-description", "Agricultural product and raw material Products");
  foo.setAttribute("data-locale", "auto");
  myform.appendChild(foo);
});
</script>
