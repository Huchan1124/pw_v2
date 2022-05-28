<template>
    <div class="overlay first"></div>
    <div class="overlay second"></div>
    <div class="overlay third"></div>
    <div class="overlay fourth"></div>
</template>
<script>
export default {
  name: 'OverlayComponent',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() { },
};


</script>
<style>
.overlay {
    width: 100%;
    height: calc(100vh / 3);
    position: absolute;
    left: 0;
    z-index: 100;
    /* border: 1px solid red; */
}

.first {
    top: 0;
    background-color: #ff6699;
}

.second {
    top: calc(100vh / 4);
    background-color: #00BBDD;
}

.third {
    top: calc(100vh / 4 * 2);
    background-color: #FF7722;
}

.fourth {
    top: calc(100vh / 4 * 3);
    background-color: #0077DD;
}
</style>