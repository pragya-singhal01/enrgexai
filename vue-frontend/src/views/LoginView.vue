<template>
  <div class="auth-container">
    <h2>Login</h2>
    <p v-if="registered" class="success">Hey! You have registered successfully!! Please Login.</p>
    <LoginForm />
    <router-link to="/register">Don't have an account? Register here.</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const registered = route.query.registered === 'true';
</script>

<style scoped>
.success {
  color: green;
  margin-bottom: 1rem;
}
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>