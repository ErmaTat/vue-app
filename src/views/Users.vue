<script setup>
import { inject, onMounted } from 'vue';

const setPageTitle = inject('setPageTitle');

onMounted(() => {
    setPageTitle('Users');
});
</script>
<template>
    <p>Welcome to the Users page!</p>
</template>
