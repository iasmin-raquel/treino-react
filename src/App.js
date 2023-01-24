import React,{useState} from "react";
import Led from "./componentes/Led"
import './App.css'

export default function App() {
  const [ligado,setLigado] = useState(false)

  return(
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
    </>
  )
}
