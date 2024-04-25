<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-2xl h-60 w-full object-cover">
        </router-link>
        <div class="px-3">
            <h3 class="py-3 font-semibold title_food">{{ meal.strMeal }}</h3>
            <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere odit quas, voluptatem,
                maxima.</p>
            <div class="py-3 flex items-center gap-6">
                <ButtonsSocial :href="meal.strYoutube" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonsSocial from './ButtonsSocial.vue';
const { meal } = defineProps({
    meal: Object
})
</script>