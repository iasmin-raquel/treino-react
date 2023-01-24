import React,{useState} from "react";
import Relogio from "./componentes/Relogio";
import Numero from "./componentes/Numero";
import './App.css'

export default function App() {
  
  const [num,setNum] = useState(10)

  const textoDestaque={
    fontSize: '2rem',
    fontStyle: 'italic'
  }

  return(
    <>
      <section className="caixa">
        <Relogio/>
        <h1 style={{color:'red', fontSize:'5rem', margin:'0'}}>React</h1>
        <h2 style={textoDestaque}>Estilização de componentes</h2>
        <p className="texto">Editando o CSS do aplicativo</p>
        <p>O valor do state: {num}</p>
        <button onClick={() => setNum(100)} >100</button>
        <Numero num={num} setNum={setNum}/>
      </section>
    </>
  )
}
