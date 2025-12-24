import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App_old() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {

  return (
    <div>
            {/* Top Navbar */}
      <header className="fixed top-0 left-0 h-14 w-full bg-gray-800 text-white flex items-center px-6 shadow z-10">
        <h1 className="text-lg font-semibold">My App</h1>
      </header>

          {/* Main area below navbar */}
      <div className="flex pt-14 h-full"></div>
        
          {/* Sidebar */}
          <aside className="w-64 bg-gray-100 border-r p-4">
            <p className="font-semibold mb-2">Sidebar</p>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
              <li className="hover:text-blue-600 cursor-pointer">Models</li>
              <li className="hover:text-blue-600 cursor-pointer">Settings</li>
            </ul>
          </aside>
    </div>
  )
}
export default App
