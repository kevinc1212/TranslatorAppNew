async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const language = document.getElementById("languageSelect").value;
    const outputText = document.getElementById("outputText");

    if (!inputText.trim()) {
        outputText.innerText = "Please enter text to translate.";
        return;
    }

    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|${language}`);
        const data = await response.json();
        
        if (data.responseData.translatedText) {
            outputText.innerText = data.responseData.translatedText;
        } else {
            outputText.innerText = "Translation failed. Try again.";
        }
    } catch (error) {
        outputText.innerText = "Error fetching translation.";
        console.error("Translation error:", error);
    }
}
