<script setup lang="ts">
import { ref } from 'vue';
import axios from '../axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const res = await axios.post('/login', { email: email.value, password: password.value });
    localStorage.setItem('jwt_token', res.data.token);
    router.push('/');
  } catch (err) {
    error.value = 'Invalid credentials';
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>