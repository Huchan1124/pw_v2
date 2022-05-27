<template >
  <div class="container mx-auto pt-20">
    <swiper-component></swiper-component>
    <h1 class="mb-20">Gallery</h1>
    <div class="mb-20 text-center">
      <category-button v-for="item in categories" :category-title="item"></category-button>
    </div>
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(index) in 9" class="h-60 border border-black rounded-lg">{{index}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperComponent from '@/components/SwiperComponent.vue';
import CategoryButton from '@/components/CategoryButton.vue';
export default {
  components: {
    SwiperComponent,
    CategoryButton,
  },
  data() {
    return {
      categories: [
        'Category1',
        'Category2',
        'Category3',
        'Category4',
        'Category5',
      ],
    };
  },
};
</script>

<style>
</style>
