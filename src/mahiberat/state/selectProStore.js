import { defineStore } from 'pinia'

export const useSelectStore = defineStore('productId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      itemId: 0,
      product_id: 0,
      category: '',
      product_type: '',
      title: '',
      price: 0,
      orginal_cost: 0,
      amount: 0,
      address: '',
      description: ''
    }
  }
})