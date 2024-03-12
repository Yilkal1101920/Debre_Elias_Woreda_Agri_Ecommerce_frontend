<script setup>
import { ref } from "vue";
import axios from "axios";
import { uselogoutStore } from "../state/logoutStore"; //import for logout display
import Swal from "sweetalert2";
import { useLanguageStore } from "../state/languageStore";
const languageStore = useLanguageStore();
const logoutSto = uselogoutStore();
const vEmail = ref("");
const password = ref("");
const confirmPassword = ref("");
const userData = ref([]);
const tryCount = ref(0);

const emailForChangeAccount = ref("");

const user_email = localStorage.getItem("user_email");

const changeEmailAndPassword = () => {
  if (password.value == confirmPassword.value) {
    getUserByEmail(vEmail.value);
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የተለያየ የይለፍ ቃል አስገብተዋል, እባክዎ የይለፍ ቃል እንደገና ያስገቡ! ",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
  }
};

const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(vEmail.value)) {
    validatePassword();
  } else {
    // alert("Please enter a valid email address");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ ኢሜል ያስገቡ! ",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
  }
};

const validatePassword = () => {
  if (/[0-9]/.test(password.value) && /[a-z]/.test(password.value)) {
    changeEmailAndPassword();
  } else {
    // alert("Please enter a valid password");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ የይለፍ ቃል ያስገቡ!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
  }
};

const changeValidation = () => {
  tryCount.value = 1;
  if (vEmail.value == "" && password.value == "") {
    // alert("email and password field is empty");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ኢሜል እና የይለፍ ቃል አላስገቡም!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
    // sweet alert end
  } else if (vEmail.value == "" && password.value != "") {
    // alert("email field is empty");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ኢሜል አልሞሉም!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log("I was closed by the timer");
      }
    });
  } else if (vEmail.value != "" && password.value == "") {
    // alert("password field is empty");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የይለፍ ቃል አልሞሉም!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  } else {
    validateEmail();
  }
};

const getUserByEmail = async (email) => {
  try {
    const userInfo = await axios.get(`http://localhost:5000/users/${email}`);
    userData.value = userInfo.data;
    emailForChangeAccount.value = userData.value.email;
    if (
      emailForChangeAccount.value == undefined ||
      emailForChangeAccount.value == user_email
    ) {
      updateEmailAndPassword(user_email);
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "ያስገቡት ኢሜል የተመዘበ ነው!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          // Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
      });
    }
  } catch (err) {}
};

const updateEmailAndPassword = async (email) => {
  await axios.put(`http://localhost:5000/users/changeAccount/${email}`, {
    email: vEmail.value,
    password: password.value,
  });
  let timerInterval;
  Swal.fire({
    position: "top-end",
    icon: "success",
    // title: "ስህተት",
    html: "Successfully changed account",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      // Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      // console.log("I was closed by the timer");
    }
  });
  localStorage.removeItem("user_email");
  localStorage.removeItem("role");
  localStorage.removeItem("kebele");
  self.location.replace("/login");
};
</script>

<template>
  <div class="bg-green-50 dark:bg-gray-800 h-full w-full">
    <!-- <div class="container px-6 py-12 w-full"> -->
    <div
      class="pt-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center items-center text-gray-800"
    >
      <div class="w-full justify-center">
        <div class="flex flex-row w-full gap-4 flex-wrap">
          <div class="mb-0 w-full mr-4">
            <input
              type="text"
              class="form-control w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              v-model="vEmail"
            />
            <div class="mb-6 ml-5">
              <p class="text-red-600" v-if="vEmail == '' && tryCount == 1">
              <p v-if="languageStore.language == 'Am'">ኢሜል አላስገቡም</p>
              <p v-if="languageStore.language == 'Am'">ኢሜል አላስገቡም</p>
              </p>
            </div>
          </div>
          <div class="mb-0">
            <input
              type="password"
              class="form-control w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              v-model="password"
            />
            <div class="mb-6 ml-5">
              <p class="text-red-600" v-if="password == '' && tryCount == 1">
                <p v-if="languageStore.language == 'En'">please enter password</p>
                <p v-if="languageStore.language == 'Am'">የይለፍ ቃል አላስገቡም</p>
              </p>
            </div>
          </div>
          <div class="mb-0">
            <input
              type="password"
              class="form-control w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Re-enter Password"
              v-model="confirmPassword"
            />
            <div class="mb-6 ml-5">
              <p class="text-red-600" v-if="confirmPassword == '' && tryCount == 1">
                <p v-if="languageStore.language == 'En'">please enter password</p>
                <p v-if="languageStore.language == 'Am'">ማረጋገጫ ይለፍ ቃል አላስገቡም</p>
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="inline-block px-10 py-2 mb-8 bg-green-300 text-gray-700 hover:text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-0 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              @click.prevent="changeValidation"
            >
              <h4 v-if="languageStore.language == 'En'">Change</h4>
              <h4 v-if="languageStore.language == 'Am'">ቀይር</h4>
            </button>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
