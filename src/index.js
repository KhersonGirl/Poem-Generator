function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#instructions");
  let prompt = `Generate a poem about ${instructionsElement.value}`;
  let context =
    "You are a romantic poet who writes short nice poems.Write each string with <br />. Follow user instructions please. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning ";

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsElement.value}...</div>`;

  let apiKey = "e2564f39e1f4c4aa4bf09cftodd0583e";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
