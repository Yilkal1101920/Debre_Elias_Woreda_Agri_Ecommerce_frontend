import { defineStore } from 'pinia'

export const uselogoutStore = defineStore('logout_store', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      logStore: false,
    }
  }
})