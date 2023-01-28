import React from 'react'

class Classe extends React.Component{
  constructor(props) {
    super(props)
    this.modelo='Range Hover'
    this.state={
      ligado: false,
      velAtual: 0,
    }
    this.ld = this.ligar.bind(this)
  }

  ligar() {
    //this.setState({ligado: !this.state.ligado})
    this.setState(
      (state)=>(
        {ligado: !state.ligado}
      )
    )
  }

  acelerar() {
    this.setState(
      (state,props)=>(
        {velAtual:state.velAtual + props.fator}
      )
    )
  }

  render() {
    return(
      <div>
        <h1>Primeiro Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado? "Sim":"Não"}</p>
        <p>Velocidade Atual: {this.state.velAtual}</p>
        <button onClick={this.ld}>Ligar Carro</button>
        <button onClick={()=>{this.acelerar()}}>Acelerar Carro</button>
      </div>
    )
  }
}

export default Classe
