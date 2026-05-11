
const ShowUserName = (props) => {
  return (
    <div>
        <h2>Aprendendo props</h2>
        <p>Imprimindo nome com props: {props.usuario}</p>
        {/* props pega os valores do pai, que podem estar em App.jsx, como uma váriavel, useState, etc... Declarar props e puxar com props.name (exemplo)*/}
    </div>
  )
}

export default ShowUserName