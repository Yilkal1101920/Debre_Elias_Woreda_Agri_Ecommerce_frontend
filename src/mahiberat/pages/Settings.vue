<template>
    <div class="w-full h-full bg-green-50 dark:bg-gray-700">
        <div class="flex gap-5 w-full">
            <adminPannel/>
    <form action="" class="w-full mr-6 text-gray-800 dark:text-gray-800">
        <div class="flex items-center justify-between py-5 bg-slate-50 w-full px-6 rounded-lg mt-5">
        <div class="flex items-center gap-2 py-5">
            <label for="productNo" class="font-mono font-bold text-lg">Product per page</label>
            <select name="" id="productNo" class="cursor-pointer" v-model="numberOfProduct">
                <option value="">All</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Save" class="bg-green-400 hover:bg-green-700 hover:scale-x-110 cursor-pointer rounded-lg text-white text-lg font-mono font-bold py-1.5 px-8">
        </div>
    </div>
    <div class="flex flex-col h-auto gap-3 bg-slate-50 w-full px-6 rounded-lg my-5 pb-5">
    <div @click="hideFilter =! hideFilter" class="flex gap-1 items-center cursor-pointer">
        <p class="font-mono font-bold text-lg">Filters and Category</p>
        <span  v-show="!hideFilter">  <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            class="h-7 w-auto p-1"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg></span>
          <span  v-show="hideFilter"><svg class="h-8 w-auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpOutlinedIcon" tabindex="-1" title="ArrowDropUpOutlined"><path d="m7 14 5-5 5 5H7z"></path></svg></span>
        </div>
            <div v-show="hideFilter">
                <form action="" class="flex flex-col gap-2">
                    <div class="flex gap-2 items-center">
                    <input type="checkbox" name="enableFilter" id="enableFilter" v-model="enableFilter">
                    <label for="enableFilter">Enable filter</label>
                </div>
            <div class="flex gap-2 items-center">
                <input type="checkbox" name="enableFilterByName" id="enableFilterByName" v-model="enableFilterByName">
                    <label for="enableFilterByName">Enable filter by name</label>
                </div>
            <div class="flex gap-2 items-center"> 
                <input type="checkbox" name="enableFilterByPrice" id="enableFilterByPrice" v-model="enableFilterByPrice">
                    <label for="enableFilterByPrice">Enable filter by price</label>
                </div>
            <div class="flex gap-2 items-center">
             <input type="checkbox" name="enableFilterByCategory" id="enableFilterByCategory" v-model="enableFilterByCategory">
                    <label for="enableFilterByCategory">Enable filter by Category</label>
                </div>
                </form>
            </div>
          </div>
        
    
    <div class="py-5 bg-slate-50 w-full px-6 rounded-lg">
        <p class="font-mono font-bold text-lg pb-4">Display Settings</p>
        <div class="flex flex-row gap-5 items-center justify-between pr-28">
        <div class="flex flex-col gap-5">
<div class="flex items-center gap-2"> 
<input type="checkbox" name="hideVariant" id="hideVariant" v-model="hideVariant">
<label for="hideVariant">Hide Variants</label>
</div>
<div class="flex items-center gap-2"> 
<input type="checkbox" name="enableVariant" id="enableVariant" v-model="enableVariantSelection">
<label for="enableVariant">Enable variants selection</label>
</div>
<div class="flex items-center gap-2"> 
<input type="checkbox" name="showPrice" id="showPrice" v-model="showPrice">
<label for="showPrice">show price</label>
</div>
        </div>
        <div class="flex flex-col gap-5">
<div class="flex items-center gap-2"> 
<input type="checkbox" name="showStockAvailability" id="showStockAvailability" v-model="showStockAvailability">
<label for="showStockAvailability">show stock availability</label>
</div>
<div class="flex items-center gap-2"> 
<input type="checkbox" name="showStockQuantity" id="showStockQuantity" v-model="showStockQuantity">
<label for="showStockQuantity">show stock quantity</label>
</div>
<div class="flex items-center gap-2"> 
<input type="checkbox" name="variant" id="showQuantityMeasurement" v-model="showQuantityMeasurement">
<label for="showQuantityMeasurement">show order quantity measurement</label>
</div>
        </div>
        <div class="flex flex-col gap-5">
<div class="flex items-center gap-2"> 
<input type="checkbox" name="EnableOrder" id="EnableOrder" v-model="EnableOrder">
<label for="EnableOrder">Enable order</label>
</div>
<div class="flex items-center gap-2"> 
<input type="checkbox" name="enableContactButton" id="enableContactButton" v-model="enableContactButton">
<label for="enableContactButton">Enable contact button</label>
</div>
<div class="flex items-center gap-2"> 
<input type="checkbox" name="EnableAccountActivation" id="EnableAccountActivation" v-model="EnableAccountActivation">
<label for="EnableAccountActivation">Enable account activation</label>
</div>
        </div>

    </div>
    </div>
    </form>
</div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import adminPannel from '../components/AdminPanel.vue';
const hideFilter = ref(false);
const numberOfProduct = ref([]);
const enableFilter = ref([]);
const enableFilterByName = ref([]);
const enableFilterByPrice = ref([]);
const enableFilterByCategory = ref([]);
const hideVariant = ref([]);
const enableVariantSelection = ref([]);
const showPrice = ref([]);
const showStockAvailability = ref([]);
const showStockQuantity = ref([]);
const showQuantityMeasurement = ref([]);
const EnableOrder = ref([]);
const enableContactButton = ref([]);
const EnableAccountActivation = ref([]);

</script>

<style scoped>

</style>