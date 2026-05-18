import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'

function App() {
 const status = true
 const [name] = useState("Willian")
  return (
    <>
      <h2>Iniciando CSS com React</h2>
      <MyComponent />
      {/* INLINE CSS */}
      <p style={{color: "white", background: "gray", padding: "6px"}}>Este elemento foi estilizado em forma inline</p>
      {/* INLINE Style Dinâmico */}
      <h2 style={status === true ? ({color: "green", background: "lightgreen"}) : ({color: "red", background: "lightgray"})}>CSS Estilo dinâmico Inline</h2>
      <h3 style={name === "Willian" ? ({color: "red"}) : null}>Willian</h3>
    </>
  )
}

export default App
