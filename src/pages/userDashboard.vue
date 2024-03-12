<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
    <!-- <div class="grid sm:grid-cols-1 md:grid-cols-2"> -->
    <div class="text-black dark:text-white px-14 py-8 ">
      <div class="block border border-gray-300 p-8">
        <div class="flex gap-5 justify-between flex-wrap px-5 ">
          <div class="block items-center">
            <div v-for="member in mahiberatMember">
              <div v-if="userID == member.username">
                <img
                  class="h-36 w-36 mt-2 border rounded-full hover:scale-110"
                  :src="member.photo"
                  alt="image"
                />
                <form action="">
                  <input
                    type="file"
                    name="photo"
                    @change="onPhotoFileChange"
                    id="profilePhoto"
                  />
                </form>
                <button
                  class="text-white bg-green-300 hover:bg-green-700 p-2 px-4 my-2 rounded-lg font-bold font-mono text-lg"
                  @click.prevent="updateUserPhotobyUserName(userID)"
                >
                  <h4 v-if="languageStore.language == 'En'">change photo</h4>
                  <h4 v-if="languageStore.language == 'Am'">ፎቶ ቀይር</h4>
                </button>
                <!-- </div> -->
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <p class="text-gray-700 dark:text-white font-mono font-bold text-lg">
              {{ userName }} {{ userFatherName }}
            </p>
           
          </div>
          <div>
            <button
              type="submit"
              class="pl-8 text-gray-700 dark:text-white font-mono font-bold text-lg hover:text-orange-500"
              @click.prevent="getDashBoard"
            >
              <h4 v-if="languageStore.language == 'En'" class="border border-blue-600 px-6 py-2 hover:bg-green-700">Dashboard</h4>
              <h4 v-if="languageStore.language == 'Am'" class="border border-blue-600 px-6 py-2 hover:bg-green-700">ዳሽቦርድ</h4>
            </button>
          </div>
        </div>

        <div class="">
          <form>
            <div class="form-group mb-1 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
              <div class="form-group mb-1">
                <label
                  for="fname"
                  class="form-label inline-block mb-2 text-gray-700 dark:text-white"
                  ><h4 v-if="languageStore.language == 'En'">First Name</h4>
                  <h4 v-if="languageStore.language == 'Am'">የመጀመሪያ ስም</h4></label
                >
                <input
                  type="text"
                  class="form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="fname"
                  placeholder="First Name"
                  disabled="disabled"
                  v-model="userName"
                />
                <div class="mb-0 ml-5">
                  <p
                    class="text-red-600"
                    v-if="userName == '' && tryCount == 1"
                  >
                    <p v-if="languageStore.language == 'En'">please write your name</p>
                    <p v-if="languageStore.language == 'Am'">የመጀመሪያ ስም ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="form-group mb-1">
                <label
                  for="lname"
                  class="dark:text-white form-label inline-block mb-2 text-gray-700"
                  ><h4 v-if="languageStore.language == 'En'">Father Name</h4>
                  <h4 v-if="languageStore.language == 'Am'">የአባት ስም</h4></label
                >
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="lname"
                  placeholder="Last Name"
                  disabled="disabled"
                  v-model="userFatherName"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userFatherName == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please fill your father name field</p>
                    <p v-if="languageStore.language == 'Am'">የአባት ስም ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="form-group mb-1">
                <label
                  for="phone"
                  class="dark:text-white form-label inline-block mb-2 text-gray-700"
                  ><h4 v-if="languageStore.language == 'En'">Phone number</h4>
                  <h4 v-if="languageStore.language == 'Am'">ስልክ ቁጥር</h4></label
                >
                <input
                  type="phone"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="phone"
                  placeholder="Phone"
                  v-model="userPhone"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userPhone == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please enter your phone number</p>
                    <p v-if="languageStore.language == 'Am'">ስልክ ቁጥር ቦታ ባዶ ነው</p>
                  </p>
                </div>
              </div>
              <div class="form-group mb-1">
                <label class="dark:text-white form-label inline-block mb-2 text-gray-700"
                  >
                  <h4 v-if="languageStore.language == 'En'">Kebele</h4>
                  <h4 v-if="languageStore.language == 'Am'">ቀበሌ</h4></label
                >
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="userKebele"
                  disabled="disabled"
                  placeholder="sub kebele"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userKebele == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please enter your kebele</p>
                    <p v-if="languageStore.language == 'Am'">ቀበሌ አላስገቡም</p>
                  </p>
                </div>
              </div>
              <div class="form-group mb-1">
                <label class="dark:text-white form-label inline-block mb-2 text-gray-700"
                  ><h4 v-if="languageStore.language == 'En'">Sub Kebele</h4>
                  <h4 v-if="languageStore.language == 'Am'">ንኡስ ቀበሌ</h4>
                  </label
                >
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="userSubKebele"
                  placeholder="sub kebele"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userSubKebele == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please enter your sub kebele</p>
                    <p v-if="languageStore.language == 'Am'">ንኡስ ቀበሌ አላስገቡም</p>
                  </p>
                </div>
              </div>
              <div class="form-group mb-1">
                <label class="dark:text-white form-label inline-block mb-2 text-gray-700"
                  >
                  <h4 v-if="languageStore.language == 'En'">Village</h4>
                  <h4 v-if="languageStore.language == 'Am'">ጎጥ</h4>
                  </label
                >
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="userVillage"
                  placeholder="village"
                />
                <div class="mb-0 ml-5">
                  <p class="text-red-600" v-if="userVillage == '' && tryCount == 1">
                    <p v-if="languageStore.language == 'En'">please enter your village address</p>
                    <p v-if="languageStore.language == 'Am'">ጎጥ አላስገቡም</p>
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="text-lg hover:scale-x-110 font-mono font-bold px-8 py-2 my-2 bg-green-300 text-white hover:text-white rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              @click.prevent="updateProfile(user_email)"
            >
              <h4 v-if="languageStore.language == 'En'">Edit Profile</h4>
              <h4 v-if="languageStore.language == 'Am'">መረጃህን አስተካክል</h4>
            </button>
          </form>
        </div>
      </div>
        <div class="pt-3 border border-gray-300 p-8">
          <p
            class="text-lg font-mono font-bold text-center text-gray-700 dark:text-white"
          >
            <p v-if="languageStore.language == 'En'">change email and password</p>
            <p v-if="languageStore.language == 'Am'">ኢሜል እና የይለፍ ቃል ይቀይሩ</p>
          </p>
          <changeEmailAndPassword />
        </div>
    </div>
    <div class="border border-gray-300 p-8 pt-3 mx-10">
      <p class="text-lg font-mono font-bold text-center text-gray-700 dark:text-white">
        <p v-if="languageStore.language == 'En'">Your recent ordered</p>
        <p v-if="languageStore.language == 'Am'">አሁን ያዘዝሀቸው</p>
      </p>
      <cart />
    </div>
    <div class="border border-gray-300 p-8 pt-3 mx-10">
      <p class="text-lg font-mono font-bold text-center text-gray-700 dark:text-white">
        <p v-if="languageStore.language == 'En'">የቀደም ግብይቶች</p>
        <p v-if="languageStore.language == 'Am'">Previous Transaction</p>
      </p>
      <TransactionHistory />
    </div>
    <div class="pt-3 border border-gray-300 p-8 mx-10 ">
      <p class="text-lg font-mono font-bold text-center text-gray-700 dark:text-white">
        <p v-if="languageStore.language == 'En'">Conversation</p>
        <p v-if="languageStore.language == 'Am'">ያደረካቸው ግንኙነቶች/መጠይቆች</p>
      </p>
      <button
        class="text-white bg-green-300 hover:bg-green-700 p-2 px-4 my-2 rounded-lg font-bold font-mono text-lg"
        @click="chat_display = !chat_display"
      >
        <p v-if="languageStore.language == 'En'">Conversation</p>
        <p v-if="languageStore.language == 'Am'">ጥያቄ እና መልሶች</p>
      </button>
      <userChat v-if="chat_display" />
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import cart from "../pages/cart.vue";
import TransactionHistory from "../pages/payedProductOrders.vue";
import userChat from "../pages/Chat.vue";
import changeEmailAndPassword from "../pages/changeEmailAndPassword.vue";
import Swal from "sweetalert2";
import { useLanguageStore } from "../state/languageStore";

