const dados = [
  0.5, 1.001, 1.002, 1.003, 1.004, 1.005, 1.006, 1.007, 1.008, 1.009, 1.0, 1.01,
  1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14,
  1.15, 1.16, 1.17, 1.18, 1.19, 1.2, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27,
  1.28, 1.29, 1.3, 1.31, 1.32, 1.33, 1.34, 1.35, 1.36, 1.37, 1.38, 1.39, 1.4,
  1.41, 1.42, 1.43, 1.44, 1.45, 1.47, 1.48, 1.49, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0,
  4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5,
  12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 15.5, 16.0, 16.5, 17.0, 17.5, 18.0,
  18.5, 19.0, 19.5, 20.0, 20.5, 21.0, 21.5, 22.0, 22.5, 23.0, 23.5, 24.0, 24.5,
  25.0, 50.0, 75.0, 100.0,
];

const LIMITE_COMBINACOES = 4;

function buscarCombinacoes() {
  const input = parseFloat(document.getElementById("valor").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(input) || input <= 0) {
    resultado.innerText = "Por favor, insira um número válido.";
    return;
  }
  resultado.innerHTML = "";

  const ordenado = [...dados].sort((a, b) => b - a);
  const combinacao = encontrarSoma(ordenado, input);

  if (combinacao) {
    resultado.style = "text-align: start;";

    resultado.innerHTML +=
      resultado.innerHTML += `Valor informado \u{27A1} <strong>${input}</strong><br>`;
    resultado.innerHTML += `Blocos sugeridos \u{27A1} <strong>${combinacao.join(
      " + "
    )}</strong>`;
    resultado.innerHTML += `<hr><h4><strong>Informações importantes:</strong></h4>`;
    resultado.innerHTML += `<br><li>É importante lembrar que, em caso de dúvidas sobre os procedimentos de regulagem, recomendamos a leitura das instruções disponíveis nos accordions acima.</li>`;
    resultado.innerHTML += `<br><li>Em caso de não localização de algum bloco considerado no cálculo, deve-se acionar o auditor de qualidade para providenciar a atualização do programa.</li>`;
  } else {
    resultado.style = "text-align: center;";
    resultado.innerText +=
      "Lamentamos, mas não foi possível identificar uma combinação compatível com os valores fornecidos.";
  }
}

function encontrarSoma(arr, alvo, combinacao = [], somaAtual = 0, index = 0) {
  const EPSILON = 0.0001;

  if (Math.abs(somaAtual - alvo) < EPSILON) {
    return combinacao;
  }

  if (combinacao.length >= LIMITE_COMBINACOES) {
    return null;
  }

  for (let i = index; i < arr.length; i++) {
    const valor = arr[i];
    const novaSoma = somaAtual + valor;

    if (novaSoma - alvo > EPSILON) continue;

    const novaCombinacao = [...combinacao, valor];
    const resultado = encontrarSoma(arr, alvo, novaCombinacao, novaSoma, i);
    if (resultado) return resultado;
  }

  return null;
}

function escreverComoMaquina(elemento, texto, velocidade = 30) {
  elemento.innerText = "";
  let i = 0;

  function escreverProximo() {
    if (i < texto.length) {
      elemento.innerText += texto.charAt(i);
      i++;
      setTimeout(escreverProximo, velocidade);
    }
  }

  escreverProximo();
}
