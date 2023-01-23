import React from "react";
import Dados from "./Dados";

export default function Corpo() {
  const dia = ()=> {
    return '16'
  }
  const somar = (n1, n2)=> {
    return n1 + n2
  }

  return(
    <section>
      <p>Aprendendo a criar componentes em react</p>
      <p>Usando a pasta componentes eu crio um arquivo JS</p>
      <p>Crio a base da função react e retorno o conteúdo do componente</p>
      <Dados dia={dia} mes='dezembro' ano = '2003' somar = {somar}/>
    </section>
  )
}