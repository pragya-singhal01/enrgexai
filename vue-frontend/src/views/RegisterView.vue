<template>
  <div class="auth-container">
    <h2>Register</h2>
    <RegisterForm />
    <router-link to="/login">Already have an account? Login here.</router-link>
  </div>
</template>

<script setup>
import RegisterForm from '../components/RegisterForm.vue';
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>