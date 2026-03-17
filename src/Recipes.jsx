import './Recipes.css'
import Card from './Card.jsx'
import {useState} from 'react'

function Recipes(){
    const [recipes, setRecipes] = useState([
        'Bananas',
        'Banana Smoothie',
        'Banana Bread'
      ]);
      const [inputValue, setInputValue] = useState('');
    
      // 2. Handler to add a new recipe
      const addRecipe = () => {
        if (inputValue.trim() !== '') {
          // Create a new array, add the new item, and update state
          setRecipes([...recipes, inputValue]);
          // Clear input field
          setInputValue('');
        }
      };
    return(
        <div id="recipes">
            <Card name="Bananas" description="The classic taste and texture" />
            <Card name="Banana Smoothie" description="You can drink bananas now" />
            <Card name="Banana Bread" description="Perfect blend of banana with bread" />
            <h1>Recipes with bananas</h1>
            <input
          id="recipe-input"
          placeholder="Add a banana recipe"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
            <button id="add-recipe" onClick={addRecipe}>
          Add Recipe
        </button>
        <ul id="recipe-list">
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
        </div>
    )
}

export default Recipes