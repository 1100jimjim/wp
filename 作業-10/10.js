<html>
<body>
<script>
let key = "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"

async function chat(q) {
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))
    return jsonData
}

chat("GPT 是甚麼? 請用中文回答")

</script>
</body>
</html>
