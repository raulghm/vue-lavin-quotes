<template>
  <div class="Avatar">
    <svg v-show="isActive" class="Avatar-spinner" width="174px" height="174px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="transparent" stroke-width="2" cx="33" cy="33" r="30" stroke="url(#gradient)" />>
      <linearGradient id="gradient">
        <stop offset="50%" stop-color="#42d179" stop-opacity="1"/>
        <stop offset="65%" stop-color="#42d179" stop-opacity=".5"/>
        <stop offset="100%" stop-color="#42d179" stop-opacity="0"/>
      </linearGradient>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Spinner',

  props: [
    'isActive'
  ]
}
</script>

<style>
.Avatar {
  display: inline-block;
  background-image: url(/img/img-lavin.jpeg);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50%;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
  margin-top: 10px;
  position: relative;
}

@media (--lg-viewport) {
  .Avatar {
    width: 140px;
    height: 140px;
  }
}

.Avatar-spinner {
  animation: rotate 6s linear infinite;
  width: 108px;
  position: absolute;
  top: -38px;
  left: -4px;
}

@media (--lg-viewport) {
  .Avatar-spinner {
    width: 150px;
    top: -17px;
    left: -5px;
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.path {
  stroke-dasharray: 170;
  stroke-dashoffset: 20;
}
</style>
