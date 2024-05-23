import { useEffect, useState } from 'react';
import './App.css';
import ChallengeList from './component/ChallengeList';
import axios from 'axios'

function App() {

  const[challenges, setChallenge] = useState([]);
  
  useEffect(()=> {
    const fetchChallenge = async () => {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenge(response.data);
    };
    fetchChallenge();
  },[])

  return (
    <div className="App">
      <h1>Monthly Planner</h1>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App;
