<template>
  <div class="relative">
    <header-component></header-component>
    <RouterView />
    <scrolltop-button ref="sttBtn" @click="scrollTop" class="absolute right-8 bottom-8"></scrolltop-button>
    <div class="overlay first"></div>
    <div class="overlay second"></div>
    <div class="overlay third"></div>



  </div>
</template>
<script >
import HeaderComponent from '@/components/HeaderComponent.vue';
import ScrolltopButton from '@/components/Button/ScrolltopButton.vue';
export default {
  components: {
    HeaderComponent,
    ScrolltopButton,
  },
  methods: {
    scrollTop() {
      this.$refs.sttBtn.scrollToTop();
    },
  },
  mounted() {
    TweenMax.to('.first', 1, {
      delay: .2,
      left: '-100%',
      ease: Expo.easeInOut
    })

    TweenMax.to('.second', 1, {
      delay: .4,
      left: '-100%',
      ease: Expo.easeInOut
    })

    TweenMax.to('.third', 1, {
      delay: .6,
      left: '-100%',
      ease: Expo.easeInOut
    })

  },
};
</script>

<style>
/* @import '@/assets/base.css'; */
.overlay {
  width: 100%;
  height: calc(100vh / 3);
  background-color: rgb(173, 63, 115);
  position: absolute;
  left: 0;
  z-index: 100;
  /* border: 1px solid red; */
}

.first {
  top: 0;
}

.second {
  top: calc(100vh / 3);
}

.third {
  top: calc(100vh / 3 * 2);
}
</style>
