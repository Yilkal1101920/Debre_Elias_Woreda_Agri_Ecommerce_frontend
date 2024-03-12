import { defineStore } from 'pinia'

export const useEmployerStore = defineStore('employerStore', {
  state: () => {
    return {
      name: '',
      fatherName: '',
      username: '',
      checkUsername: '',
      phone: '',
      kebele: '',
      idPhoto: '',
      photo: '',
      role:'',
    }
  }
})