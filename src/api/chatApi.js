export async function sendChatMessage({ message, streaming, onChunk }) {
  const res = await fetch("http://localhost:3001/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, streaming })
  });

  if (!streaming) {
    const data = await res.json();
    return data.reply;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let fullText = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
    fullText += chunk;
    onChunk(chunk);
  }

  return fullText;
}