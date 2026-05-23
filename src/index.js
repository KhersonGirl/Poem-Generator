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
  let context = "You are a romantic poet who writes short nice poems.Write each string with <br />. Follow user instructions please. Sing a poem with 'SheCodes AI' with <strong></strong> tag. ";

  let apiKey = "e2564f39e1f4c4aa4bf09cftodd0583e";
  
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
