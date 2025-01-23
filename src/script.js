function affirmationGenerator(event) {
  event.preventDefault();

  new Typewriter("#affirmation", {
    strings: "Generating..",
    autoStart: true,
    delay: 20,
    cursor: "✏️",
  });
}

let affirmationForm = document.querySelector("#generator");
affirmationForm.addEventListener("submit", affirmationGenerator);
