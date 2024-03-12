import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification_store', {
  
  state: () => {
    return {
      
        showNotificationBar: false,
        showNewNotificationStart: 0,
        showNewNotificationEnd: 0,
    }
  }
})