import { useEffect, useState } from 'react';
import './App.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function initializeData() {
      fetch(`${BACKEND_URL}`)
        .then((response) => response.json())
        .then((resJson) => {
          setData(resJson)
        })
        .catch(function (err) {
          alert('Failed to fetch data!\nOpen the console to see a more complete message')
          console.log(err)
        });
    }
    initializeData();
  }, []);

  return (
    <>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
