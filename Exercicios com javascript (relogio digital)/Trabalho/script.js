let dados = [
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

function dropDown() {
  const dropdown = document.getElementById("myDropdown");
  const selectedValue = dropdown.value;
  const output = document.getElementById("output");

  if (selectedValue) {
    output.textContent = `You selected: ${selectedValue}`;
  } else {
    output.textContent = "";
  }
}

const input = document.getElementById("number");
const calc = document.getElementById("calc");
const res = document.getElementById("res");

function calcular() {
  const calc = document.getElementById("calc");
  let inputValue = parseFloat(input.value);

  if (inputValue <= 0 || isNaN(inputValue)) {
    alert(
      `Digite apenas números válidos e use "." para separar casas decimais.`
    );
  } else {
    alert("ok");
  }
}
