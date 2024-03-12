import { defineStore } from 'pinia'

export const useMedebirStore = defineStore('medebir_store', {
  
  state: () => {
    return {
      
        showMedebirBar: false,
    }
  }
})