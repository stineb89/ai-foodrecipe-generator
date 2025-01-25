function recipeGenerator(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");

  let apiKey = `5e64c3tb70d2afbdd0ba0e314o875a8e`;
  let context = `Please write different food recipe in advanced html. Not same recipe as before. Always new one. Only vegetarian food. Sign with Vegetarian food recipe generator at the end in <strong></strong> element. Do not include html at the beginning. Write headings as h2 in center and with font Macondo and font-size 30px. If user write any meat, come up with different plant-based recipe with for example beef, chicken, meat or sausage. Do not come with same one. Always new.`;
  let prompt = `Generate a recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipe.innerHTML = `<div class="user-inter"><span class="recipejs blink">⚙️</span><em>Generating a recipe about <strong class="user">${instructionsInput.value}</strong></em></div>`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#generator");
recipeForm.addEventListener("submit", recipeGenerator);

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "✏️",
  });
}
