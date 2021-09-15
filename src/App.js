import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [emojisData, setemojisData] = useState([]);
  const [loading, setloading] = useState(false);
  const [eror, seteror] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setloading(true);
      try {
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28');
        setemojisData(res.data);
        setloading(false);
      } catch (error) {
        console.error(error);
        seteror(false);
        setloading(false);
      }
    }
    fetchEmojis();
  }, []);

  console.log('loading ? ', loading);
  console.log('error ? ', eror);
  console.log('emojisData ? ', emojisData);

  return (
    <div>
      <h1>Hallo World</h1>
    </div>
  );
}

export default App;
