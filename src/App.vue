<template>
  <div id="app">
    <Lavin/>
  </div>
</template>

<script>
import Lavin from '@/components/Lavin'

export default {
  name: 'app',

  components: {
    Lavin,
  },
}
</script>

<style>
@import 'cata-base';

html {
  background: linear-gradient(to bottom, #34495d, #4cd698);
  min-height: 100vh;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
}

a {
  color: #fff;
}

blockquote {
  margin: 0;
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
