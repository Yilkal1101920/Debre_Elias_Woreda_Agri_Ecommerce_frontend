<template>
    <div class="w-full h-full bg-green-50 dark:bg-gray-800">
        <div class="font-mono font-bold text-gray-800 dark:text-white text-lg px-[2%]">
            <p class="text-2xl">Here are steps to Sign up.</p>
          <p class="flex-wrap">
                1.Enter your First name in the first field<br/>
                2.Enter your Father name in the second filed<br/>
                3.Enter your ID number like DE12345 in third field<br/>
                4.Enter your Email Address in the fourth field. You use this email latter to login in this system like name@gmail.com or name@domainname.com<br/>
                5.Enter new password in the fifth field. You use this password latter to login in this system.<br/>
                6.Confirm the above password in the sixth field. This password must be similar to the password inserted into step 5.<br/>
                7.Once you finish entering fields, Click register button or hit Enter key in your keyboard.<br/>
                <span class="font-bold text-lg pb-5"> NB:If you are registered earlier click <router-link to="/login" class="italic hover:underline">Sign in button</router-link>.</span>
            </p>
                <img src="../assets/howToLogin.PNG" alt="how to login image" class="">
           
        </div>
    </div>
    </template>
    <script setup>
    </script>
    <style scoped>
    </style>