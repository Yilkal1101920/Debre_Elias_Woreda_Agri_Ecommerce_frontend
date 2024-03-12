<template>
    <div>
        <div class="w-full justify-center h-full bg-green-50 dark:bg-gray-800">
            <form class="md:mr-[10%] justify-center sm:px-[5%] py-6">
              <!-- Email input -->
              <div class="mb-0 w-full mr-4">
                <label for="AdminEmail">Your Email</label>
                <input
                  type="text" id="AdminEmail"
                  class="form-control w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="youremail@gmail.com"
                  v-model="email"
                />
              </div>
              <div class="mb-3 ml-5">
                <p class="text-red-600" v-if="email == '' && tryCount == 1">
                  ኢሜል ቦታ ባዶ ነው
                </p>
              </div>

              <!-- Password input -->
              <div class="mb-3">
                <label for="adminPassword">Password</label>
                <input
                  type="password" id="adminPassword"
                  class="form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Passord1234"
                  v-model="password"
                />
            </div>
              <div class="mb-0">
                <label for="adminConfirmPassword">Confirm password</label>
                <input
                  type="password" id="adminConfirmPassword"
                  class="form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 hover:shadow-sm hover:shadow-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password similar to first field"
                  v-model="password"
                />
              </div>
              <div class="mb-6 ml-5">
                <p class="text-red-600" v-if="password == '' && tryCount == 1">
                  የይለፍ ቃል ቦታ ባዶ ነው
                </p>
              </div>
              
              <button
                type="submit"
                class=" px-10 hover:scale-x-110 flex justify-center py-2 bg-green-400 text-gray-700 hover:text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-0 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                @click.prevent="loginValidation"
              >
                Change Login Account
              </button>

            </form>
            
          </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>