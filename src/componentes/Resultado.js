import React from 'react'

export const Resultado = (props) => {
  return (
    <div>
      <p>Soma das notas {props.somaNotas}</p>
      <p>{props.somaNotas >= 70 ? "Aprovado":"Reprovado"}</p>
    </div>
  )
}
