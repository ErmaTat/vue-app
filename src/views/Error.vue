<script setup>
import { inject, onMounted } from 'vue';
const setError = inject('setError');

onMounted(() => {
    setError('404');
});

</script>
<template>
   
</template>

<script>
export default {
  name: 'Error',
};
</script>