<template>
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card">
        <div class="card-body p-4">
          <div class="text-center mt-2">
            <h5 class="text-primary">Welcome Back!</h5>
            <p class="text-muted">Sign in to continue to Minible. <br> <span class="text-danger">{{ errorMessage }}</span></p>
           
          </div>
          <div class="p-2 mt-4">
            <form @submit.prevent="login">
                <div class="mb-3">
                <label class="form-label" for="email">Display Name</label>
                <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter Display Name" required />
               
              </div>

              <div class="mb-3">
                <label class="form-label" for="email">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter Email" required />
                
              </div>
  
  
              <div class="mb-3">
                <label class="form-label" for="userpassword">Password</label>
                <input type="password" v-model="password" class="form-control" id="userpassword"
                  placeholder="Enter password" required />
              </div>

              <div class="mb-3">
                <label class="form-label" for="conpassword">Confirm Password</label>
                <input type="password" v-model="password_confirmation" class="form-control" id="conpassword"
                  placeholder="Enter password confirmation" required />
              </div>
  
  
              <div class="mt-3 text-end">
                <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">
                  Register
                </button>
              </div>
  
              <div class="mt-4 text-center">
                <div class="signin-other-title">
                  <h5 class="font-size-14 mb-3 title">Sign up with</h5>
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
                  Already have an account?
                  <router-link to="login" class="fw-medium text-primary">
                  SignIn now
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
import Register from './Register.vue'
  import { ref } from "vue";
  import { RegisterUser } from "../api";
  // this.$router.push('/dashboard');
  const email = ref('');
  const password = ref('');
  const name = ref('');
  const password_confirmation=ref('');
  const errorMessage = ref('');
  
  
  const login = async () => {
    try {
      const response = await RegisterUser(email.value, password.value,name.value,password_confirmation.value);
      if (response.success) {
        errorMessage.value = response.message;
      } else {
        errorMessage.value = response.message;
      }
      // this.$router.push('/dashboard');
    } catch (error) {
      errorMessage.value = error.message;
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>