import { defineStore } from 'pinia'

export const useTransferReport = defineStore('transferReport', {
  state: () => {
    return {
      transferReport: [],
      totalBirr: 0,
    }
  }
})