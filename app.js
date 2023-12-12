const API_KEY = "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";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 20,
    }),
  });

  const data = await response.json();
  return data;
}


const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt.value);
  console.log(response);
  output.innerHTML = response.choices[0].text;
});
