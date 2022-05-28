<template>
  <div class="relative">
    <header-component></header-component>
    <RouterView />
    <scrolltop-button ref="sttBtn" @click="scrollTop" class="absolute right-8 bottom-8"></scrolltop-button>
    <overlay-component></overlay-component>



  </div>
</template>
<script >
import HeaderComponent from '@/components/HeaderComponent.vue';
import ScrolltopButton from '@/components/Button/ScrolltopButton.vue';
import OverlayComponent from '@/components/OverlayComponent.vue';
export default {
  components: {
    HeaderComponent,
    ScrolltopButton,
    OverlayComponent,
  },
  methods: {
    scrollTop() {
      this.$refs.sttBtn.scrollToTop();
    },
    overlayAnimation() {
      gsap.to(".first", { duration: 1, delay: .2, left: '-100%', ease: Expo.easeInOut });
      gsap.to(".second", { duration: 1, delay: .4, left: '-100%', ease: Expo.easeInOut });
      gsap.to(".third", { duration: 1, delay: .5, left: '-100%', ease: Expo.easeInOut });
      gsap.to(".fourth", { duration: 1, delay: .6, left: '-100%', ease: Expo.easeInOut });
    }
  },
  mounted() {
    this.overlayAnimation()
  },
};
</script>

<style>
/* @import '@/assets/base.css'; */
</style>
