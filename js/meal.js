const loadMeals = (search) => {
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
   const mealsContainer = document.getElementById('meal-container');
   mealsContainer.innerHTML = ``;

   meals.forEach(meal => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('col');
      console.log(meal);
      mealDiv.innerHTML = `
         <div class="card" onclick="loadMealDetail(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="Image">
            <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
         </div>
      `
      mealsContainer.appendChild(mealDiv);
   })
}

const searchFood = () => {
   const searchInput = document.getElementById('input-field');
   const searchText = searchInput.value;
   searchInput.value = '';
   loadMeals(searchText);
}


// const loadMealDetail = (idMeal) => {
//    // console.log(idMeal);
//    const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?i=${idMeal}`;
//    // console.log(url2);

//    fetch(url2)
//       .then(res => res.json())
//       .then(data => console.log(data))

// }

const loadMealDetail = (idMeal) => {
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
   // console.log(url);

   fetch(url)
   .then(res => res.json())
   .then(data => displayMealDetail(data.meals[0]));
}


const displayMealDetail = (meal) => {
   const detailedContainer = document.getElementById('meal-deatils');
   detailedContainer.innerHTML = '';
   const mealDiv = document.createElement('div');
   mealDiv.classList.add('card,mb-3');
   mealDiv.innerHTML = `
      <img src="${meal.strMealThumb}" class="img-fluid" alt="image">
      <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
   `
   detailedContainer.appendChild(mealDiv);

}


loadMeals('')