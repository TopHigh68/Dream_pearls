<script setup>
import HeaderViews from '../components/HeaderViews.vue'
import FooterViews from '../components/FooterViews.vue'
</script>

<template>
    <div class="">
        <div class="h-[20%] w-full bg-[#000]">
            <HeaderViews/>
        </div>
        <main class="">
            <router-view />
        </main>
        <div class="">
            <FooterViews/>
        </div>
    </div>
</template>

<style scoped>

</style>