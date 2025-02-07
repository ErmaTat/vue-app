<!-- layouts/App.vue -->
<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import ErrorLayout from './layouts/ErrorLayout.vue';

export default {
    name: 'App',
    components: {
        AppLayout,
        AuthLayout,
        ErrorLayout,
    },
    computed: {
        layout() {
            return this.$route.meta.layout || 'AppLayout';
        }
    }
};
</script>

<style></style>