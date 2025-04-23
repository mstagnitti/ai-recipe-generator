function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Generating recipe for you...",
    autoStart: true,
    cursor: "",
    delay: 40,
  });
}

let inputFormElement = document.querySelector("#recipe-form");
inputFormElement.addEventListener("submit", generateRecipe);
