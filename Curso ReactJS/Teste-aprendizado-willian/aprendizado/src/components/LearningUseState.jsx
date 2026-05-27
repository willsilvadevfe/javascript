import { useState } from "react"

const LearningUseState = () => {

const [writeParagraph, setWriteParagraph] = useState('Valor no useState')
    
  return (
    <div>
        <p>Texto do input: {writeParagraph}</p>
        <input onChange={ () => setWriteParagraph(event.target.value)}/>
    </div>
  )
}

export default LearningUseState