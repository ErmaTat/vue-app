<script setup>
import TopNav from '../components/Header.vue';
import Navigation from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

import { onMounted, nextTick, ref, provide, watch } from "vue";

onMounted(() => {
    nextTick(() => {
        const script = document.createElement("script");
        script.src = "/src/assets/js/app.js";
        script.async = true;
        document.body.appendChild(script);
    });
    $('body').removeClass('authentication-bg');
    var t;
    if ($("#sidebar-menu").length && $("#sidebar-menu .mm-active .active").length) {
        t = $("#sidebar-menu .mm-active .active").offset().top;
        if (t > 300) {
            t -= 300;
            $(".vertical-menu .simplebar-content-wrapper").animate(
                { scrollTop: t },
                "slow"
            );
        }
    }
});


const pageTitle = ref('Default Title');

provide('setPageTitle', (title) => {
    pageTitle.value = title;
});

</script>

<template>
    <div id="layout-wrapper">
        <TopNav />
        <Navigation />
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <!-- Start Page Title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0">
                                    {{ pageTitle }}
                                </h4>
                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Utility</a></li>
                                        <li class="breadcrumb-item active">Starter Page</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Page Title -->

                    <!-- Page Content -->
                    <router-view></router-view>

                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>
