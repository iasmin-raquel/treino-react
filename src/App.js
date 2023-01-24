import React,{useState} from "react";

export default function App() {

  const [nome, setNome] = useState('') 

  const handleChangeNome = (e)=> {
    setNome(e.target.value)
  }

  return(
    <>
      <label>Digite seu nome</label>
      <input type='text' name="fnome" value={nome} onChange={(e)=>handleChangeNome(e)}/>
      <p>Nome Digitado: {nome}</p>
    </>
  )
}
