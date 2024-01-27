import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [calcResult, setCalcResult] = useState([0, 0, 0, 0, 0]);

  const query = new URLSearchParams(window.location.search);
  const interval = query.get('interval') || 1000;

  if (query.has('interval') === true) {
    console.log('interval value was specifided.')
  }

  useEffect(() => {
    let id = -1;
    if (query.has('interval') === true) {
      id = setInterval(() => {
        setCount(count + 1);
      }, interval);
    }

    if (count % 2 === 0) {
      let x = 0, y = 0;
      let ope = (Math.floor(Math.random() * 100)) % 4;
      while (ope === calcResult[0]) {
        ope = Math.floor(Math.random() * 100) % 4;
        if (ope !== calcResult[0]) {
          break;
        }
      }
      console.log('ope : ' + ope);
      switch (ope) {
        case 0:
          // 足し算
          while ((x + y) < 50) {
            x = Math.floor(Math.random() * 30);
            y = Math.floor(Math.random() * 30);
            setCalcResult([ope, x, y]);
          }
          break;
        case 1:
          // 引き算
          while (x > 100 || x < 10) {
            x = Math.floor(Math.random() * 100);
          }
          while (y > 100 || y < 2) {
            y = Math.floor(Math.random() * 10);
          }
          setCalcResult([ope, x, y]);
          break;
        case 2:
          // 掛け算
          while (x > 20 || x < 2) {
            x = Math.floor(Math.random() * 100);
          }
          while (y > 10 || y < 2) {
            y = Math.floor(Math.random() * 10);
          }
          setCalcResult([ope, x, y]);
          break;
        case 3:
          // 割り算
          while (x > 70 || x < 10 || x === 0) {
            x = Math.floor(Math.random() * 100);
          }
          while (y > 10 || y < 2) {
            y = Math.floor(Math.random() * 10);
          }
          setCalcResult([ope, x, y]);
          break;
        default:
          break;
      }


    } else {
      switch (calcResult[0]) {
        case 0:
          // 足し算
          setCalcResult([calcResult[0], calcResult[1], calcResult[2], calcResult[1] + calcResult[2]]);
          break;
        case 1:
          // 引き算
          setCalcResult([calcResult[0], calcResult[1], calcResult[2], calcResult[1] - calcResult[2]]);
          break;
        case 2:
          // 掛け算
          setCalcResult([calcResult[0], calcResult[1], calcResult[2], calcResult[1] * calcResult[2]]);
          break;
        case 3:
          // 割り算
          setCalcResult([calcResult[0], calcResult[1], calcResult[2], Math.floor(calcResult[1] / calcResult[2]), calcResult[1] % calcResult[2]]);
          break;
        default:
          break;
      }
    }

    return () => {
      if (query.has('interval') === true) {
        clearInterval(id);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div onClick={() => {
      setCount(count + 1);
    }}>
      <div className="App-header">
        <div className="box">{calcResult[1]} {
          (() => {
            switch (calcResult[0]) {
              case 0:
                return '+';
              case 1:
                return '-';
              case 2:
                return '×';
              case 3:
                return '÷'
              default:
                return '';
            }
          })()
        } {calcResult[2]} = {calcResult[3]}{
            (() => {
              if (calcResult[0] === 3 && calcResult[4] > 0) {
                return '...' + calcResult[4];
              }
            })()
          }</div>
      </div>
    </div>
  );
}

export default App;
