import React from 'react'

export const Notas = (props) => {
  return (
    <div>
      <label>Degite a nota {props.children}</label>
      <input type="text" value={props.nota} onChange={(e)=>props.setNota(e.target.value)}></input>
    </div>
  )
}
