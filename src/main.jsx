import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name="Bananas" description="They are yellow." />
    <Card name="Apples" description="They are red." />
    <Card name="Oranges" description="They are orange." />
    <App />
    <Footer />
  </StrictMode>,
)
