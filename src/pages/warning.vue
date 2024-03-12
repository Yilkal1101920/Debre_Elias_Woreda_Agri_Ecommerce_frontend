<template>
  <div
    v-show="!closeWarning"
    class="w-full h-full bg-green-50 dark:bg-gray-700 flex py-4 justify-center"
  >
    <div
      class="py-5 mx-8 bg-yellow-100 shadow-md rounded-lg px-8 pr-4 border border-yellow-600"
    >
      <div class="flex justify-between">
        <p class="font-mono font-bold text-lg text-red-500 dark:text-white">Warning!</p>
        <p @click="closeWarning = !closeWarning" class="justify">
          <svg
            class="w-auto h-7 cursor-pointer fill-current text-slate-700 rounded-full hover:bg-slate-300"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseOutlinedIcon"
            tabindex="-1"
            title="CloseOutlined"
          >
            <path
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            ></path>
          </svg>
        </p>
      </div>
      <p class="font-mono font-bold text-sm text-gray-800 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, mollitia nam
        maiores quia officiis laboriosam dolores pariatur incidunt reprehenderit
        asperiores vel ea enim qui autem earum iste! Quia, porro quod.
      </p>
      <p
        v-show="knowMoreActivate"
        class="font-mono font-bold text-sm text-gray-800 dark:text-white"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit
        accusamus, ratione velit molestias cupiditate obcaecati architecto rerum nulla
        iure at perspiciatis amet! Ut, tenetur obcaecati. Quibusdam vitae ab expedita.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsum molestiae
        cumque, a minima dolore architecto rem debitis, iusto alias ducimus reiciendis
        illo mollitia id. Adipisci iste dolor suscipit provident? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Debitis impedit accusamus, ratione velit
        molestias cupiditate obcaecati architecto rerum nulla iure at perspiciatis amet!
        Ut, tenetur obcaecati. Quibusdam vitae ab expedita. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Aliquam ipsum molestiae cumque, a minima dolore
        architecto rem debitis, iusto alias ducimus reiciendis illo mollitia id. Adipisci
        iste dolor suscipit provident? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Debitis impedit accusamus, ratione velit molestias cupiditate obcaecati
        architecto rerum nulla iure at perspiciatis amet! Ut, tenetur obcaecati. Quibusdam
        vitae ab expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aliquam ipsum molestiae cumque, a minima dolore architecto rem debitis, iusto
        alias ducimus reiciendis illo mollitia id. Adipisci iste dolor suscipit provident?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit
        accusamus, ratione velit molestias cupiditate obcaecati architecto rerum nulla
        iure at perspiciatis amet! Ut, tenetur obcaecati. Quibusdam vitae ab expedita.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsum molestiae
        cumque, a minima dolore architecto rem debitis, iusto alias ducimus reiciendis
        illo mollitia id. Adipisci iste dolor suscipit provident?
      </p>
      <div class="flex gap-4 items-center justify-around py-5">
        <button
          v-show="!knowMoreActivate"
          @click="knowMoreActivate = !knowMoreActivate"
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          Know more
        </button>
        <button
          v-show="knowMoreActivate"
          @click="knowMoreActivate = !knowMoreActivate"
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          View less
        </button>
        <button
          class="bg-green-400 hover:text-white text-lg font-mono font-bold py-2 rounded-lg px-8 hover:scale-x-110"
        >
          <router-link to="/chat"> Contact us</router-link>
        </button>

        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const knowMoreActivate = ref(false);
const closeWarning = ref(false);
</script>

<style scoped></style>
