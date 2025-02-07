<script setup>
import { ref } from 'vue';

var date= ref(new Date().getFullYear());
</script>
<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    {{ date }} © Minible.
                </div>
                <div class="col-sm-6">
                 
                </div>
            </div>
        </div>
    </footer>
</template>