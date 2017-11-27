<template>
  <div id="app">
    <div class="Logo">
      <img src="./assets/logo.png">
      <h2>Lavin Quotes</h2>
      <h3>using Vue + Graphcool Api resolver</h3>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 100px;
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
