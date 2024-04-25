<template>
    <div class="max-w-[800px] w-full mx-auto mt-10">
        <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div><strong>Categoty: </strong> {{ meal.strCategory }}</div>
            <div><strong>Area: </strong> {{ meal.strArea }}</div>
            <div><strong>Tags: </strong> {{ meal.strTags }}</div>
        </div>

        <div class="my-8">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 mt-4">
            <div>
                <h2 class="text-2xl font-semibold mb-3">
                    Ingredients
                </h2>

                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <ol v-if="meal[`strIngredient${ind + 1}`]">
                            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                        </ol>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">
                    Measures
                </h2>

                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <ol v-if="meal[`strMeasure${ind + 1}`]">
                            {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                        </ol>
                    </template>
                </ul>
            </div>
        </div>

        <div class="mt-4 flex items-center gap-6 pb-10">
            <ButtonsSocial :href="meal.strYoutube" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import ButtonsSocial from '../components/ButtonsSocial.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>