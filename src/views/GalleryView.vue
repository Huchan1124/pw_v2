<template >
  <div id="gallery" class="container mx-auto pt-20">
    <swiper-component class="swiperComponent"></swiper-component>
    <h1 class="mb-20">Gallery</h1>
    <div class="mb-20 text-center">
      <category-button
        v-for="(item,index) in categories"
        :category-title="item"
        @click="filterCategory(item)"
      ></category-button>
    </div>
    <div>
      <div class="px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <gallerycard-component v-for="(item) in temp" :card-title="item"></gallerycard-component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperComponent from '@/components/SwiperComponent.vue';
import CategoryButton from '@/components/Button/CategoryButton.vue';
import GallerycardComponent from '@/components/Card/GallerycardComponent.vue';
export default {
  components: {
    SwiperComponent,
    CategoryButton,
    GallerycardComponent,
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
      data: [
        {
          name: 'work1',
          category: 'Category1',
          description: 'description',
        },
        {
          name: 'work2',
          category: 'Category2',
          description: 'description',
        },
        {
          name: 'work3',
          category: 'Category3',
          description: 'description',
        },
        {
          name: 'work4',
          category: 'Category4',
          description: 'description',
        },
        {
          name: 'work5',
          category: 'Category5',
          description: 'description',
        },
        {
          name: 'work6',
          category: 'Category1',
          description: 'description',
        },
        {
          name: 'work7',
          category: 'Category2',
          description: 'description',
        },
        {
          name: 'work8',
          category: 'Category1',
          description: 'description',
        },
      ],
      temp: '',
    };
  },
  methods: {
    getData() {
      this.temp = this.data;
    },
    filterCategory(categoryName) {
      let vm = this;
      vm.temp = vm.data.filter(item => {
        return item.category == categoryName;
      });
    },
  },
  mounted() {
    gsap.fromTo(
      '#gallery',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2 },
    );
    this.getData();
  },
};
</script>

<style>
#gallery {
  height: 200vh;
}
</style>
