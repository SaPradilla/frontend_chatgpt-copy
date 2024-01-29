<script setup>
  import Prism from 'prismjs';
  import {defineProps}from 'vue'
const props = defineProps({
    language: String,
    highlightedCode: String,
})

const copyCode = ()=>{
    console.log('copiando...')
}
</script>
<template>
    <div class="code-container">
      <div class="banner-code">
        <p class="lenguaje">{{ language }}</p>
        <p class="copy" @click="copyCode">Copy Code</p>
      </div>
      <div class="code-content">
        <code :class="'language-' + language" v-html="highlightedCode"></code>
      </div>
    </div>
  </template>
  
  
  