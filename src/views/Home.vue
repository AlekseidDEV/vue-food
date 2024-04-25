<template>
  <h1 class="px-8 mt-10 font-bold text-5xl text-orange-600">Random Meals</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <MealsCard v-for="meal of arrRandomMeals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import axiosClient from '../axiosClient';
import { ref } from 'vue';
import MealsCard from '../components/MealsCard.vue';


let arrRandomMeals = ref([])


onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    const responce = await axiosClient.get('random.php')

    arrRandomMeals.value.push(responce.data.meals[0])
  }
})
</script>