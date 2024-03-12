import { defineStore } from 'pinia'

export const usePaymentMode = defineStore('paymentMode', {
  state: () => {
    return {
      paymentMode: "chapa",
    }
  }
})