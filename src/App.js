import {useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [backTOLIst,setbackTOLIst]=useState()
  const [keyword, setkeyword] = useState('');
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState(null);
  const [loading, setloading] = useState(false);
  const [singleHit, setsingleHit] = useState({ key: '' });
console.log(backTOLIst , '====================================backTOLIst')
  async function apiCaller() {
    setloading(true);

    try {
      let api = await fetch(`https://www.omdbapi.com/?s=${keyword}&apikey=39ae0637`);
      let apiJson = await api.json();
      console.log(apiJson, ' api===================json');
      const { Search } = apiJson;

      const movieData = Search?.map((item) => ({
        title: item.Title,
        src: item.Poster,
        type: item.Type,
        year: item.Year,
        key: item.imdbID,
      })) || [];

      setdata(movieData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setdata([]); // Clear data on error
    } finally {
      setloading(false);
    }
  }

  const fetchAdditionalData = async (key) => {
    // if (!key) return;

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${key}?api_key=d1b83dd054786999cdeab1df570feb46`);
      const data2res = await response.json();
      console.log(data2res, '==============datares');
      setdata2(data2res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Header setKeyword={setkeyword} keyword={keyword} apiCaller={apiCaller} data={data} />
      <Main 
        data={data} 
        setbackTOLIst={setbackTOLIst}
        backTOLIst={backTOLIst}
        data2={data2} 
        loading={loading} 
        singleHit={singleHit} 
        setsingleHit={(hit) => {
          setsingleHit(hit); 
          fetchAdditionalData(hit.key); // Call when singleHit is set
        }} 
      />
    </>
  );
}

export default App;
