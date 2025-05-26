<script setup>
import image1 from '../assets/dd.jpg'
// Si tu ajoutes d'autres images locales :
import image2 from '../assets/ff.jpg'
import image3 from '../assets/kk.jpg'
import image4 from '../assets/dd.jpg'
import image5 from '../assets/ff.jpg'
import image6 from '../assets/kk.jpg'


// Ton tableau de produits avec image1 utilisé :
const produits = [
  {
    id: 1,
    nom: 'Collier Perle Blanche',
    description: 'Perles naturelles montées sur chaîne argentée.',
    prix: 59.99,
    image: image1,
  },
  {
    id: 2,
    nom: 'Bracelet Perle Rose',
    description: 'Un bracelet délicat aux perles roses brillantes.',
    prix: 39.99,
    image: image2, // ou lien externe si pas encore d'image locale
  },
  {
    id: 3,
    nom: 'Boucles d\'oreilles Perle Noire',
    description: 'Sublimez votre look avec ces perles noires élégantes.',
    prix: 29.99,
    image: image3,
  },
   {
    id: 4,
    nom: 'Parure Perle Luxe',
    description: 'Collier + bracelet + boucles en perles haut de gamme.',
    prix: 129.99,
    image: image4,
  },
  {
    id: 5,
    nom: 'Collier Perle de Tahiti',
    description: 'Perle unique sur chaîne or rose. Édition limitée.',
    prix: 89.99,
    image: image5,
  },
  {
    id: 6,
    nom: 'Bracelet Duo de Perles',
    description: 'Bracelet avec deux perles liées, symbole de lien fort.',
    prix: 34.99,
    image:image6,
  },
]

function ajouterAuPanier(produit) {
  console.log('Produit ajouté au panier :', produit)
}
</script>


<template>
  <div class="py-16 px-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-center text-purple-800 mb-12">Nos Produits</h1>

    <div class="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
      <div
        v-for="produit in produits"
        :key="produit.id"
        class="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          :src="produit.image"
          :alt="produit.nom"
          class="w-full h-56 object-cover"
        />
        <div class="p-6 text-center">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ produit.nom }}</h2>
          <p class="text-gray-600 mb-4">{{ produit.description }}</p>
          <p class="text-purple-700 font-bold text-lg mb-4">{{ produit.prix }} €</p>
          <button
            @click="ajouterAuPanier(produit)"
            class="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full shadow-md transition">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


