<template>
  <div class="w-full h-full bg-green-50 dark:bg-gray-800">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 py-6 justify-center gap-6">
      <div class="">
        <h1 class="font-bold font-mono text-center text-red-700 dark:text-white text-7xl">
          404
        </h1>
        <h1
          class="font-bold font-mono text-center text-gray-700 dark:text-white text-3xl"
        >
          አሁን የፈለጉት ገጽ የለም!
        </h1>
      </div>
      <div class="block">
        <div>
          <p class="font-bold font-mono text-gray-700 dark:text-white text-lg">
            ከነዚህ ማስፈንጠሪያ መጠቀም ይችላሉ
          </p>
        </div>
        <div class="block font-mono font-bold text-lg text-gray-800 dark:text-white">
          <router-link to="/" class="flex gap-2 items-center hover:scale-110"
            ><span
              ><svg
                class="text-center fill-current text-green-800 h-5 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DoubleArrowOutlinedIcon"
                tabindex="-1"
                title="DoubleArrowOutlined"
              >
                <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path></svg
            ></span>
            <p
              class="font-mono font-bold text-md text-gray-800 dark:text-white hover:text-green-800 text-center"
            >
              መነሻ
            </p></router-link
          >
          <router-link to="/product" class="flex gap-2 items-center hover:scale-110"
            ><span
              ><svg
                class="text-center fill-current text-green-800 h-5 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DoubleArrowOutlinedIcon"
                tabindex="-1"
                title="DoubleArrowOutlined"
              >
                <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path></svg
            ></span>
            <p
              class="font-mono font-bold text-md text-gray-800 dark:text-white hover:text-green- text-center"
            >
              ዉጤቶች
            </p></router-link
          >
          <router-link to="/events" class="flex gap-2 items-center hover:scale-110"
            ><span
              ><svg
                class="text-center fill-current text-green-800 h-5 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DoubleArrowOutlinedIcon"
                tabindex="-1"
                title="DoubleArrowOutlined"
              >
                <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path></svg
            ></span>
            <p
              class="font-mono font-bold text-md text-gray-800 dark:text-white hover:text-green-800 text-center"
            >
              ክስተቶች
            </p></router-link
          >
          <router-link to="/about" class="flex gap-2 items-center hover:scale-110"
            ><span
              ><svg
                class="text-center fill-current text-green-800 h-5 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DoubleArrowOutlinedIcon"
                tabindex="-1"
                title="DoubleArrowOutlined"
              >
                <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path></svg
            ></span>
            <p
              class="font-mono font-bold text-md text-gray-800 dark:text-white hover:text-green-800 text-center"
            >
              ስለኛ
            </p></router-link
          >
          <router-link to="/help" class="flex gap-2 items-center hover:scale-110"
            ><span
              ><svg
                class="text-center fill-current text-green-800 h-5 w-auto"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DoubleArrowOutlinedIcon"
                tabindex="-1"
                title="DoubleArrowOutlined"
              >
                <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path></svg
            ></span>
            <p
              class="font-mono font-bold text-md text-gray-800 dark:text-white hover:text-green-800 text-center"
            >
              እገዛ
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
