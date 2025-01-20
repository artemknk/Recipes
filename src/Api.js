class Api {
  url = 'https://dummyjson.com/';

  async getRecipes() {
    const response = await fetch(this.url + 'recipes');
    return await response.json();
  }

  async getSingleRecipe(id) {
    const response = await fetch('https://dummyjson.com/recipes/' + id);
    return await response.json();
  }

  async getAllRecipesTags() {
    const response = await fetch('https://dummyjson.com/recipes/tags');
    return await response.json();
  }
  async getRecipeByTag(tag) {
    const response = await fetch('https://dummyjson.com/recipes/tag' + tag);
    return await response.json();
  }
  async loginUser(data) {
    return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
  }

  async getLoggedUser() {
  return fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'), // Pass JWT via Authorization header
  }, 
})
.then(res => res.json())
  }
};

export const api = new Api();
