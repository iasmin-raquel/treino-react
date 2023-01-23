import React from "react";

export default function Dados(props) {
  return(
    <section>
      <p>dia: {props.dia}</p>
      <p>mes: {props.mes}</p>
      <p>ano: {props.ano}</p>
    </section>
  )
}