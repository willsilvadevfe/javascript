let dados = [0.50, 1.001, 1.002, 1.003, 1.004, 1.005, 1.006, 1.007, 1.008, 1.009, 1.00, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.30, 1.31, 1.32, 1.33, 1.34, 1.35, 1.36, 1.37, 1.38, 1.39, 1.40, 1.41, 1.42, 1.43, 1.44, 1.45, 1.47, 1.48, 1.49, 1.50, 2.00, 2.50, 3.00, 3.50, 4.00, 4.50, 5.00, 5.50, 6.00, 6.50, 7.00, 7.50, 8.00, 8.50, 9.00, 9.50, 10.00, 10.50, 11.00, 11.50, 12.00, 12.50, 13.00, 13.50, 14.00, 14.50, 15.00, 15.50, 16.00, 16.50, 17.00, 17.50, 18.00, 18.50, 19.00, 19.50, 20.00, 20.50, 21.00, 21.50, 22.00, 22.50, 23.00, 23.50, 24.00, 24.50, 25.00, 50.00, 75.00, 100.00]



function dropDown() {
    const dropdown = document.getElementById('myDropdown');
    const selectedValue = dropdown.value;
    const output = document.getElementById('output');

    if (selectedValue) {
      output.textContent = `You selected: ${selectedValue}`;
    } else {
      output.textContent = '';
    }
  }


  const input = document.getElementById('number')
  const calc = document.getElementById('calc')
  const res = document.getElementById('res')
  
  function calcular(){
    const calc = document.getElementById('calc')
      let inputValue = parseFloat(input.value)

      if(inputValue <= 0 || isNaN(inputValue)){
        alert(`Digite apenas números válidos e use "." para separar casas decimais.`)
      }else{
        alert('ok')
      }
  }