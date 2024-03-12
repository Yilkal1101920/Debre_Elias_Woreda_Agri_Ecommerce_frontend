<template>
    <div class="flex flex-row w-full h-full bg-green-50 dark:bg-gray-800">
        <farmerSideNav/>
      <section class="home-section justify-center pl-10">
        
        <div class="home-content">
          <div class="overview-boxes">
            <div class="box pt-3 cursor-pointer hover:scale-110" @click="addProduct">
              <div class="right-side">
                <div class="box-topic text-gray-700 font-mono">ADD PRODUCT</div>
                <div class="indicator">
                  <span>
                    <svg
                      class="fill-current h-5 w-auto text-green-900"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="AddOutlinedIcon"
                      tabindex="-1"
                      title="AddOutlined"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                  </span>
                  <span class="text text-gray-500">Register product</span>
                </div>
              </div>
            </div>
  
            <div class="box pt-3 cursor-pointer hover:scale-110" @click="productList">
              <div class="right-side">
                <div class="box-topic text-gray-700 font-mono">TOTAL PRODUCTS TYPE</div>
                <div class="number font-mono text-gray-700">{{ countProducts }}</div>
                <div class="indicator">
                  <!-- <span>
                  <svg class="fill-current text-green-800 h-5 w-auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CategoryOutlinedIcon" tabindex="-1" title="CategoryOutlined"><path d="m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"></path></svg>
                 </span> -->
                  <span class="text text-gray-500">Category: Click to see detail</span>
                </div>
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
  
            <div
              class="box pt-3 cursor-pointer hover:scale-110"
              @click="productListInTheMarket"
            >
              <div class="right-side">
                <div class="box-topic text-gray-700 font-mono">Products In Market</div>
                <div class="number text-gray-700 font-mono">
                  {{ countProductsInTheMarket }}
                </div>
                <div class="indicator">
                  <a href="#" class="active"></a>
                  <span class="text text-gray-700 font-mono"> Available for customers</span>
                </div>
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
  
            <div
              class="box pt-3 cursor-pointer hover:scale-110 text-gray-700"
              @click="productListNotInTheMarket"
            >
              <div class="right-side">
                <div class="box-topic font-mono">Products on home</div>
                <div class="number font-mono">{{ countProductsNotInTheMarket }}</div>
                <div class="indicator">
                  <span class="text font-mono">home consumable and/or may sell</span>
                </div>
              </div>
              <i class="bx bx-cart cart three"></i>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import farmerSideNav from "./farmerSideNave.vue";
  
  const router = useRouter();
  const store_email = localStorage.getItem("store_email");
  const kebele = localStorage.getItem("kebele");
  const items = ref([]);
  const countProducts = ref(0);
  const Products = ref("");
  const ProductsInTheMarket = ref("");
  const countProductsInTheMarket = ref("");
  const countProductsNotInTheMarket = ref("");
  const countProductsNotActivated = ref(0);
  
  onMounted(() => {
    // if (
    //   localStorage.getItem("store_email") == undefined ||
    //   localStorage.getItem("store_email") == null ||
    //   localStorage.getItem("role") != "store"
    // ) {
    //   alert("please login first");
    //   router.replace("/login");
    // } 
    // else {
      getUser();
      getTotalProducts();
      getTotalProductsInTheMarket();
    // }
  });
  
  const getTotalProducts = async () => {
    try {
      const products = await axios.get("http://localhost:5000/products");
      Products.value = products.data;
      for (let x in Products.value) {
        if (kebele == Products.value[x].kebele) {
          countProducts.value++;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const getTotalProductsInTheMarket = async () => {
    try {
      const productsInTheMarket = await axios.get("http://localhost:5000/products");
      ProductsInTheMarket.value = productsInTheMarket.data;
      for (let x in ProductsInTheMarket.value) {
        if (
          kebele == ProductsInTheMarket.value[x].kebele &&
          ProductsInTheMarket.value[x].postedForMarket != 0 &&
          ProductsInTheMarket.value[x].marketState == 1
        ) {
          countProductsInTheMarket.value++;
        }
        if (
          kebele == ProductsInTheMarket.value[x].kebele &&
          ProductsInTheMarket.value[x].amount -
            ProductsInTheMarket.value[x].postedForMarket !=
            0
        ) {
          countProductsNotInTheMarket.value++;
        }
        if (
          kebele == ProductsInTheMarket.value[x].kebele &&
          ProductsInTheMarket.value[x].postedForMarket != 0 &&
          ProductsInTheMarket.value[x].marketState == 0
        ) {
          countProductsNotActivated.value++;
        }
      }
    } catch (err) {}
  };
  
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      items.value = response.data;
      console.log("Before");
      console.log(items.value);
      console.log("After");
    } catch (err) {
      console.log(err);
    }
  };
  
  const addProduct = () => {
    router.push("addProductToStore");
  };
  const productList = () => {
    router.replace("storeProductsList");
  };
  const productListThatAreNotActivated = () => {
    router.push("storeProductsListThatAreNotActivated");
  };
  const productListInTheMarket = () => {
    router.push("storeProductListInTheMarket");
  };
  const productListNotInTheMarket = () => {
    router.push("storeProductListNotInTheMarket");
  };
  </script>
  
  <style scoped>
  /* Googlefont Poppins CDN Link */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  .sidebar {
    position: sticky;
    height: 100%;
    width: 240px;
    background: #0a2558;
    transition: all 0.5s ease;
  }
  .sidebar.active {
    width: 60px;
  }
  .home-section {
    position: static;
    min-height: 100vh;
    transition: all 0.5s ease;
  }
  .sidebar.active ~ .home-section {
    width: calc(100% - 60px);
    left: 60px;
  }
  .home-section nav {
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    position: static;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
  }
  .sidebar.active ~ .home-section nav {
    left: 60px;
    width: calc(100% - 60px);
  }
  .home-section nav .sidebar-button {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
  }
  nav .sidebar-button i {
    font-size: 35px;
    margin-right: 10px;
  }
  .home-section nav .search-box {
    position: relative;
    height: 50px;
    max-width: 550px;
    width: 100%;
    margin: 0 20px;
  }
  
  .home-section nav .profile-details {
    display: flex;
    align-items: center;
    background: #f5f6fa;
    border: 2px solid #efeef1;
    border-radius: 6px;
    height: 50px;
    min-width: 190px;
    padding: 0 15px 0 2px;
  }
  nav .profile-details img {
    height: 40px;
    width: 40px;
    border-radius: 6px;
    object-fit: cover;
  }
  nav .profile-details .admin_name {
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin: 0 10px;
    white-space: nowrap;
  }
  nav .profile-details i {
    font-size: 25px;
    color: #333;
  }
  .home-section .home-content {
    position: relative;
    padding-top: 104px;
  }
  .home-content .overview-boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
    margin-bottom: 26px;
  }
  .overview-boxes .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 4 - 15px);
    background: #fff;
    padding: 15px 14px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .overview-boxes .box-topic {
    font-size: 20px;
    font-weight: 500;
  }
  .home-content .box .number {
    display: inline-block;
    font-size: 35px;
    margin-top: -6px;
    font-weight: 500;
  }
  .home-content .box .indicator {
    display: flex;
    align-items: center;
  }
  .home-content .box .indicator i {
    height: 20px;
    width: 20px;
    background: #8fdacb;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    margin-right: 5px;
  }
  .box .indicator i.down {
    background: #e87d88;
  }
  .home-content .box .indicator .text {
    font-size: 12px;
  }
  .home-content .box .cart {
    display: inline-block;
    font-size: 32px;
    height: 50px;
    width: 50px;
    background: #cce5ff;
    line-height: 50px;
    text-align: center;
    color: #66b0ff;
    border-radius: 12px;
    margin: -15px 0 0 6px;
  }
  .home-content .box .cart.two {
    color: #2bd47d;
    background: #c0f2d8;
  }
  .home-content .box .cart.three {
    color: #ffc233;
    background: #ffe8b3;
  }
  .home-content .box .cart.four {
    color: #e05260;
    background: #f7d4d7;
  }
  .home-content {
    font-size: 20px;
    font-weight: 500;
  }
  .home-content {
    display: flex;
    justify-content: space-between;
    /* padding: 0 20px; */
  }
  
  /* left box */
  .home-content .sales-boxes .recent-sales {
    width: 65%;
    background: #fff;
    padding: 20px 30px;
    margin: 0 20px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .home-content .sales-boxes .sales-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sales-boxes .box .title {
    font-size: 24px;
    font-weight: 500;
    /* margin-bottom: 10px; */
  }
  .sales-boxes .sales-details li.topic {
    font-size: 20px;
    font-weight: 500;
  }
  .sales-boxes .sales-details li {
    list-style: none;
    margin: 8px 0;
  }
  .sales-boxes .sales-details li a {
    font-size: 18px;
    color: #333;
    font-size: 400;
    text-decoration: none;
  }
  .sales-boxes .box .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .sales-boxes .box .button a {
    color: #fff;
    background: #0a2558;
    padding: 4px 12px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .sales-boxes .box .button a:hover {
    background: #0d3073;
  }
  
  /* Right box */
  .home-content .sales-boxes .top-sales {
    width: 35%;
    background: #fff;
    padding: 20px 30px;
    margin: 0 20px 0 0;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .sales-boxes .top-sales li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
  .sales-boxes .top-sales li a img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 12px;
    margin-right: 10px;
    background: #333;
  }
  .sales-boxes .top-sales li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .sales-boxes .top-sales li .product,
  .price {
    font-size: 17px;
    font-weight: 400;
    color: #333;
  }
  /* Responsive Media Query */
  @media (max-width: 1240px) {
    .sidebar {
      width: 60px;
    }
    .sidebar.active {
      width: 220px;
    }
    .home-section {
      width: calc(100% - 60px);
      left: 60px;
    }
    .sidebar.active ~ .home-section {
      /* width: calc(100% - 220px); */
      overflow: hidden;
      left: 220px;
    }
    .home-section nav {
      width: calc(100% - 60px);
      left: 60px;
    }
    .sidebar.active ~ .home-section nav {
      width: calc(100% - 220px);
      left: 220px;
    }
  }
  @media (max-width: 1150px) {
    .home-content .sales-boxes {
      flex-direction: column;
    }
    .home-content .sales-boxes .box {
      width: 100%;
      overflow-x: scroll;
      margin-bottom: 30px;
    }
    .home-content .sales-boxes .top-sales {
      margin: 0;
    }
  }
  @media (max-width: 1000px) {
    .overview-boxes .box {
      width: calc(100% / 2 - 15px);
      margin-bottom: 15px;
    }
  }
  @media (max-width: 700px) {
    nav .sidebar-button .dashboard,
    nav .profile-details .admin_name,
    nav .profile-details i {
      display: none;
    }
    .home-section nav .profile-details {
      height: 50px;
      min-width: 40px;
    }
    .home-content .sales-boxes .sales-details {
      width: 560px;
    }
  }
  @media (max-width: 550px) {
    .overview-boxes .box {
      width: 100%;
      margin-bottom: 15px;
    }
    .sidebar.active ~ .home-section nav .profile-details {
      display: none;
    }
  }
  @media (max-width: 400px) {
    .sidebar {
      width: 0;
    }
    .sidebar.active {
      width: 60px;
    }
    .home-section {
      width: 100%;
      left: 0;
    }
    .sidebar.active ~ .home-section {
      left: 60px;
      width: calc(100% - 60px);
    }
    .home-section nav {
      width: 100%;
      left: 0;
    }
    .sidebar.active ~ .home-section nav {
      left: 60px;
      width: calc(100% - 60px);
    }
  }
  </style>
  