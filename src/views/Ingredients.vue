<template>
    <div class="max-w-[1500px] w-full mx-auto mt-10">
        <h1 class="text-4xl my-5 font-bold">Ingredient</h1>
        <router-link v-for="ingredient of ingredients"
            :to="{ name: 'byIngredients', params: { ingredient: ingredient.strIngredient }, }" :key="ingredient.id"
            class=" block bg-white rounded p-8 mb-5 shadow">
            <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([])

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})

</script>