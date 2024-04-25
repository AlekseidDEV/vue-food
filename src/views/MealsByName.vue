<template>
    <div>
        <div class="w-full p-6">
            <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full"
                placeholder="Search for meals" @change="searchMeals">
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
        <MealsCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="meals.length === 0" class="text-center">
        There ara no meals
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealsCard from '../components/MealsCard.vue';


const route = useRoute()
const keyword = ref("")
const meals = computed(() => store.state.searchedmeals)


function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>