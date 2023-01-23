import React from "react";
import Relogio from "./componentes/Relogio";
import './App.css'

export default function App() {
  
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
      </section>
    </>
  )
}
