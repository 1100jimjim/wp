let key = "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";

async function chat(q) {
    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            body: JSON.stringify({
                "model": "llama3-8b-8192",
                "messages": [{"role": "user", "content": q}],
                "temperature": 0.7
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const jsonData = await response.json();
        console.log(JSON.stringify(jsonData, null, 2));
        return jsonData;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const targetLang = document.getElementById("targetLang").value;
    if (!inputText) {
        alert("请输入要翻译的文本！");
        return;
    }
    const query = `请将以下文本翻译成${targetLang}:\n\n${inputText}`;
    const jsonData = await chat(query);
    const outputDiv = document.getElementById("outputText");
    if (jsonData && jsonData.choices && jsonData.choices[0] && jsonData.choices[0].message) {
        outputDiv.innerText = jsonData.choices[0].message.content;
    } else {
        outputDiv.innerText = "翻译失败，请稍后重试。";
    }
}

