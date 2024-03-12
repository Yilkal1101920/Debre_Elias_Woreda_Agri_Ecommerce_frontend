import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat_store', {
  
  state: () => {
    return {
      
        chatEmail: "",
        chatSelector: 0,
    }
  }
})