const languageStore = useLanguageStore();

const router = useRouter();

const getUserEmail = ref([]);

const userName = ref("");
const userFatherName = ref("");
const userPhone = ref("");
const userKebele = ref("");
const userSubKebele = ref("");
const userVillage = ref("");
const userID = ref("");
const userEmailForProfileEdit = ref("");

const mahiberatMember = ref("");

const user_email = localStorage.getItem("user_email");

const chat_display = ref(false);

const base64PhotoImage = ref("");
var selectedPhotoFile = ref("");
const photoUrl = ref("");

const tryCount = ref(0);

const checkName = ref("");
const checkLname = ref("");
const checkUserName = ref("");
const memberData = ref([]);

onMounted(async () => {
  if (
    localStorage.getItem("user_email") == undefined ||
    localStorage.getItem("user_email") == null ||
    localStorage.getItem("role") != "user" ||
    localStorage.getItem("user_state") != 1
  ) {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "please login first!",
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
    router.replace("/login");
  }

  userEmailForProfileEdit.value = user_email;

  await getUserByEmail(user_email);
});

const updateProfile = (email) => {
  tryCount.value = 1;
  if (
    userName.value == "" ||
    userFatherName.value == "" ||
    userPhone.value == "" ||
    userEmailForProfileEdit.value == "" ||
    userKebele.value == "" ||
    userSubKebele.value == "" ||
    userVillage.value == ""
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
    updateUserProfilebyEmail(email);
  }
};
const getUserByEmail = async (email) => {
  try {
    const getUser = await axios.get(`http://localhost:5000/users/${email}`);
    getUserEmail.value = getUser.data;
    userName.value = getUser.data.fName;
    userFatherName.value = getUser.data.faName;
    userPhone.value = getUser.data.phone;
    userKebele.value = getUser.data.kebele;
    userSubKebele.value = getUser.data.subKebele;
    userVillage.value = getUser.data.village;
    userID.value = getUser.data.username;
    await getUserByUserName();
  } catch (err) {}
};

