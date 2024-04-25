<template>
    <a :href="href" target="_blank"
        class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 hover:text-white transition-colors">YouTube</a>
    <router-link to="/"
        class="px-6 py-2 rounded border-2 border-purple-600 hover:bg-purple-500 hover:text-white transition-colors">
        view
    </router-link>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>