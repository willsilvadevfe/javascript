import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'
import MyTitle from './components/MyTitle'

function App() {
 const classeDinamica = false
 const status = true
 const [name] = useState("Willian")
  return (
    <>
      <h2>Iniciando CSS com React</h2>
      <MyComponent />
      {/* INLINE CSS */}
      <p style={{color: "white", background: "gray", padding: "6px"}}>Este elemento foi estilizado em forma inline</p>
      {/* INLINE Style Dinâmico */}
      <h2 style={status ? ({color: "green", background: "lightgreen"}) : ({color: "red", background: "lightgray"})}>CSS Estilo dinâmico Inline</h2>
      <h3 style={name === "Willian" ? ({color: "red"}) : null}>Willian</h3>
      {/* Classe dinâmica */}
      <div className={classeDinamica ? 'classTrue' : 'classFalse'}></div>
      {/* CSS Modules */}
      <MyTitle />
      

    </>
  )
}

export default App
