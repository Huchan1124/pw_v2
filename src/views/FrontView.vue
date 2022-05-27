<template>
  <div class="relative">
    <header-component></header-component>
    <RouterView />
    <scrolltop-button ref="sttBtn" @click="scrollToTop" class="absolute right-8 bottom-8"></scrolltop-button>
  </div>
</template>
<script >
import HeaderComponent from '@/components/HeaderComponent.vue';
import ScrolltopButton from '@/components/ScrolltopButton.vue';
export default {
  components: {
    HeaderComponent,
    ScrolltopButton,
  },
  methods: {
    scrollToTop() {
      this.$refs.scrollToTop();
    },
  },
};
</script>

<style>
/* @import '@/assets/base.css'; */
</style>
