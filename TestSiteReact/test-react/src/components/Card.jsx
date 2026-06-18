import "./Card.css";
import { BsTools } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { TbCarCraneFilled } from "react-icons/tb";

const Card = () => {
  const services = [
    {
      id: 1,
      icon: <BsTools size={28} color="#FFFFFF"/>,
      name: "Manutenção Preventiva",
      description:
        "Evite surpresas em seu caminho, faça manutenção preventiva frequentemente.",
      service: "Agendar Serviço"
    },
    {
      id: 2,
      icon: <PiEngineFill size={28} color="#FFFFFF" />,
      name: "Manutenção Elétrica",
      description:
        "Evite surpresas em seu caminho, faça manutenção elétrica frequentemente.",
        service: "Agendar Serviço"
    },
     {
      id: 3,
      icon: <GiCarWheel size={28} color="#FFFFFF" />,
      name: "Verifique os Pneus",
      description:
        "Verifique as condições dos pneus antes de qualquer viagem.",
        service: "Agendar Serviço"
    },
    {
      id: 4,
      icon: <TbCarCraneFilled size={28} color="#FFFFFF" />,
      name: "Seguro Veicular",
      description:
        "Garanta que o seguro esteja em dia para evitar imprevistos durante sua viagem.",
        service: "Agendar Serviço"
    },
  ];

  return (
    <div className="AllCards">
        {services.map((product) => (
            <div key={product.id} className="Cards">
                <span className="iconCard">{product.icon}</span>
                <h3 className="titleCard">{product.name}</h3>
                <p className="paragraphCard">{product.description}</p>
                <button className="buttonCard">{product.service}</button>
            </div>
        ))}
    </div>
 )
};

export default Card;
