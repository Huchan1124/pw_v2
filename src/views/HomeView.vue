<template >
  <div class="h-screen outline outline-1">
    <div class="container mx-auto pt-20 h-screen flex  items-center">
      <!-- <h1>Hero Section</h1> -->
      <div id="hovereffect-section" class="distortion">

      </div>
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
  <div id="workExperience" class="relative h-screen outline outline-1">
    <div class="container mx-auto pt-20">
      <h1 class="mb-20">Work Experience</h1>
      <accordion-component></accordion-component>
    </div>
  </div>
</template>
<script>
import AccordionComponent from '@/components/AccordionComponent.vue';

export default {
  components: {
    AccordionComponent,
  },
  data() {
    return {};
  },
  methods: {
    autoplayHoverEffect() {
      const ev = new Event('mouseenter')
      const ev2 = new Event('mouseleave')

      const hes = document.getElementById('hovereffect-section')

      setInterval(() => {
        hes.dispatchEvent(ev)
        console.log('mouseenter')
        setTimeout(() => {
          hes.dispatchEvent(ev2)
          console.log('mouseleave')
        }, 5000);
      }, 10000);
    }

  },
  mounted() {

    TweenMax.set(".distortion", { autoAlpha: 0 });
    TweenMax.to(".distortion", 2, {
      delay: 1.5,
      autoAlpha: 1,
   
    });


    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: './src/assets/images/02.png',
      image2: './src/assets/images/01.jpg',
      imagesRatio: 1080 / 1920,
      displacementImage: './src/assets/images/watereffect.jpg',

    });
    // this.autoplayHoverEffect()
  },


};


</script>

<style>
/* @import '@/assets/base.css'; */

.distortion {
  width: 100%;
  height: 50vh;
  opacity: 0;

}
</style>
