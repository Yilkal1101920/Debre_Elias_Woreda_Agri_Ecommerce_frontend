<template>
  <div class="flex flex-row bg-green-50 dark:bg-gray-800">
    <AdminPanel />
    <div class="flex flex-row px-8 text-gray-700 dark:text-white inset-y-0">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center p-2 px-8 pt-6 pb-8 mb-4"
      >
        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="First Name"
              v-model="first_name"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="first_name == '' && tryCount == 1">
                የመጀመሪያ ስም ቦታ ባዶ ነው
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <div class="control">
            <input
              class="border-green-300 selection:shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Last Name"
              v-model="last_name"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="last_name == '' && tryCount == 1">
                የአባት ስም ቦታ ባዶ ነው
              </p>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">ID</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="ID"
              v-model="id"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="id == '' && tryCount == 1">
                መታዎቂያ ቁጥር አላስገቡም
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="phone"
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
          <label class="block text-gray-700 text-sm font-bold mb-2">Sub Kebele</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Sub Kebele"
              v-model="sub_kebele"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="sub_kebele == '' && tryCount == 1">
                ንኡስ ቀበሌ አላስገቡም
              </p>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Village</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Village"
              v-model="village"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="village == '' && tryCount == 1">ጎጥ አላስገቡም</p>
            </div>
          </div>
        </div>

        <!-- <div class="p-2 px-8 pt-6 pb-8 mb-4 w-1/2 pl-16"> -->
        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Job</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Job"
              v-model="job"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="job == '' && tryCount == 1">ስራ አላስገቡም</p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Sex</label>
          <div class="control">
            <select
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              v-model="sex"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="sex == '' && tryCount == 1">ጾታ አላስገቡም</p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Age</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="number"
              placeholder="Age"
              v-model="age"
            />
            <div class="mb-0 ml-5">
              <p class="text-red-600" v-if="age == '' && tryCount == 1">እድሜ አላስገቡም</p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Kebele ID</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="file"
              placeholder="Kebele Id"
              @change="onIdFileChange"
            />
          </div>
        </div>

        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">Photo</label>
          <div class="control">
            <input
              class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="file"
              @change="onPhotoFileChange"
            />
          </div>
        </div>

        <div class="control mt-4">
          <button
            class="bg-green-300 hover:bg-green-700 text-white font-bold py-2 my-3 px-8 rounded"
            @click="saveInfo"
          >
            Save
          </button>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AdminPanel from "../components/AdminPanel.vue";
// sweetalert import
import Swal from "sweetalert2";

const router = useRouter();

const base64IdImage = ref("");
var selectedIdFile = ref("");
const idUrl = ref("");

const base64PhotoImage = ref("");
var selectedPhotoFile = ref("");
const photoUrl = ref("");

const first_name = ref("");
const last_name = ref("");
const id = ref("");
const phone = ref("");
const sub_kebele = ref("");
const village = ref("");
const job = ref("");
const sex = ref("");
const age = ref("");
const defaultmail = ref("");

const tryCount = ref("");

const kebele = localStorage.getItem("kebele");

onMounted(() => {
  if (
    localStorage.getItem("manager_email") == undefined ||
    localStorage.getItem("manager_email") == null ||
    localStorage.getItem("role") != "manager"
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
    base64PhotoImage.value = fileReader.result.split(",")[1];
  };
  fileReader.readAsDataURL(selectedPhotoFile);
};

const onIdFileChange = (e) => {
  selectedIdFile = e.target.files[0];

  const idFileReader = new FileReader();

  idFileReader.onload = () => {
    base64IdImage.value = idFileReader.result.split(",")[1];
  };
  idFileReader.readAsDataURL(selectedIdFile);
};

const saveInfo = async () => {
  try {
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
    await checkInputField();
  } catch (err) {
    console.log(err);
  }
};

const checkInputField = async () => {
  if (
    first_name.value != "" &&
    last_name.value != "" &&
    id.value != "" &&
    phone.value != "" &&
    sub_kebele.value != "" &&
    village.value != "" &&
    job.value != "" &&
    sex.value != "" &&
    age.value != "" &&
    kebele != ""
  ) {
    // await insertNewMemberInfo();
    await validateEthiopianPhoneNumber(phone.value);
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

const insertNewMemberInfo = async () => {
  defaultmail.value = id.value.toLowerCase() + "@gmail.com";
  try {
    await axios.post("http://localhost:5000/mahiberat/user/addNewMembers", {
      fName: first_name.value,
      faName: last_name.value,
      username: id.value,
      phone: phone.value,
      email: defaultmail.value,
      kebele: kebele,
      subKebele: sub_kebele.value,
      village: village.value,
      job: job.value,
      sex: sex.value,
      age: age.value,
      kebele_id_photo: idUrl.value,
      photo: photoUrl.value,
      user_role: "user",
      user_state: 0,
    });
    let timerInterval;
    Swal.fire({
      position: "top-end",
      icon: "success",
      // title: "ስህተት",
      html: "correctly registered!",
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
    router.push("/mahiberat/totalMembers");
  } catch (err) {
    console.log(err);
  }
};

const validateEthiopianPhoneNumber = async (phone) => {
  try {
    var regex = /^(\+251|0)(9|7)\d{8}$/;
    if (regex.test(phone)) {
      await insertNewMemberInfo();
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "warning",
        // title: "ስህተት",
        html: "Please enter Ethiopian Phone number!",
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
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
