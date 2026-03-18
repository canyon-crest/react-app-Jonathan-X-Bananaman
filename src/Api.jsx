import { useEffect, useState } from 'react';
import { db, auth, provider } from './firebase'; // Custom Firebase config
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'; // Auth methods
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods

function Api() {
const [apiData, setApiData] = useState('');
  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setApiData(data.message); // "message" is the field of the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };
  

  // UI rendering
  return (
    <div>
      {/*<h1>Firebase + React App with Google Log-in</h1>*/}
      <button onClick={fetchDogImage}>Fetch Dog Image</button>
        {apiData && <img src={apiData} alt="Random Dog" />}
    </div>
  )}
export default Api