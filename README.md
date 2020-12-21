# Food + Co. Overview

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API and Data Sample

This project was built-out using spoonacular API, which can be found here: https://spoonacular.com/food-api. For this project, the four main HTTP requests being sent to the spoonacular API include:
- Search by Food Name: ```GET https://api.spoonacular.com/recipes/complexSearch?query={foodName}```
- Search by Nutrients Involved: ```GET https://api.spoonacular.com/recipes/findByNutrients?{nutrientsInvolved}```
- Search by Ingredients Used: ```GET https://api.spoonacular.com/recipes/findByIngredients?ingredients={ingredientsUsed}```
- Recipe by Food ID: ```GET https://api.spoonacular.com/recipes/{id}/information```

Here is an example of an advanced HTTP response that combines the name, nutrients, and ingredients searches for the request of (```name = pasta, maxFat = 25```) ```GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2```:
```
{
    "offset": 0,
    "number": 2,
    "results": [
        {
            "id": 716429,
            "calories": 584,
            "carbs": "84g",
            "fat": "20g",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg",
            "protein": "19g",
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
        },
        {
            "id": 715538,
            "calories": 521,
            "carbs": "69g",
            "fat": "10g",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg",
            "protein": "35g",
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta"
        }
    ],
    "totalResults": 86
}
```

## Wireframes

![image](fork-and-co-wireframe.png)
This wireframe representation of Fork + Co. can be found at: https://wireframe.cc/ubTlr7).

## MVP 

- Find and use external api 
- Render data on page 
- Allow users to filter their recipe search by name, nutrients, or ingredients
- Rank recipes by their spoonacular score

## PostMVP  

- Allow users to further filter their results by cuisines, diets, intolerances, etc.
- Allow users to bookmark recipes found during their browser session
- Advanced CSS styling and animation

## Project Schedule

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 21| Prompt / Wireframes / Priority Matrix | Complete
|Dec 21| Project Approval | Incomplete
|Dec 21| Pseudocode | Incomplete
|Dec 22| Name, Nutrient, and Ingredient Searches | Incomplete
|Dec 23| Rank Recipes by score | Incomplete
|Dec 25| Base HTML, CSS, JS | Incomplete
|Dec 25| MVP | Incomplete
|Jan 5| Presentations | Incomplete

## Priority Matrix

![image](fork-and-co-priority-queue.png)

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Pseudocode | H | 0.5hrs | N/A |
| Name, Nutrient, and Ingredient Searches | H | 4hrs | N/A |
| Rank Recipes by score | H | 3hrs | N/A |
| Base HTML, CSS, JS | H | 6hrs | N/A |
| Further Search Filtering | L | 4hrs | N/A |
| Bookmarking Feature | L | 1hr | N/A |
| Advanced CSS | M | 5hrs | N/A |
| Total | H | 23.5hrs | N/A |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
