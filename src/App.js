import React, {useState} from "react";

export default function App() {
  const [nome, setNome] = useState()

  const armazenar = (chave, item) => {
    localStorage.setItem(chave, item)
  }

  const verNome = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  } 

  return(
    <>
      <label>Digite seu nome: </label><br/>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
      <button onClick={()=>armazenar('ls_nome', nome)} >Armazenar</button>
      <button onClick={()=>verNome('ls_nome')} >Ver nome</button>
      <button onClick={()=>apagar('ls_nome')} >Remover Nome</button>

    </>
  )
}
