import { defineStore } from 'pinia'

export const usedashboardStore = defineStore('dashboard', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      dashStore: false,
    }
  }
})