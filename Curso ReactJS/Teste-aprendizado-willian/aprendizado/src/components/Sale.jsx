import { useState } from "react"
import './Sale.css'
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { GiBasketballJersey } from "react-icons/gi";

const Sale = () => {
const [sale, setSale] = useState(0)
const [price] = useState(25)

  return (
    <div className="product">
        <h4>Camisa BasketBall Golden State Warrior</h4>
        <div className="productState">
            <div className="iconSale"><GiBasketballJersey size="150" /></div>
            <div className="AddMinus">
                <span onClick={() => {setSale(sale - 1)}}><CiSquareMinus size="40" cursor="pointer" /></span>
                <span className="AddItem">{sale}</span>
                <span onClick={() => {setSale (sale +1)}}><CiSquarePlus size="40" cursor="pointer" /></span>
            </div>
            <p className="totalPrice">R$:{price * sale}</p>
            <button>Comprar</button>
        </div>
    </div>
  )
}

export default Sale