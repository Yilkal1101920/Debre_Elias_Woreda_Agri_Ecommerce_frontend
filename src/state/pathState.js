import { defineStore } from 'pinia'

export const usePathData = defineStore('pathData', {
  state: () => {
    return {
      currentPath: window.location.pathname,
    }
  }
})