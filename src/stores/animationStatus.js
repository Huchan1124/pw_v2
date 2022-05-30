import { defineStore } from 'pinia'

export default  defineStore('animationStatusStore',{
  state: () => ({
    showAnimation: true,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    updateAnimationStatus() {
        this.showAnimation = false;
      },
  }
})
