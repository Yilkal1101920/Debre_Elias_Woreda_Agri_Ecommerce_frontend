import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language_store', {
  state: () => {
    return {
      language: "Am",
    }
  }
})