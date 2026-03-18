import './Recipes.css'
import Card from './Card.jsx'
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "firebase/firestore";

function Recipes(){
    const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  // --- READ: Load items from Firestore ---
  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const loaded = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(loaded);
  };
  // Load items once when the page first renders
  useEffect(() => {
    loadItems();
  }, []);

  // --- WRITE: Add a new item to Firestore ---
  const handleAdd = async () => {
    if (inputText.trim() === "") return;
    await addDoc(collection(db, "items"), {
      text: inputText,
      createdAt: serverTimestamp()
    });
    setInputText("");   // clear the input
    loadItems();        // refresh the list
  };
    return(
        <div id="recipes">
            <Card name="Bananas" description="The classic taste and texture" />
            <Card name="Banana Smoothie" description="You can drink bananas now" />
            <Card name="Banana Bread" description="Perfect blend of banana with bread" />
            <h1>Recipes with bananas</h1>
            <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a recipe..."
          style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }}
        />
        <button onClick={handleAdd}>Add Recipe</button>
      
      {/* List of items from Firestore */}
      <h2>Recipes added:</h2>
      {items.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
        </div>
    )
}

export default Recipes