import { useState } from "react";
import { sendChatMessage } from "../api/chatApi";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [streaming, setStreaming] = useState(true);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMsg = { id: crypto.randomUUID(), role: "user", content: text };
    const assistantMsg = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: ""
    };

    setMessages((m) => [...m, userMsg, assistantMsg]);

    await sendChatMessage({
      message: text,
      streaming,
      onChunk: (chunk) => {
        setMessages((msgs) =>
          msgs.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: m.content + chunk }
              : m
          )
        );
      }
    });
  }

  return {
    messages,
    streaming,
    setStreaming,
    sendMessage
  };
}