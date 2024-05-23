import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList';
import axios from 'axios'
import AddChallenge from './component/AddChallenge';

function App() {

  const[challenges, setChallenge] = useState([]);
  
  useEffect(()=> {
    fetchChallenge();
  },[]);
  
  const fetchChallenge = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenge(response.data);
    } catch (error) {
      console.log("Error fetching the challenges", error);
    }
    
  };

  const handleChallengeAdded = () => {
    fetchChallenge();
  }

  return (
    <div className="App">
      <h1>Monthly Planner</h1>
      <AddChallenge onChallengeAdded = {handleChallengeAdded}/>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App;
