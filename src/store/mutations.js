export function setSearchMeals(state, meals) {
  state.searchedmeals = meals || [];
}
export function setMealsByLetter(state, meals) {
  state.mealsByletter = meals || [];
}
export function setmealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || [];
}
