document.addEventListener("DOMContentLoaded", function() {
  const translateBtn = document.getElementById("translateBtn");
  const input = document.getElementById("input");
  const targetLanguage = document.getElementById("targetLanguage");
  const output = document.getElementById("output");

  translateBtn.addEventListener("click", function() {
    const text = input.value;
    const language = targetLanguage.value;

    if (text.trim() === "") {
      output.textContent = "Please enter text to translate.";
      return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with your Google Cloud API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: language,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        output.textContent = translatedText;
      })
      .catch(error => {
        console.error("Error translating:", error);
        output.textContent = "Error translating. Please try again.";
      });
  });
});
