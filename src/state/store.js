import { defineStore } from 'pinia'

export const useCounterStore = defineStore('count_cart', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      totalCount: 0,
      inputValue:0,
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    totalCart() {
      this.count=this.inputValue;
      this.totalCount=this.totalCount+this.count;
    },
  },
})