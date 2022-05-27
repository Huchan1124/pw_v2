<template >
  <div class="h-screen outline outline-1">
    <div class="container mx-auto pt-20">
      <h1>Hero Section</h1>
    </div>
  </div>
  <div id="about" class="h-screen outline outline-1">
    <div class="container mx-auto pt-20">
      <h1 class="mb-20">About</h1>
      <div class="flex flex-nowrap" style="height:50vh">
        <div class="w-2/4 bg-slate-400">img</div>
        <div class="w-2/4 bg-slate-200">introduction</div>
      </div>
    </div>
  </div>
  <div id="workExperience" class="h-screen outline outline-1">
    <div class="container mx-auto pt-20">
      <h1 class="mb-20">Work Experience</h1>
      <accordion-component></accordion-component>
      
    </div>
  </div>
</template>
<script>
import AccordionComponent from "@/components/AccordionComponent.vue";

export default {
  components:{
    AccordionComponent
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
/* @import '@/assets/base.css'; */
</style>
