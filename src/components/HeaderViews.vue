<template>
  <header class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <!-- Logo -->
    <div class="text-2xl font-bold text-purple-700">
      <img src="" alt="Dreams Pearls" class="h-10 w-auto inline-block mr-2" />
      Dreams Pearls
    </div>

    <!-- Navigation -->
    <nav class="space-x-6 text-gray-700 font-medium hidden md:flex">
      <RouterLink to="/" class="hover:text-purple-600">Accueil</RouterLink>
      <RouterLink to="/produits" class="hover:text-purple-600">Produits</RouterLink>
      <RouterLink to="/a-propos" class="hover:text-purple-600">À propos</RouterLink>
      <RouterLink to="/contact" class="hover:text-purple-600">Contact</RouterLink>
    </nav>

    <!-- Panier -->
    <div class="relative">
      <RouterLink to="/panier" class="text-gray-700 hover:text-purple-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9m-6 0V5m0 0H9m3 0h3" />
        </svg>
        <span>Panier</span>
        <!-- Badge du nombre d'articles dans le panier -->
        <span
          class="ml-1 bg-purple-600 text-white text-xs rounded-full px-2 py-0.5"
          v-if="cartItemCount > 0">
          {{ cartItemCount }}
        </span>
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Exemple : le nombre d'articles dans le panier (à remplacer par un state global plus tard)
const cartItemCount = ref(0)
</script>
