
<script setup>
</script>

<template>
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>

    <circle fill='#FFFFFF' stroke='#FFFFFF' stroke-width='4' r='20' cx='40' cy='65'>
      <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1'
        repeatCount='indefinite' begin='-.4'></animate>
    </circle>
    <circle fill='#FFFFFF' stroke='#FFFFFF' stroke-width='4' r='20' cx='100' cy='65'>
      <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1'
        repeatCount='indefinite' begin='-.2'></animate>
    </circle>
    <circle fill='#FFFFFF' stroke='#FFFFFF' stroke-width='4' r='20' cx='160' cy='65'>
      <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1'
        repeatCount='indefinite' begin='0'></animate>
    </circle>

</svg>

</template>

<style scoped>svg {
  margin: 0 auto;
  height: 3em;
  width: 4em;

}</style>