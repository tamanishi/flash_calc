import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [addition, setAddition] = useState([0, 0, 0]);

  const query = new URLSearchParams(window.location.search);
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
        setAddition([x, y]);
      }
    } else {
      setAddition([addition[0], addition[1], addition[0] + addition[1]]);
    }

    return () => {
      clearInterval(id);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="App-header">
      <div className="box">{addition[0]} + {addition[1]} = {addition[2]}</div>
    </div>
  );
}

export default App;
