<template>
  <div class="min-h-screen bg-gray-50 py-16 px-6">
    <h1 class="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
      Contactez-nous
    </h1>

    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
      <!-- Formulaire -->
      <form @submit.prevent="envoyerMessage" class="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Nom</label>
          <input
            v-model="nom"
            type="text"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea
            v-model="message"
            rows="5"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition shadow-md">
          Envoyer
        </button>
      </form>

      <!-- Coordonnées -->
      <div class="flex flex-col justify-center space-y-4 text-gray-700">
        <p class="text-lg">
          📍 <strong>Adresse :</strong> situé au Bénin
        </p>
        <p class="text-lg">
          📞 <strong>Téléphone :</strong> +229  01 00 00 00 00
        </p>
        <p class="text-lg">
          📧 <strong>Email :</strong> contact@gmail.com
        </p>
        <p class="text-lg">
          🕒 <strong>Horaires :</strong> Lun - Ven : 9h - 18h
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('')
const email = ref('')
const message = ref('')

function envoyerMessage() {
  alert(`Message envoyé par ${nom.value} (${email.value}) :\n${message.value}`)
  nom.value = ''
  email.value = ''
  message.value = ''
}
</script>
