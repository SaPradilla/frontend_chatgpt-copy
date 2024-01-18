<script setup>

</script>

<template>
    <div >
        <button type="submit">
            <slot></slot>
        </button>
    </div>
</template>


<style scoped>

button {
  border: none; 
  background: #10A37F;
  color: white;
  padding: 15px;
  border-radius: 4px;
  transition: all 0.3s ease-in;
  cursor: pointer;
    width: 100%;
}

button:hover {
  background: #0c785d;

}
</style>