import { defineStore } from 'pinia'

export const useForgotPasswordStore = defineStore('forgot_password', {
  state: () => {
    return {
      accountEmail: "",
      count: 0,
      verificationCode: 100000,
      dialogState: false,
    }
  }
})