<template>
  <div @click="scrollToTop" class="w-12 h-12 bg-slate-400 cursor-pointer"></div>
</template>
<script>
export default {
  name: 'ScrolltopButton',
  methods: {
    scrollToTop() {
      document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>