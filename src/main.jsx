import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
{/*import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import History from './History.jsx'
import Recipes from './Recipes.jsx'
import Card from './Card.jsx'
*/}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<Nav />
    <Card name="Bananas" description="The classic taste and texture" />
    <Card name="Banana Smoothie" description="You can drink bananas now" />
    <Card name="Banana Bread" description="Perfect blend of banana with bread" />
    <App />
    <History />
    <Recipes />
<Footer />*/}
  </StrictMode>,
)
