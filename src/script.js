function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 15,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let ingredientElement = document.querySelector("#ingredient");

  let apiKey = "aa50c5taa349ad0ccb0b41133of3fd60";
  let prompt = `User instructions: create a simple and delicious recipe making sure to include ${ingredientElement.value} in the recipe. Display the recipe with the ingredient list first and then the method. Create a heading for the ingredient list using the  HTML format <h3> and put each ingredient on a new line using  HTML format <br />. Create a heading for the method using the  HTML format <h3> and display each sentence on a new line using the HTML format <br />. Only provide the title of the recipe using the format <h2>, the ingredient list and the method. Use metric measurements for the ingredients. Use the word 'and' instead of the symbol '&' in any receipes that require it`;
  let context = `You are an AI assistant who loves cooking and has traied with the top chefs in the world. You love to create simple, quick, easy to make, unique and delicious recipes using ${ingredientElement.value} as an essential ingredient. Please make sure you follow the user instructions`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);

  let recipeBox = document.querySelector("#recipe");
  recipeBox.classList.remove("hidden");

  new Typewriter("#recipe", {
    strings: `Generating recipe for you... <div class="hourglass"> ⏳ </div>`,
    autoStart: true,
    cursor: "",
    delay: 70,
  });
}

let inputFormElement = document.querySelector("#recipe-form");
inputFormElement.addEventListener("submit", generateRecipe);
