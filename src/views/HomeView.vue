<template >
  <overlay-component></overlay-component>

  <div class="pt-20 h-screen">
    <div class="relative">
      <div class="marqueeText">
        <p class="rightToleft">私、これからも頑張るね！ 絶対、一緒にRAD WEEKENDを超えようね！</p>
      </div>
      <img class="slogan absolute w-40 z-50" style="left:50vh;" src="/images/slogan.png" alt />
      <div class="container mx-auto flex items-center" style="height:60vh">
        <div id="hovereffect-section" class="distortion"></div>
      </div>
      <div class="marqueeText">
        <p class="leftToright">こはねの歌を聴くと、いつもドキドキして、 何か新しいことが始まりそうな気がしてくる</p>
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
import OverlayComponent from '@/components/OverlayComponent.vue';

import { mapState, mapActions } from 'pinia';
import animationStatusStore from '@/stores/animationStatus';

export default {
  components: {
    AccordionComponent,
    OverlayComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(animationStatusStore, [
      'showAnimation',
      'updateAnimationStatus',
    ]),
  },
  methods: {
    ...mapActions(animationStatusStore, [
      'showAnimation',
      'updateAnimationStatus',
    ]),
    mainImgAnimation() {
      gsap.set(['.distortion', '.slogan', '.rightToleft', '.leftToright'], {
        opacity: 0,
      });

      gsap.to('.distortion', { duration: 2, delay: 1.5, opacity: 1 });
      gsap.to('.slogan', { duration: 2.5, delay: 2, opacity: 1 });
      gsap.to('.rightToleft ', { duration: 2.5, delay: 2.5, opacity: 1 });
      gsap.to('.leftToright', { duration: 2.5, delay: 3, opacity: 1 });
    },
    overlayAnimation() {
      gsap.to('.first', {
        duration: 1,
        delay: 0.2,
        left: '-100%',
        ease: Expo.easeInOut,
      });
      gsap.to('.second', {
        duration: 1,
        delay: 0.4,
        left: '-100%',
        ease: Expo.easeInOut,
      });
      gsap.to('.third', {
        duration: 1,
        delay: 0.5,
        left: '-100%',
        ease: Expo.easeInOut,
      });
      gsap.to('.fourth', {
        duration: 1,
        delay: 0.6,
        left: '-100%',
        ease: Expo.easeInOut,
      });
    },
    hoverEffect() {
      new hoverEffect({
        parent: document.querySelector('.distortion'),
        intensity1: 0.1,
        intensity2: 0.1,
        angle2: Math.PI / 2,
        image1: '/images/02.png',
        image2: '/images/01.png',
        imagesRatio: 1080 / 1920,
        displacementImage: '/images/watereffect.jpg',
      });
    },
    autoplayHoverEffect() {
      const ev = new Event('mouseenter');
      const ev2 = new Event('mouseleave');

      const hes = document.getElementById('hovereffect-section');

      setInterval(() => {
        hes.dispatchEvent(ev);
        console.log('mouseenter');
        setTimeout(() => {
          hes.dispatchEvent(ev2);
          console.log('mouseleave');
        }, 5000);
      }, 10000);
    },
  },
  mounted() {
    this.hoverEffect();

    if (this.showAnimation) {
      this.overlayAnimation();
      this.mainImgAnimation();
      this.updateAnimationStatus();
    } else {
      gsap.set(['.distortion', '.slogan', '.rightToleft', '.leftToright'], {
        opacity: 1,
      });
      this.overlayAnimation();
    }
    // this.autoplayHoverEffect()
  },
};
</script>

<style lang="scss">
/* @import '@/assets/base.css'; */

.distortion {
  width: 100%;
  height: 50vh;
  opacity: 0;
  // clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  //  clip-path: polygon(25% 0%, 88% 9%, 100% 49%, 75% 100%, 25% 100%, 9% 48%);
  //  clip-path: polygon(28% 11%, 94% 2%, 100% 49%, 75% 100%, 13% 96%, 0 53%);
  clip-path: polygon(28% 11%, 94% 2%, 100% 49%, 75% 100%, 13% 96%, 5% 52%);
}

.marqueeText {
  width: 99vw;
  overflow: hidden;

  .rightToleft {
    font-size: 80px;
    margin-top: 30px;
    margin-bottom: 30px;
    animation: marqueeRtL 20s linear infinite;
  }

  .leftToright {
    margin-top: 30px;

    animation: marqueeLtR 20s linear infinite;
  }

  p {
    font-family: 'Reggae One', cursive;
    width: fit-content;
    white-space: nowrap;
    font-size: 48px;
  }
}

@keyframes marqueeRtL {
  0% {
    transform: translateX(70%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes marqueeLtR {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(104%);
  }
}
</style>
