BEN_AZEVEDO = "5f6e5a8b97614fa0b121a1ed4e27c2e1";
ESILVA = "cd0dd6cfca0449019ca58094678a2d76";
API_KEY = BEN_AZEVEDO;
R_SEARCH_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`;
D_SEARCH_PREFIX = `https://api.spoonacular.com/recipes/`; // id value comes after this URL chunk
D_SEARCH_SUFFIX = `/information?apiKey=${API_KEY}`; // id value comes before this URL chunk
NUM_RESULTS = 12;
// RECIPE_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

// const postmvp = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${term}&number=5&diet=${dietParams}&intolerances=${intoleranceParams}`

// const recipe = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`

// Attach an event listener that simply logs the text value of the input
const searchRecipeName = document.querySelector(".fa-search");
searchRecipeName.addEventListener("click", (e) => {
  e.preventDefault();
  let food = document.querySelector("#rSearch").value;
  clearBrowser();
  fetchFood(food);
});

// cleans out your previous search results
function clearBrowser() {
  const resultContainer = document.querySelector(".result-container");
  while (resultContainer.lastChild) {
    resultContainer.removeChild(resultContainer.lastChild);
  }
}

// url should look something like this: http://www.omdbapi.com/?apikey=[yourkey]&s=[movietitle]
async function fetchFood(food) {
  const url = `${R_SEARCH_URL}${food}&number=${NUM_RESULTS}`;
  try {
    const response = await axios.get(url);
    const results = Object.values(response.data.results);
    for (let i = 0; i < results.length; i++) {
      fetchDetails(results[i]);
    }
  } catch (error) {
    console.error(error);
  }
}

// retrieves all details (recipe, nutrition, source, etc.) about food from API
async function fetchDetails(result) {
  const url = `${D_SEARCH_PREFIX}${result.id}${D_SEARCH_SUFFIX}`;
  try {
    const details = await axios.get(url);
    console.log(details.data);
    showResults(result, details);
  } catch (error) {
    console.error(error);
  }
}

// creates search result HTML elements to populate web page
function showResults(result, details) {
  let id = result.id;
  let image = result.image;
  let title = result.title;
  let rating = details.data.spoonacularScore;
  console.log(rating);
  const stars = createStars(parseInt(rating));
  const diets = createDiets(details.data);
  const newItem = `<a href="${details.data.sourceUrl}">
      <div id="profile${id}" class="result">
        <img class="result-image" src="${image}">
        <div class="result-title">${title}</div>
        <div class="time-diet">
          <div class="time">
            <div><i class="fa fa-clock-o"></i> ${details.data.readyInMinutes} minutes</div>
          </div>
          <div class="diet">Diets: ${diets}</div>
        </div>
        <div class="source">Source: ${details.data.sourceName}</div>
        <div class="rating">${stars}</div>
      </div></a>

      <div id="modal${id}" class="modal">
        <div class="modal-content">
          <span id="close${id}">&times;</span>
          <p>${id} ${title} modal</p>
        </div>
      </div>`;

  const modalJS = `
    const modal${id} = document.getElementById("modal${id}");
  
    const btn${id} = document.getElementById("profile${id}");

    const span${id} = document.getElementById("close${id}")[0];

    btn${id}.onclick = function() {
      modal${id}.style.display = "block";
      console.log("${title} was pressed");
    }

    span${id}.onclick = function() {
      modal${id}.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal${id}) {
        modal${id}.style.display = "none";
      }
    }`;

  const modalStyle = `
    #modal${id} {
      display: none;
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    }
    `;

  const recipeInfo = `
      const trigger${id} = document.getElementById("${id}");
      document.querySelector("#${id}").addEventListener("click", (e) => {
        e.preventDefault();
        let food = document.querySelector("#rSearch").value;
        console.log(food);
        fetchFood(food);
      });`;
  document
    .querySelector(".result-container")
    .insertAdjacentHTML("beforeend", newItem);
  document
    .querySelector("#javascript")
    .insertAdjacentHTML("beforeend", modalJS);
  document.querySelector("style").insertAdjacentHTML("beforeend", modalStyle);
  console.log(document.querySelector("#javascript"));
  console.log(document.querySelector("style"));
  console.log(document.querySelector("body"));
}

// creates star rating graphic based on spoonacular score (0-100)
function createStars(rating) {
  console.log(typeof rating);
  console.log(`the rating is ${rating}`);
  if (rating <= 10) {
    return `
        <span class="half-star"><i class="fa fa-star-half-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 10 && rating <= 20) {
    return `
      <span class="full-star"><i class="fa fa-star"></i></span>
      <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
      <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
      <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
      <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 20 && rating <= 30) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="half-star"><i class="fa fa-star-half-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 30 && rating <= 40) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 40 && rating <= 50) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="half-star"><i class="fa fa-star-half-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 50 && rating <= 60) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 60 && rating <= 70) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="half-star"><i class="fa fa-star-half-o"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 70 && rating <= 80) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="empty-full-star"><i class="fa fa-star-o"></i></span>
        `;
  } else if (rating > 80 && rating <= 90) {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="half-star"><i class="fa fa-star-half-o"></i></span>
        `;
  } else {
    return `
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        <span class="full-star"><i class="fa fa-star"></i></span>
        `;
  }
}

// create HTML innertext for the types of diets each result supports
function createDiets(details) {
  let diets = [];
  if (details.vegetarian) {
    diets.push("Vegetarian");
  }
  if (details.vegan) {
    diets.push("Vegan");
  }
  if (details.glutenFree) {
    diets.push("Gluten Free");
  }
  if (details.dairyFree) {
    diets.push("Dairy Free");
  }
  let phrase = "";
  if (diets.length === 0) {
    return "None";
  } else if (diets.length === 1) {
    return diets[0];
  } else {
    for (let i = 0; i < diets.length - 1; i++) {
      phrase += `${diets[i]}, `;
    }
    phrase += diets[diets.length - 1];
    return phrase;
  }
}
