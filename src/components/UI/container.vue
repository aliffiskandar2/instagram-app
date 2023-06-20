<script setup>
import {defineProps} from "vue"

// Props definition
const props = defineProps({
  styles: {
    type: Object,
    required: true
  }
});

</script>

<template>
    <div class="container" :style="styles">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    width: 1000px;
    margin: 0 auto;
}

</style>
