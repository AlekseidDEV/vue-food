<template>

    <div class="flex p-4 justify-center flex-col items-center">
        <div class="flex gap-3">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters.split(', ')"
                :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>

    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
            <MealsCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="meals.length === 0" class="flex justify-center text-gray-600">
            There ara no meals or click the letter
        </div>
    </div>

</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealsCard from '../components/MealsCard.vue';

const route = useRoute()
const letters = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'
const meals = computed(() => store.state.mealsByletter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>