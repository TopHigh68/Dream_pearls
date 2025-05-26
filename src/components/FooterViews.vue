<template>
  <footer class="bg-purple-900 text-white pt-10 pb-6 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- À propos -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Dreams Pearls</h3>
        <p class="text-sm text-gray-300">
          Boutique spécialisée dans les perles élégantes et raffinées.
          Des bijoux uniques pour des personnes uniques.
        </p>
      </div>

      <!-- Liens utiles -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Navigation</h3>
        <ul class="space-y-2 text-gray-300">
          <li><RouterLink to="/" class="hover:text-white">Accueil</RouterLink></li>
          <li><RouterLink to="/produits" class="hover:text-white">Produits</RouterLink></li>
          <li><RouterLink to="/a-propos" class="hover:text-white">À propos</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
          <li><RouterLink to="/panier" class="hover:text-white">Panier</RouterLink></li>
        </ul>
      </div>

      <!-- Réseaux sociaux -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-300" aria-label="Facebook">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4v1.6h2.4l-.4 3h-2v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="#" class="hover:text-gray-300" aria-label="Instagram">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-gray-400 text-sm mt-10">
      &copy; {{ new Date().getFullYear() }} Dreams Pearls. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
</script>
