import React from "react";

export default function App() {

  const carros = ['crossfox', 'onix', 'hilux', 'rangerhover', 'uno']

  const listaCarros = carros.map(
    (c,i) => <li>{i} - {c}</li>
  )

  return(
    <>
      <ul>{listaCarros}</ul>
    </>
  )
}
