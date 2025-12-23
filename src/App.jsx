//import { useChat } from "./hooks/useChat";
//import { ChatWindow } from "./components/ChatWindow";

import { Sidebar } from "./components/Sidebar";
import { LayoutContent } from "./components/LayoutContent";


export default function App() {
  console.log('App loaded')
  return (
  <div className="app-layout">
    <Sidebar />
    <LayoutContent />
  </div>
  );
}
