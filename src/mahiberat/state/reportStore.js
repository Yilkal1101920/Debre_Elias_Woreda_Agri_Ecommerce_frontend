import { defineStore } from 'pinia'

export const reportData = defineStore('oneYearReportData', {
  state: () => {
    return {
      selectedYear: '2023',
    }
  }
})