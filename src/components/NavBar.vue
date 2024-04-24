<template>
    <header class="bg-white shadow h-16 pl-8 pr-8 flex justify-between items-center">
        <router-link :to="{ name: 'home' }"
            class="flex items-center h-full transition-colors duration-100 hover:text-purple-500 transition-bg  hover:bg-pink-50">
            Home
        </router-link>

        <nav class="h-full flex gap-8">
            <router-link :to="{ name: 'byName' }"
                class="flex items-center h-full transition-colors duration-100 hover:text-purple-500 transition-bg  hover:bg-pink-50">
                Search Meals
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="flex items-center h-full transition-colors duration-100 hover:text-purple-500 transition-bg  hover:bg-pink-50">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'byIngredients' }"
                class="flex items-center h-full transition-colors duration-100 hover:text-purple-500 transition-bg  hover:bg-pink-50">
                Meals By Ingredients
            </router-link>
        </nav>
    </header>
</template>