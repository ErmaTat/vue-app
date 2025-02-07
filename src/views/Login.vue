<template>
  <div class="col-md-8 col-lg-6 col-xl-5">
    <div class="card">
      <div class="card-body p-4">
        <div class="text-center mt-2">
          <h5 class="text-primary">Welcome Back!</h5>
          <p class="text-muted">Sign in to continue to Minible.</p>
        </div>
        <div class="p-2 mt-4">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label class="form-label" for="email">Email</label>
              <input type="text" v-model="email" class="form-control" id="email" placeholder="Enter Email" required />
              <span class="text-danger">{{ errorMessage }}</span>
            </div>


            <div class="mb-3">
              <div class="float-end">
                <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
              </div>
              <label class="form-label" for="userpassword">Password</label>
              <input type="password" v-model="password" class="form-control" id="userpassword"
                placeholder="Enter password" required />
            </div>

            <div class="form-check">
              <input type="checkbox" v-model="remember" class="form-check-input" id="auth-remember-check" />
              <label class="form-check-label" for="auth-remember-check">Remember me</label>
            </div>

            <div class="mt-3 text-end">
              <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">
                Log In
              </button>
            </div>

            <div class="mt-4 text-center">
              <div class="signin-other-title">
                <h5 class="font-size-14 mb-3 title">Sign in with</h5>
              </div>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                    <i class="mdi mdi-google"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-4 text-center">
              <p class="mb-0">
                Don't have an account?
                <router-link to="register" class="fw-medium text-primary">
                  SignUp now
                </router-link>

              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import { loginUser } from "../api";

const email = ref('');
const password = ref('');
const remember = ref(false);
const errorMessage = ref('');

const router = useRouter();
const login = async () => {
  try {
    const response = await loginUser(email.value, password.value);

    if (response.success) {
      errorMessage.value = ''; 
      router.push('/dashboard');
    } else {
      errorMessage.value = response.message;
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "An error occurred";
  }
};
</script>


<style scoped>
/* Add your styles here */
</style>