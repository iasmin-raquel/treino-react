import React from "react";
import Binoculo from "./imgs/binoculo.jpg"

export default function Header() {
  return(
    <header>
      <img alt="binoculo" src={Binoculo}/>
      <h1>Binoculo</h1>
    </header>
  )
}