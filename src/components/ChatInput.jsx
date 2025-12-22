import { useState } from "react";

export function ChatInput({ onSend, streaming, onToggleStreaming }) {
  const [input, setInput] = useState("");

  function submit() {
    onSend(input);
    setInput("");
  }

  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Type a message…"
        />
        <button
          onClick={submit}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>

      <label className="text-sm text-gray-600 mt-2 block">
        <input
          type="checkbox"
          checked={streaming}
          onChange={(e) => onToggleStreaming(e.target.checked)}
        />{" "}
        Streaming mode
      </label>
    </div>
  );
}
