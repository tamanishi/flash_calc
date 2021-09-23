import React, {useEffect, useState} from 'react';

import './App.css';

const interval = 1300;

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState([0, 0, 0]);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, interval);

    if (count % 2 === 0) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      setAnswer([x, y]);
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
      <p>{answer[0]} + {answer[1]} = {answer[2]}</p>
    </div>
  );
}

export default App;
