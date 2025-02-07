<script setup>
import { onMounted} from "vue";

onMounted(() => {
    $('body').addClass('authentication-bg'); 
});
</script>
<template>
     <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <!-- <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <a href="index.html" class="mb-5 d-block auth-logo">
                                <img src="../assets/images/logo-dark.png" alt="" height="22" class="logo logo-dark">
                                <img src="../assets/images/logo-light.png" alt="" height="22" class="logo logo-light">
                            </a>
                        </div>
                    </div>
                </div> -->
                <div class="row align-items-center justify-content-center">
                   <router-view></router-view>
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
</template>

<script>
export default {
    watch:{
        $route(){
           $('body').addClass('authentication-bg');
        }
    }
}
</script>