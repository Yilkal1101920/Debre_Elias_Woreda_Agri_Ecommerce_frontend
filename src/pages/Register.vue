<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
// sweetalert import
import Swal from "sweetalert2";
import howToRegister from "../components/howToRegister.vue";
import { useLanguageStore } from "../state/languageStore";

const languageStore = useLanguageStore();

const registerHelp = ref(false);

const fname = ref("");
const lname = ref("");
const userName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const kebele = ref("");
const router = useRouter();
const userData = ref([]);
const userDataByMahiberatId = ref([]);
const memberData = ref([]);
const check_role = ref("");
const role = ref("");

const checkName = ref("");
const checkLname = ref("");
const checkUserName = ref("");
const tryCount = ref(0);
const name = ref("first name");

const signUpValidation = () => {
  tryCount.value = 1;
  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    userName.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "ያልተሞላ ቦታ አለ!",
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
  } else {
    validateEmail();
  }
};

const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
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
    signup();
  } else {
    // alert("Please enter a valid password");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "እባክዎ, ትክክለኛ የይለፍ ቃል ያስገቡ! ቢያንስ አልፈቤት እና ቁጥር መያዝ አለበት፡፡",
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
const signup = () => {
  getUserByEmail(email.value);
};

const getUserByEmail = async (email) => {
  try {
    const userInfo = await axios.get(`http://localhost:5000/users/${email}`);
    userData.value = userInfo.data;
    console.log(userData.value);
    if (userData.value.email == undefined) {
      await getUserByMahiberatId(userName.value);
      if (userDataByMahiberatId.value.user_state == 0) {
        if (confirmPassword.value == password.value) {
          saveUser();
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
      } else {
        if (userDataByMahiberatId.value.user_state == 1) {
          let timerInterval;
          Swal.fire({
            position: "top-end",
            icon: "warning",
            // title: "ስህተት",
            html: "በዚህ መታዎቂያ ከዚህ በፊት ተመዝግበዋል!",
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
        } else {
          let timerInterval;
          Swal.fire({
            position: "top-end",
            icon: "warning",
            html: "የደብረ ኤልያስ ወረዳ የማሂበራት አባል አደሉም!",
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
      }
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "በዚህ ኢሜል ከዚህ በፊት ተመዝግበዋል! ",
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
  } catch (err) {}
};

const getUserByMahiberatId = async (m_id) => {
  try {
    const userInfoByMahiberatId = await axios.get(
      `http://localhost:5000/users/userName/${m_id}`
    );
    userDataByMahiberatId.value = userInfoByMahiberatId.data;
    console.log(userDataByMahiberatId.value);
  } catch (err) {}
};

const checkTheUserIsMember = async (mahiberat_id) => {
  try {
    const memberInfo = await axios.get(
      `http://localhost:5000/mahiberat/totalMembers/${mahiberat_id}`
    );
    memberData.value = memberInfo.data;
    console.log(memberData.value);

    checkName.value = memberData.value.fName;
    checkLname.value = memberData.value.faName;
    checkUserName.value = memberData.value.username;
    kebele.value = memberData.value.kebele;
    check_role.value = memberData.value.user_role;
  } catch (err) {}
};

const saveUser = async () => {
  await checkTheUserIsMember(userName.value);
  if (check_role.value == undefined || check_role.value == null) {
    role.value = "user";
  } else {
    role.value = check_role.value;
  }

  if (
    fname.value == checkName.value &&
    lname.value == checkLname.value &&
    userName.value == checkUserName.value
  ) {
    axios.put(`http://localhost:5000/users/createAccount/${userName.value}`, {
      email: email.value,
      password: password.value,
      user_state: 1,
    });
    let timerInterval;
  Swal.fire({
    position: "top-end",
    icon: "success",
    // title: "ስህተት",
    html: "በትክክል ተመዝግበዋል!",
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
    router.push("/login");
  } else {
    // alert("You are not a member of this mahiberat");
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የዚህ ገበሬ ማህበር አባል አይደሉም!",
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
</script>

<template>
  <div
    class="bg-green-50 dark:bg-gray-800 dark:text-white w-full h-full justify-center items-center"
  >
  <div class="px-6 py-12"> 
    <div
      class="block justify-center flex-wrap items-center border border-gray-300 rounded-3xl md:mt-[1%] md:mx-[18%] md:px-[3%] shadow-lg "
     >
      <div class="block pt-6">
        <p
          class="text-2xl font-bold font-mono text-green-700 dark:text-white text-center"
          v-if="languageStore.language == 'En'"
         >
          Agri-service Members Registration Form
        </p>
        <p
          class="text-2xl font-bold font-mono text-green-700 dark:text-white text-center"
          v-if="languageStore.language == 'Am'"
        >
          የገበሬ አገልግሎት አባለ የሆኑ መለያ መመዝገቢያ ቅጽ
        </p>
        <p
          class="text-gray-700 dark:text-white text-sm font-mono font-bold text-center"
          v-if="languageStore.language == 'En'"
        >
          Fill Form Correctly
        </p>
        <p
          class="text-gray-700 dark:text-white text-sm font-mono font-bold text-center"
          v-if="languageStore.language == 'Am'"
        >
          ክፍት ቦታዎችን በትክክል ይሙሉ
        </p>
      </div>
      <div class="sm:pt-0 md:pt-7 flex justify-center">
        <form class="w-[100%]">
          <div class="formClass block justify-center items-center">
            <div
              class="name text-lg grid justify-center items-center w-full sm:grid-cols-1 md:grid-cols-2 gap-4 mb-1"
             >
              <div class="flex flex-col justify-center">
                <label for="fname" class="text-gray-700 dark:text-white">
                  <h1 v-if="languageStore.language == 'En'">First Name</h1>
                  <h1 v-if="languageStore.language == 'Am'">የመጀመሪያ ስም</h1>
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="fname"
                  placeholder="የመጀመሪያ ስም"
                  v-model="fname"
                  required
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="fname == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill your name</p>
                    <p v-if="languageStore.language == 'Am'">የመጀመሪያ ስም ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <label
                  for="lname"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >
                  <h1 v-if="languageStore.language == 'En'">Last Name</h1>
                  <h1 v-if="languageStore.language == 'Am'">የአባት ስም</h1>
                  </label
                >
                <input
                  type="text"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="lname"
                  placeholder="የአባት ስም"
                  v-model="lname"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="lname == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill last name</p>
                    <p v-if="languageStore.language == 'Am'">የአባት ስም ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <label
                  for="phone"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >
                  <h1 v-if="languageStore.language == 'En'">ID</h1>
                  <h1 v-if="languageStore.language == 'Am'">መለያ ስም</h1>
                  </label
                >
                <input
                  type="text"
                  class="w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="መለያ ስም"
                  v-model="userName"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userName == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill id field</p>
                    <p v-if="languageStore.language == 'Am'">መለያ ስም ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <label
                  for="email"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >
                  <h1 v-if="languageStore.language == 'En'">Email</h1>
                  <h1 v-if="languageStore.language == 'Am'">ኢሜል</h1>
                  </label
                >
                <input
                  type="email"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="ኢሜል"
                  v-model="email"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="email == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill email field</p>
                    <p v-if="languageStore.language == 'Am'">ኢሜል ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <label
                  for="exampleInputPassword1"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >
                  <h1 v-if="languageStore.language == 'En'">Password</h1>
                  <h1 v-if="languageStore.language == 'Am'">የይለፍ ቃል</h1>
                  </label
                >
                <input
                  type="password"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputPassword1"
                  placeholder="የይለፍ ቃል"
                  v-model="password"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="password == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill password field</p>
                    <p v-if="languageStore.language == 'Am'">የይለፍ ቃል ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <label
                  for="exampleInputPassword1"
                  class="form-label inline-block text-gray-700 dark:text-white"
                  >
                  <h1 v-if="languageStore.language == 'En'">Confirm Password</h1>
                  <h1 v-if="languageStore.language == 'Am'">የማረጋገጫ ይለፍ ቃል</h1>
                  </label
                >
                <input
                  type="password"
                  class="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 dark:text-white focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputPassword1"
                  placeholder="ድጋሜ ይለፍ ቃል"
                  v-model="confirmPassword"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="confirmPassword == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill confirm password field</p>
                    <p v-if="languageStore.language == 'Am'">የማረጋገጫ ይለፍ ቃል ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
            </div>
            <div class="submitButton flex justify-center">
              <button
                type="submit"
                class="register w-[30%] text-2xl py-2 hover:scale-110 text-white font-bold font-mono my-5 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click.prevent="signUpValidation"
              >
                <h1 v-if="languageStore.language == 'En'">Register</h1>
                <h1 v-if="languageStore.language == 'Am'">ተመዝገብ</h1>
              </button>
            </div>
            <p
              class="loginRedirect flex flex-row gap-1 items-center text-lg font-mono font-bold text-center mb-5 justify-center text-1.5xl text-black dark:text-white"
            >
              <h1 v-if="languageStore.language == 'En'">have an account?</h1>
              <h1 v-if="languageStore.language == 'Am'">ከአሁን በፊት ተመዝግበሃል?</h1>
              <router-link to="/login">
                <span
                  class="hover:text-green-700 hover:cursor-pointer text-blue-800 text-lg font-mono font-bold"
                  >
                  <h1 v-if="languageStore.language == 'En'">login</h1>
                  <h1 v-if="languageStore.language == 'Am'">በዚህ ግባ</h1>
                  </span
                >
              </router-link>
            </p>
          </div>
        </form>
      </div>
      <div class="grid sm:grid-cols-1 lg:grid-cols-2">
        <p
          class="loginRedirect flex flex-row sm:gap-1 md:gap-1 items-center justify-center text-lg font-mono font-bold mb-5  text-1.5xl text-black dark:text-white"
        >
          <h1 v-if="languageStore.language == 'En'">Not a mahiberat user?</h1>
          <h1 v-if="languageStore.language == 'Am'">የማህበራት ተጠቃሚ አባል አይደለህም?</h1>
          <router-link to="/registerNotMemberOfMahiberat">
            <span
              class="hover:text-green-700 hover:cursor-pointer text-blue-800 text-lg font-mono font-bold"
              >
              <h1 v-if="languageStore.language == 'En'">Register here</h1>
              <h1 v-if="languageStore.language == 'Am'">በዚህ ተመዝገብ</h1>
              </span
            >
          </router-link>
        </p>
        <button
          @click="registerHelp = !registerHelp"
          class="hover:text-green-700 pb-5 hover:cursor-pointer text-blue-800 text-lg font-mono font-bold"
        >
          <h1 v-if="languageStore.language == 'En'">how to register?</h1>
          <h1 v-if="languageStore.language == 'Am'">እንዴት ልመዝገብ?</h1>
        </button>
      </div>
      <div v-show="registerHelp">
        <howToRegister />
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
.register {
  background: #17cf97;
}
@media screen and (max-width: 600px) {
  .formClass {
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
  }
  img {
    height: 150px;
    width: auto;
  }
  form .name {
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }
  .user {
    justify-content: center;
  }
  .address {
    justify-content: center;
  }
  .Password {
    justify-content: center;
  }
  .submitButton {
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .role {
    justify-content: center;
    width: 80%;
  }
  .loginRedirect {
    justify-content: center;
    /* padding-left: 100px; */
  }
}
</style>
