const carro = {
    modelo: "Uno",
    ano: 2023,
    km: 10000,
    combustivel: "Gasolina",
    litrosConsumidos: 625
};

let mediaKmLitros = carro.km / carro.litrosConsumidos 

console.log(`O veiculo ${carro.modelo} ${carro.ano} fez em média ${mediaKmLitros} KM/L com o combustível ${carro.combustivel}. `)