const getUserByUserName = async () => {
  try {
    const getMember = await axios.get("http://localhost:5000/users");
    mahiberatMember.value = getMember.data;
  } catch (err) {}
};

const updateUserProfilebyEmail = async (email) => {
  await checkTheUserIsMember(userID.value);
  if (checkName.value == userName.value && checkLname.value == userFatherName.value) {
    try {
      await axios.put(`http://localhost:5000/users/profile/${email}`, {
        subKebele: userSubKebele.value,
        kebele: userKebele.value,
        village: userVillage.value,
        fName: userName.value,
        faName: userFatherName.value,
        phone: userPhone.value,
        email: email,
      });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "success",
        // title: "ስህተት",
        html: "Successfully changed your profile",
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
      router.replace("/userDashboard/");
    } catch (err) {}
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የዚህ ገበሬ ማህበር አባል አይደሉም!",
      timer: 2000,
      timerProgressBar: true,
      // didOpen: () => {
      //   // Swal.showLoading();
      //   const b = Swal.getHtmlContainer().querySelector("b");
      //   timerInterval = setInterval(() => {
      //     b.textContent = Swal.getTimerLeft();
      //   }, 100);
      // },
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

const onPhotoFileChange = (e) => {
  selectedPhotoFile = e.target.files[0];

  const fileReader = new FileReader();

  fileReader.onload = () => {
    console.log(fileReader.result);
    base64PhotoImage.value = fileReader.result.split(",")[1];
  };
  fileReader.readAsDataURL(selectedPhotoFile);
  console.log(e.target.files[0]);
};

const getPhoto = async () => {
  if (base64PhotoImage.value != "") {
    const fetchData = await axios.post("http://localhost:5000/uploadPhoto", {
      base64: base64PhotoImage.value,
      name: "photo",
    });
    photoUrl.value = fetchData.data.url;
  }
};

const updateUserPhotobyUserName = async (id) => {
  await getPhoto();
  try {
    axios.put(`http://localhost:5000/mahiberat/totalMembers/profile/${id}`, {
      photo: photoUrl.value,
    });
    self.location.replace("/userDashboard");
  } catch (err) {}
};

const checkTheUserIsMember = async (id) => {
  try {
    const memberInfo = await axios.get(
      `http://localhost:5000/mahiberat/totalMembers/${id}`
    );
    memberData.value = memberInfo.data;
    console.log(memberData.value);

    checkName.value = memberData.value.fName;
    checkLname.value = memberData.value.faName;
    checkUserName.value = memberData.value.username;
  } catch (err) {}
};

const getDashBoard = () => {
  router.push("/farmer/dashboard");
};
</script>
<style scoped>
@media screen and(max-width:600px) {
  .userProfile {
    display: block;
  }
}
@media screen and(min-width:640px) {
  .userProfile {
    display: flex;
  }
}
</style>
