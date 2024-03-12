import { defineStore } from 'pinia'

export const useHeaderShowStore = defineStore('headershow_store', {
  
  state: () => {
    return {
        headerShow: false,
    }
  }
})