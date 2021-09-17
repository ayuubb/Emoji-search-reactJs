import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';
import Emojis from './components/Emojis';
import Input from './components/input';

function App() {
  const [emojisData, setemojisData] = useState([]);
  const [loading, setloading] = useState(false);
  const [eror, seteror] = useState(false);
  const [searchText, setsearchText] = useState('');

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

  const searchEmojis = (e) => {
    setsearchText(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Input onChange={searchEmojis} value={searchText} />
        {loading && <Empty text="loading..." />}
        {eror && <Empty text="error!" />}
        {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText} />}
      </Container>
    </>
  );
}

export default App;
