const loadMeal = (searchString) => {
    const url = `https:www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    console.log('dataLoading');
    const searchString = document.getElementById('searchString').value;
    loadMeal(searchString);

})

function displayData(data) {
    const mealSection = document.getElementById('mealSection')
    mealSection.innerHTML = ''

    for (item of data.meals) {
        console.log(item)
        const mealDiv = document.createElement('div');
        const mealCard = `

        <div class="card m-4" style="width: 19rem;">
            <img class="card-img-top" src="${item.strMealThumb}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${item.strMeal.slice(0, 20)}</h5>
                <p class="card-text">${item.strInstructions.slice(0, 50) + ` <a href="#" class="">Read More</a>`}</p>
                <a href="#" class="btn btn-primary">See details</a>
            </div>
        </div>
    
    
    
    `
        mealDiv.innerHTML = mealCard;
        mealSection.appendChild(mealDiv);
    }

}