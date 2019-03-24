import React, { useReducer ,useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const fetchCat = () => axios.get('https://aws.random.cat/meow');

const initialState = {
  isFetching: false,
  cat: {},
  count: 0
}

const App = () => {

    const [count, setCount] = useState(0);

    const [cat, setCat] = useState({});

    useEffect(() => {
      fetchCat().then(response => {
        setCat(response.data)
      })
    },[]);

    // ใส่ log เพื่อดูว่ามัน render ยังไง
  console.log('render >>>')


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
          You click {count} times
          </p>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: 4,
              fontSize: '1.25rem'
            }}
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>

          <p>
            <img src={cat.file} alt="Meow" width="256" />
          </p>

        </header>
      </div>
    );
  
}

export default App;
