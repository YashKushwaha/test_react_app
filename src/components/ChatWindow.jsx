import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export function ChatWindow({ messages, streaming, setStreaming, sendMessage }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <MessageList messages={messages} />
      <ChatInput
        onSend={sendMessage}
        streaming={streaming}
        onToggleStreaming={setStreaming}
      />
    </div>
  );
}
