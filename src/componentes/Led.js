import React from "react";
import LedVermelho from "./imgs/led_vermelho.png"
import LedVerde from "./imgs/led_verde.jpg"

export default function Led(props) {

  return(
    <>
      <img style={{width:"13rem"}} alt="led vermelho" src={props.ligado?LedVerde:LedVermelho} />
      <button onClick={()=>{props.setLigado(!props.ligado)}} >{props.ligado?"Desligar":"Ligar"}</button>
    </>
  )
}
