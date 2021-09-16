import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';
import Emojis from './components/Emojis';

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
        seteror(true);
        setloading(false);
      }
    }
    fetchEmojis();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Hallo ayub</h1>
        {loading && <Empty text="loading..." />}
        {eror && <Empty text="error!" />}
        {emojisData.length > 0 && <Emojis emojisData={emojisData} />}
      </Container>
    </>
  );
}

export default App;
