import { useChat } from "./hooks/useChat";
import { ChatWindow } from "./components/ChatWindow";

export default function App() {
  const chat = useChat();
  return <ChatWindow {...chat} />;
}
