import './Recipes.css'

function Recipes(){
    return(
        <div id="recipes">
            <h1>Recipes with bananas</h1>
            <input id="recipe-input" placeholder="Add a banana recipe"></input>
            <button id="add-recipe">Add Recipe</button>
            <ul id="recipe-list">
                <li>Banana Bread</li>
            </ul>
        </div>
    )
}

export default Recipes