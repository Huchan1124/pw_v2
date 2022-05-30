<template>
  <div class="h-60 border border-black rounded-lg">{{cardTitle }}</div>
</template>
<script>
export default {
  name: 'GallerycardComponent',
  props: ['cardTitle'],
  data() {
    return {};
  },
};
</script>