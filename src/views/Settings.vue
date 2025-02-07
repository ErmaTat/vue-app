<script setup>
import { inject, onMounted } from 'vue';

const setPageTitle = inject('setPageTitle');

onMounted(() => {
    setPageTitle('Settings');
});
</script>
<template>
    <p>Welcome to the Settings page!</p>
</template>
