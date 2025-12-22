import { MessageBubble } from "./MessageBubble";

export function MessageList({ messages }) {
  return (
    <div className="flex-1 p-4 space-y-3 overflow-y-auto">
      {messages.map((m) => (
        <MessageBubble key={m.id} role={m.role} content={m.content} />
      ))}
    </div>
  );
}