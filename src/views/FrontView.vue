<template>
  <div class="relative">
    <header-component></header-component>
    <RouterView />
    <scrolltop-button ref="sttBtn" @click="scrollTop" class="absolute right-8 bottom-8"></scrolltop-button>
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
    
  },
};
</script>

<style>
/* @import '@/assets/base.css'; */
</style>
