<template>
  <div id="app">
    <Lavin />
  </div>
</template>

<script>
import Lavin from '@/views/Lavin'

export default {
  name: 'app',

  components: {
    Lavin
  }
}
</script>

<style>
@import '~normalize.css';

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  background: linear-gradient(to bottom, #34495d, #4cd698);
  min-height: 100vh;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 62.5%;
}

body {
  font-family: var(--font-family-normal), Helvetica, Arial, sans-serif;
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
