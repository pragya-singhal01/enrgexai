<template>
  <form @submit.prevent="handleRegister">
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <input v-model="confirm" type="password" placeholder="Confirm Password" required />
    <button type="submit">Register</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../axios';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const confirm = ref('');
const error = ref('');
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirm.value) {
    error.value = 'Passwords do not match';
    return;
  }

  try {
    await axios.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirm.value
    });
    router.push({ path: '/login', query: { registered: 'true' } });
  } catch (err) {
    error.value = 'Registration failed';
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>