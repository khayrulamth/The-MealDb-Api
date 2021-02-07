const search = document.getElementById("search-id"),
    submitButton = document.getElementById("submit-button-id"),
    resultTitle = document.getElementById("result-title-id"),
    allMeals = document.getElementById("all-meals-id"),
    singleMeal = document.getElementById("single-meal-id");
    

// meal searching and event handling 
function searchMeals() {
    const searchTerm = search.value;
    if (searchTerm.trim()) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resultTitle.innerHTML = `<h2>Search Result For - ${searchTerm}:</h2>`;

                //checking search matching
                if (data.meals === null) {
                    resultTitle.innerHTML = `<p>No result found. Try with valid term</p>`;

                }
                else {
                    allMeals.innerHTML = data.meals.map(meal => `
                <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" meal-id="${meal.idMeal}"><h4>${meal.strMeal}</h4></div>
                </div>`).join('');
                }

            });
        // clear search value 
        search.value = '';
    }


    else {
        alert('Enter Valid menu name');
    }
}

function showMealInfo(){
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => {
        console.log(data);

    });
}

submitButton.addEventListener('click', searchMeals);