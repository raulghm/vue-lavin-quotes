<template>
  <div id="app">
    <div class="Logo">
      <img src="./assets/logo.png">
      <h2>Lavin Quotes</h2>
      <h3>using Vue + Twitter Api + Graphcool Api resolver</h3>
    </div>

    <Lavin/>
  </div>
</template>

<script>
import Lavin from '@/components/Lavin'

export default {
  name: 'app',

  data: () => ({
    // env: process.env.NODE_ENV,
  }),

  components: {
    Lavin,
  },
}
</script>

<style>
html {
  background: linear-gradient(to bottom, #34495d, #4cd698);
  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

img {
  width: 60px;
}

/**
 * Vue transitions
 */

/*fade*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity .6s ease;
  opacity: 1;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
