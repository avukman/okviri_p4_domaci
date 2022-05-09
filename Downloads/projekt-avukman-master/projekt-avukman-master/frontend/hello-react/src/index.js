import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  //const ime="Ana"
  const godRod = () => {
    const trenGod = new Date().getFullYear()
    return trenGod - props.god
    }
  
  return(
    <div>
      <p>Hello {props.ime}</p>
      <p>Ti imaš {godRod()} godina</p>
    </div>
  )
}

const Pozdrav = () => {
  return(
    <div>
      <p>Dobar dan</p>
    </div>
  )
}

const App = () => {

  //logika
  //izgled
  return (
  <div className='glavniDiv'>
    <h1>Pozdravi</h1>
    <Hello ime="Ana" god={1995}/>
    <Hello ime="Ante" />
    <Hello ime="Nina" />
    <Pozdrav />
  </div>
  )
 }
 
ReactDOM.render(<App />, document.getElementById('root'))