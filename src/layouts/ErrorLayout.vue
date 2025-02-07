<script setup>
import { onMounted, provide,ref } from "vue";

const errorType = ref('error-type');
provide('setError', (error) => {
    errorType.value = error;
});
onMounted(() => {
    $('body').addClass('authentication-bg');
});
</script>
<template>
    <div class="my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center">
                        <div>
                            <div class="row justify-content-center">
                                <div class="col-sm-4">
                                    <div class="error-img">
                                        <img v-if="errorType==='404'" src="../assets/images/404-error.png" alt="" class="img-fluid mx-auto d-block">
                                        <img  v-else-if="errorType==='500'" src="../assets/images/500-error.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 class="text-uppercase mt-4" v-if="errorType==='404'">Sorry, page not found</h4>
                        <h4 class="text-uppercase mt-4" v-else-if="errorType==='500'">Internal Server Error</h4>
                        <p class="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                        <div class="mt-3">
                            <a class="btn btn-primary waves-effect waves-light" href="index.html">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    watch: {
        $route() {
            $('body').addClass('authentication-bg');
        }
    }
}
</script>