async function translateText() {
    const apiKey = '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';
    const endpoint = 'https://console.groq.com/keys';
    const inputText = document.getElementById('inputText').value;
    const targetLang = document.getElementById('targetLang').value;
    const prompt = `Translate the following text to ${targetLang}:\n${inputText}`;

    const body = JSON.stringify({
        model: "text-davinci-003",
        messages: [{ role: "user", content: prompt }]
    });

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: body
        });

        const data = await response.json();
        const translatedText = data.choices[0].message.content;
        document.getElementById('outputText').innerText = translatedText;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('outputText').innerText = '翻译出错，请稍后再试。';
    }
}
