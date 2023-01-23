import React from "react";
import Dados from "./Dados";

export default function Corpo() {
  return(
    <section>
      <p>Aprendendo a criar componentes em react</p>
      <p>Usando a pasta componentes eu crio um arquivo JS</p>
      <p>Crio a base da função react e retorno o conteúdo do componente</p>
      <Dados dia='16' mes='dezembro' ano='2003'/>
    </section>
  )
}