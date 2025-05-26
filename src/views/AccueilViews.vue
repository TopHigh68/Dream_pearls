<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-purple-100 py-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-purple-800 mb-4">Bienvenue chez Dreams Pearls</h1>
      <p class="text-lg md:text-xl text-purple-700 mb-6">
        Découvrez la beauté authentique des perles raffinées.
      </p>
      <RouterLink
        to="/produits"
        class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
        Voir nos produits
      </RouterLink>
    </section>

    <!-- À propos -->
    <section class="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">À propos de nous</h2>
      <p class="text-gray-600 text-lg">
        Dreams Pearls est une boutique spécialisée dans la vente de perles de haute qualité.
        Chaque perle est soigneusement sélectionnée pour garantir beauté et élégance.
        Nous croyons en l’unicité de chaque bijou et en l’émotion qu’il procure.
      </p>
    </section>

    <!-- Produits en vedette -->
    <section class="bg-white py-16 px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Produits en vedette</h2>
      <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="../assets/ff.jpg" alt="Perle 1" class="w-full h-40 object-cover rounded-md mb-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Collier Perle Blanche</h3>
          <p class="text-gray-600">Élégant et intemporel, parfait pour toutes les occasions.</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="../assets/kk.jpg" alt="Perle 2" class="w-full h-40 object-cover rounded-md mb-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Bracelet Perle Rose</h3>
          <p class="text-gray-600">Douceur et féminité réunies dans un bijou délicat.</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="../assets/dd.jpg" alt="Perle 3" class="w-full h-40 object-cover rounded-md mb-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Boucles d'oreilles Perle Noire</h3>
          <p class="text-gray-600">Un style audacieux pour affirmer votre personnalité.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
