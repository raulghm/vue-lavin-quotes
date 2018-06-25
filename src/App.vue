<template>
  <div id="app">
    <div class="Logo">
      <div class="Lavin-avatar"></div>
      <h1>Lavin Quotes</h1>
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
  min-height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

.Lavin-avatar {
  display: inline-block;
  background-image: url(https://pbs.twimg.com/profile_images/460949987816267776/ZGXxQz8I_400x400.jpeg);
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  background-size: cover;
  background-position: 50%;
}

img {
  width: 60px;
}

a {
  color: #fff;
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
