<template>
  <div class="w-full h-full bg-green-50 dark:bg-gray-800">
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
        class="ml-[30%] font-mono font-bold text-2xl text-center text-gray-700 dark:text-white"
      >
        Register employee
      </p>
    </div>
    <div
      class="px-[13%] text-gray-700 dark:text-white grid md:grid-cols-3 items-center gap-4 flex-wrap pt-6 justify-center"
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
            placeholder="Identification Card"
            v-model="id"
          />
          <div class="mb-0 ml-5">
            <p class="text-red-600" v-if="id == '' && tryCount == 1">መታዎቂያ ቁጥር አላስገቡም</p>
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
            <p class="text-red-600" v-if="phone == '' && tryCount == 1">ስልክ ቁጥር አላስገቡም</p>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="block text-gray-700 text-sm font-bold mb-2">Kebele</label>
        <div class="control">
          <input
            class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Kebele"
            v-model="kebele"
          />
          <div class="mb-0 ml-5">
            <p class="text-red-600" v-if="kebele == '' && tryCount == 1">ቀበሌ አላስገቡም</p>
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
        <label class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
        <div class="control">
          <select
            class="border-green-300 shadow border rounded w-full py-2 px-3 text-gray-700"
            v-model="sex"
          >
            <option value="" selected>Gender</option>
            <option value="male" selected>Male</option>
            <option value="female">Female</option>
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
        <label class="block text-gray-700 text-sm font-bold mb-2">Role</label>
        <div class="control">
          <input
            class="border-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Role"
            v-model="role"
          />
          <div class="mb-0 ml-5">
            <p class="text-red-600" v-if="role == '' && tryCount == 1">የስራ ድርሻ አላስገቡም</p>
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
    </div>
    <div class="py-4 flex control justify-center items-center">
      <button
        class="justify-center bg-green-300 items-center hover:bg-green-700 text-white font-bold py-2 my-3 px-8 rounded"
        @click="saveInfo"
      >
        Save
      </button>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
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
const role = ref("");
const kebele = ref("");

const tryCount = ref("");

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

const saveInfo = async () => {
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
};

const checkInputField = async () => {
  if (
    first_name.value != "" &&
    last_name.value != "" &&
    id.value != "" &&
    phone.value != "" &&
    kebele.value != "" &&
    sub_kebele.value != "" &&
    village.value != "" &&
    job.value != "" &&
    sex.value != "" &&
    age.value != "" &&
    role.value != "" &&
    kebele != ""
  ) {
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
  try {
    await axios.post("http://localhost:5000/mahiberat/worker/addNewMembers", {
      fName: first_name.value,
      faName: last_name.value,
      username: id.value,
      email: id.value + "@gmail.com",
      phone: phone.value,
      kebele: kebele.value,
      subKebele: sub_kebele.value,
      village: village.value,
      job: job.value,
      sex: sex.value,
      age: age.value,
      user_role: role.value,
      kebele_id_photo: idUrl.value,
      photo: photoUrl.value,
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
    router.push("/woreda/totalEmployer");
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
