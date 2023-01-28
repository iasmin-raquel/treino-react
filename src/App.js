import React, {useState} from "react";
import Globais from "./componentes/Globais";
import Info  from "./componentes/Info"

export default function App() {

  const [frase, setFrase] = useState(Globais.frase)

  const gravarFrase = () => {
    Globais.frase = frase
  }

  const verFrase = () => {
    alert(Globais.frase)
  }

  return(
    <>
      <Info></Info>
      <hr/>
      <p>Nome: {Globais.nome}</p>
      <p>Sobrenome: {Globais.sobrenome}</p>
      <p>Idade: {Globais.idade}</p>
      <hr/>
      <input type="text" value={frase} onChange={(e)=>{setFrase(e.target.value)}}></input>
      <br></br>
      <button onClick={()=>{gravarFrase()}} >Gravar Frase</button>
      <button onClick={()=>{verFrase()}} >Mostrar Frase</button>
    </>
  )
}
