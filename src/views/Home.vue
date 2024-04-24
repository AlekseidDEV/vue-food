<template>
    <div class="flex p-8 justify-center flex-col items-center">
        <div class="w-full mb-2">
            <input type="text" class="rounded border-2 border-gray-200 w-full" 
            placeholder="Search for meals">
        </div>

        <div class="flex gap-3">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters.split(', ')" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>

    <pre>
        {{ ingredients }}
    </pre>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store'
import axiosClient from '../axiosClient';
import { ref } from 'vue';

const letters = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'

const ingredients = ref([])

onMounted(async () => {
  const responce = await axiosClient.get('/list.php?i=list')


  ingredients.value = responce.data
})
</script>