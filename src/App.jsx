import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import History from './History.jsx'
import Recipes from './Recipes.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage]=useState("home")
  return (
    <>
      {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 67)}>
          count is {count}
        </button>
        <p>hi</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
  </p>*/}
    <Nav setPage={setPage} />
    {page==="home" && <Home />}
    {page==="history" && <History />}
    {page==="recipes" && <Recipes />}
    <Footer />
    </>
  )
}

export default App
