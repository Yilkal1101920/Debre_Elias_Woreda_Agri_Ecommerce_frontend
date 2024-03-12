<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800 w-full h-full">
    <!-- <div class="inset-y-0"> -->
    <div class="pl-8 w-full">
      <div class="flex items-center">
        <div class="flex gap-1 items-center pl-9 py-3">
          <router-link to="/woreda/dashboard">
            <span
              ><svg
                class="fill-current h-8 w-auto text-green-600 hover:text-green-900 cursor-pointer"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowCircleLeftOutlinedIcon"
                tabindex="-1"
                title="ArrowCircleLeftOutlined"
              >
                <path
                  d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"
                ></path></svg
            ></span>
          </router-link>
          <p class="text-gray-700 dark:text-white">Back to Dashboard</p>
        </div>
        <p
          class="ml-[30%] font-mono font-bold text-lg text-center text-gray-700 dark:text-white"
        >
          Edit employee's information
        </p>
      </div>
      <div class="justify-center px-8 w-full">
        <div
          class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center py-4 text-gray-700 dark:text-white"
        >
          <!-- <div class="flex flex-row pl-10"> -->
          <!-- <div class="p-2 px-8 pt-6 pb-8 mb-4"> -->
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                v-model="name"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="name == '' && tryCount == 1">
                  የመጀመሪያ ስም ቦታ ባዶ ነው
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name"
                v-model="fatherName"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="fatherName == '' && tryCount == 1">
                  የአባት ስም ቦታ ባዶ ነው
                </p>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">User Name</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="User Name"
                v-model="username"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="username == '' && tryCount == 1">
                  መታዎቂያ ቁጥር አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone"
                v-model="phone"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="phone == '' && tryCount == 1">
                  ስልክ ቁጥር አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Kebele</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Kebele"
                v-model="kebele"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="kebele == '' && tryCount == 1">
                  ቀበሌ አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Role</label>
            <div class="control">
              <input
                class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Role"
                v-model="role"
              />
              <div class="mb-0 ml-5">
                <p class="text-red-600" v-if="role == '' && tryCount == 1">
                  የስራ ድርሻ አላስገቡም
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Kebele Id Photo</label
            >
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                @change="onIdFileChange"
              />
            </div>
          </div>
          <div class="field">
            <label class="block text-gray-700 text-sm font-bold mb-2">Photo</label>
            <div class="control">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                @change="onPhotoFileChange"
              />
            </div>
          </div>
          <!-- </div> -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
        <div class="flex justify-center items-center pt-1 pb-4 gap-4">
          <button
            class="bg-green-300 hover:bg-green-700 text-white font-mono text-lg font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            @click="saveInfo(username)"
          >
            Edit
          </button>
          <router-link to="/woreda/totalEmployer"
            ><button
              class="bg-red-300 hover:bg-red-700 text-white font-mono text-lg font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useEmployerStore } from "../state/employerStore";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

var selectEmployer = useEmployerStore();
const router = useRouter();

const base64IdImage = ref("");
var selectedIdFile = ref("");
const idUrl = ref("");

const base64PhotoImage = ref("");
var selectedPhotoFile = ref("");
const photoUrl = ref("");

const name = ref(selectEmployer.name);
const fatherName = ref(selectEmployer.fatherName);
const username = ref(selectEmployer.username);
const phone = ref(selectEmployer.phone);
const kebele = ref(selectEmployer.kebele);
const role = ref(selectEmployer.role);

const tryCount = ref("");

const checkUserIsMember = ref("");
onMounted(() => {
  if (
    localStorage.getItem("woreda_admin_email") == undefined ||
    localStorage.getItem("woreda_admin_email") == null ||
    localStorage.getItem("role") != "woreda_admin"
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
});

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

const onIdFileChange = (e) => {
  selectedIdFile = e.target.files[0];

  const idFileReader = new FileReader();

  idFileReader.onload = () => {
    console.log(idFileReader.result);
    base64IdImage.value = idFileReader.result.split(",")[1];
  };
  idFileReader.readAsDataURL(selectedIdFile);
  console.log(e.target.files[0]);
};

const saveInfo = async (username) => {
  tryCount.value = 1;
  if (base64PhotoImage.value != "") {
    const fetchData = await axios.post("http://localhost:5000/uploadPhoto", {
      base64: base64PhotoImage.value,
      name: "photo",
    });
    console.log(fetchData.data);

    console.log("before");
    photoUrl.value = fetchData.data.url;
    console.log(photoUrl.value);
    console.log("after");
  }

  if (base64IdImage.value != "") {
    const fetchIdData = await axios.post("http://localhost:5000/KebeleIdImage", {
      base64: base64IdImage.value,
      name: "IdImage",
    });
    console.log(fetchIdData.data);
    idUrl.value = fetchIdData.data.url;
    console.log("before");
    console.log(idUrl.value);
    console.log("after");
  }

  await checkInputField(username);
};

const checkInputField = async (id) => {
  if (
    name.value != "" &&
    fatherName.value != "" &&
    username.value != "" &&
    phone.value != "" &&
    kebele.value != "" &&
    role.value != ""
  ) {
    await saveOrder(id);
  } else {
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
  }
};
const saveOrder = async (id) => {
  await checkTheUserIsMember(id);
  if (
    checkUserIsMember.value == undefined ||
    (checkUserIsMember.value != undefined &&
      selectEmployer.checkUsername == checkUserIsMember.value)
  ) {
    try {
      await axios.put(
        `http://localhost:5000/mahiberat/totalMembers/edit/${selectEmployer.checkUsername}`,
        {
          first_name: name.value,
          last_name: fatherName.value,
          mahiberat_id: username.value,
          phone: phone.value,
          kebele: kebele.value,
          user_role: role.value,
          kebele_id_photo: idUrl.value,
          photo: photoUrl.value,
        }
      );
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "success",
        // title: "ስህተት",
        html: "Successfully changed",
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
      router.replace("/woreda/totalEmployer");
    } catch (err) {
      console.log(err);
    }
  } else {
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "warning",
      // title: "ስህተት",
      html: "የሌላ ሰው መታዎቂያ አስገብተዋል!",
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

const checkTheUserIsMember = async (id) => {
  try {
    const memberInfo = await axios.get(
      `http://localhost:5000/mahiberat/totalMembers/${id}`
    );
    checkUserIsMember.value = memberInfo.data.mahiberat_id;
  } catch (err) {}
};
</script>

<style scoped></style>
