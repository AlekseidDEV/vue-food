<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
        <MealsCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals" class="flex justify-center text-gray-600">
        There ara no meals
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MealsCard from '../components/MealsCard.vue';
import store from '../store';
import { computed, onMounted } from 'vue';

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>