import React from 'react';
import logo from './logo.svg';
import './App.css';

const contador = 0

const verificaContador = () => {
  if (contador === 0) {
    return <p>"Contador não iniciado"</p>
  }else {
    return <p>"Contador iniciado"</p>
    }
}

function App() {
  return (
    <div className="App">
      <h2>Contador</h2>
      <p>{contador}</p>
  
      <p>{verificaContador}()</p>

      <button class = "btnMaisUm">+1</button>
      <button class = "btnMenosUm">-1</button>
      <button class = "btnResetar">Resetar</button>
     
    </div>

    
  );
}

export default App;
