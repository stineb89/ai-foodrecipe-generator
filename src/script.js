function recipeGenerator(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");

  let apiKey = `5e64c3tb70d2afbdd0ba0e314o875a8e`;
  let context = `Please write food recipe in advanced html. Never same one as before. Always new one. Only vegetarian food. Sign with Vegetarian food recipe generator at the end in <strong></strong> element. Do not include html at det beginning.`;
  let prompt = `Generate an recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Prompt: ${context}`);
  console.log(`Generating...`);
  recipe.innerHTML = `<span class="recipejs">⚙️</span><em>Generating your recipe..</em>`;
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
