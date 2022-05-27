<template>
  <header-component></header-component>

  <RouterView />
</template>
<script >
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style>
/* @import '@/assets/base.css'; */
</style>
