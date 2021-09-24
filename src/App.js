import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState([0, 0, 0]);

  let query = new URLSearchParams(window.location.search);
  const interval = query.get('interval') || 1000;
  
  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, interval);

    if (count % 2 === 0) {
      let x = 0, y = 0;
      while ((x + y) < 10) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        setAnswer([x, y]);
      }
    } else {
      setAnswer([answer[0], answer[1], answer[0] + answer[1]]);
    }

    return () => {
      clearInterval(id);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="App-header">
      <div className="box">{answer[0]} + {answer[1]} = {answer[2]}</div>
    </div>
  );
}

export default App;
