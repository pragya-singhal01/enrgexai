import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  // { path: '/', component: AllPostsView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  // { path: '/my-posts', component: UserPostsView },
  // { path: '/posts/:id', component: PostDetailView },
  // { path: '/create', component: CreatePostView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});