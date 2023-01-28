import React from "react";
import Globais from "./Globais";

export default function Info() {

  return(
    <>
      <p>Nome: {Globais.nome}</p>
      <p>Sobrenome: {Globais.sobrenome}</p>
      <p>Idade: {Globais.idade}</p>
    </>
  )
}
