import './Recipes.css'
import Card from './Card.jsx'

function Recipes(){
    return(
        <div id="recipes">
            <Card name="Bananas" description="The classic taste and texture" />
            <Card name="Banana Smoothie" description="You can drink bananas now" />
            <Card name="Banana Bread" description="Perfect blend of banana with bread" />
            <h1>Recipes with bananas</h1>
            <input id="recipe-input" placeholder="Add a banana recipe"></input>
            <button id="add-recipe">Add Recipe</button>
            <ul id="recipe-list">
                <li>Bananas</li>
                <li>Banana Smoothie</li>
                <li>Banana Bread</li>
            </ul>
        </div>
    )
}

export default Recipes