import { defineStore } from 'pinia'

export const useReportsData = defineStore('reportData', {
  state: () => {
    return {
      reportDatas: [],
      totalPrice: 0,
    }
  }
})