let person01 = {nome: "Josmar", email: "josmarsilda@company.com"}
let person02 = {nome: "Maria", email: "mariacandida@company.com"}
let person03 = {nome: "Luzia", email: "luziacampos@company.com"}
let person04 = {nome: "Valdir", email: "valdirrodrigues@company.com"}

const people = [person01, person02, person03, person04]

const lista = document.getElementById('list')
for(let i = 0; i <= people.length; i++){
    lista.innerHTML = '<strong>Nome:</strong> ' + people[i].nome + ' <strong>E-mail:</strong> ' + people[i].email
}
