<template>
  <header class="fixed w-full h-10 z-50">
    <nav class="bg-slate-200 flex items-center justify-between p-4">
      <img style="width:40px;" src="../assets/logo.svg" alt />

      <div class="hidden md:flex justify-end text-center">
        <router-link to="/" class="w-20 h-10 leading-10">Home</router-link>
        <router-link to="/about" class="w-20 h-10 leading-10 cursor-pointer">About</router-link>
        <router-link to="/gallery" class="w-20 h-10 leading-10">Gallery</router-link>
        <router-link to="/contact" class="w-20 h-10 leading-10">Contact</router-link>
      </div>
      <div @click="toggleHamburgerMenu" class="md:hidden w-10 h-10 outline outline-pink-500">Menu</div>
    </nav>
    <Transition>
      <div v-if="hamburgerMenuStatus" class="md:hidden bg-slate-100 text-center">
        <router-link to="/" class="block w-20 h-10 leading-10">Home</router-link>
        <router-link to="/about" class="w-20 h-10 leading-10 cursor-pointer">About</router-link>
        <router-link to="/gallery" class="block w-20 h-10 leading-10">Gallery</router-link>
        <router-link to="/contact" class="block w-20 h-10 leading-10">Contact</router-link>
      </div>
    </Transition>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      hamburgerMenuStatus: false,
    };
  },
  methods: {
    toggleHamburgerMenu(e) {
      this.hamburgerMenuStatus = !this.hamburgerMenuStatus;
    },
  },
  mounted() {},
};
</script>

<style>
/* @import '@/assets/base.css'; */

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
