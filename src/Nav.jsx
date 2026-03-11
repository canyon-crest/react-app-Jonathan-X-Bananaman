import './Nav.css'

function Nav({setPage}){
    return(
        <div id="header">
            <ul>
                <li onClick={()=>setPage("home")}>Home</li>
                <li onClick={()=>setPage("history")}>History</li>
                <li onClick={()=>setPage("recipes")}>Recipes</li>
            </ul>
        </div>
    )
}
export default Nav