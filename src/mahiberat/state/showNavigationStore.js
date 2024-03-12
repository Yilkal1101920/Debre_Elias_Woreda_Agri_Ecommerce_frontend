import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation_store', {
  
  state: () => {
    return {
      
        showSideBar: false,
    }
  }
})