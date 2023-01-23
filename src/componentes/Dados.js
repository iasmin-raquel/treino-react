import React from "react";

export default function Dados(props) {
  const n1 = 2
  const n2 = 3
  return(
    <section>
      <p>dia: {props.dia()}</p>
      <p>mes: {props.mes}</p>
      <p>ano: {props.ano}</p>
      <p>A soma de {n1} + {n2} é igual a  {props.somar(n1, n2)}</p>
    </section>
  )
}