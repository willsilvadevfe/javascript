
const CarDetails = ({brand, KM, color, year, flex}) => {
  return (
    <div>
        <h2>props com objetos</h2>
        <p>Marca: {brand}</p>
        <p>Kilometragem: {KM}</p>
        <p>Cor: {color}</p>
        <p>Combustivel: {flex == true ? <p>Álcool / Gasolina</p> : <p>Gasolina</p>}</p>
        <p>Ano de fabricação: {year}</p>
    </div>
  )
}

export default CarDetails