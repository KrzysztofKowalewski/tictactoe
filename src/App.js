import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';

function App() {
  let [boardState, changeBoard] = useState(['','','','','','','','',''])
  let [turn, changeTurn] = useState('X')
  const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  let [whoWon, setWinner] = useState(null);

  function checkifWin(){
    let pom1 = winner.map((comb,i) => {
      if(boardState[comb[0]] === 'X' && boardState[comb[1]] === 'X' && boardState[comb[2]] == 'X'){
        alert("Wygrywa krzyżyk!");
        setWinner('X')
        window.location.reload();
      }
    });

    let pom2 = winner.map((comb,i) => {
      if(boardState[comb[0]] === 'O' && boardState[comb[1]] === 'O' && boardState[comb[2]] == 'O'){
        alert("Wygrywa kółko!");
        setWinner('O')
        window.location.reload();
      }
    });
    const isFull = !boardState.includes('');
    if(isFull && whoWon == ''){
      alert("Nikt nie wygrał! :(");
      window.location.reload();
    }
  }

  useEffect(() => {
    checkifWin()
  }, [boardState])


  function changeContent(id) {
    if(turn == 'X'){
      let pom = boardState.map((x, i) => {
          if(i === id){
              x = "X"
              return x
          }
          else{
            return x
          }
      });
      changeBoard(pom)
      checkifWin()
      changeTurn('O')
    }
    else{
      let pom = boardState.map((o, i) => {
          if(i === id){
              o = "O"
              return o
          }
          else{
            return o
          }
      });
      changeBoard(pom)
      checkifWin()
      changeTurn('X')
      
    }
    }
    

  return (
    
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" id='logo' />
      <div id='board'>
        {boardState.map((element,i) => (
          <button  key={i} onClick={() => changeContent(i)}>{element}</button>
        ))}
      </div>
    </div>
  );
}

export default App;




{/* <button id='0' onClick={() => changeContent(0)}>{boardState[0]}</button>
        <button id='1' onClick={() => changeContent(1)}>{boardState[1]}</button>
        <button id='2' onClick={() => changeContent(2)}>{boardState[2]}</button> 
        <button id='3' onClick={() => changeContent(3)}>{boardState[3]}</button>
        <button id='4' onClick={() => changeContent(4)}>{boardState[4]}</button>
        <button id='5' onClick={() => changeContent(5)}>{boardState[5]}</button>
        <button id='6' onClick={() => changeContent(6)}>{boardState[6]}</button>
        <button id='7' onClick={() => changeContent(7)}>{boardState[7]}</button>
        <button id='8' onClick={() => changeContent(8)}>{boardState[8]}</button> */}
