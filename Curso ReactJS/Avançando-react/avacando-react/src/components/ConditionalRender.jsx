import { useState } from "react"


const ConditionalRender = () => {
const [Conditional] = useState(false)

  return (
    <div>
        <h2>Teste de Condicional simples com useState.</h2>
        {Conditional && <p>Se for <strong>true</strong>, imprima isso!</p>}
        {!Conditional && <p>Se for <strong>false</strong>, imprima isso! </p>}

        <h2>Teste de Condicional com if ternário</h2>
        {Conditional ? (<p>Resultado é TRUE</p>) : (<p>Resultado é FALSE</p>)} {/* Primeira condição: TRUE, ultima é FALSE*/}
    </div>
  )
}

export default ConditionalRender