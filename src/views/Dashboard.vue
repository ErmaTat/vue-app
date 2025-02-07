<script setup>
import { inject, onMounted } from 'vue';

const setPageTitle = inject('setPageTitle');

onMounted(() => {
    setPageTitle('Dashboard');
});


</script>

<template>
    <p>Welcome to the Dashboard!</p>
</template>
