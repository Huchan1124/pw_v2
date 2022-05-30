<template>
   <button type="button" class="w-40 h-12 border border-black rounded-full mr-4">{{categoryTitle}}</button>

</template>

<script>
export default {
  name: 'CategoryButton',
  props:['categoryTitle'],
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {},
};
</script>

<style>

</style>