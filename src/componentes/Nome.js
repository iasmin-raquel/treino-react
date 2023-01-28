import React from 'react'

class Classe extends React.Component {
  constructor(props) {
    super(props)
    this.nome='iasmin'
    this.sobrenome='raquel'
    this.state={
      estudando:true
    }
  }
 
  estudar() {
    this.setState(
      (state) => ({estudando: !state.estudando})
    )
  }

  render() {
    return(
      <>
        <p>Nome: {this.nome}</p>
        <p>está estudando? {this.state.estudando? "Sim":"Não"}</p>
        <button onClick={()=>this.estudar()} >{this.state.estudando? "Parar de estudar":"Voltar a estudar"}</button>
      </>
    )
  }

}

export default Classe
