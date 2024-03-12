import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter_store', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      filterStore: 0,
      filterByName: "",
    }
  }
})