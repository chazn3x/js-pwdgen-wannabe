const firstName = prompt('Qual è il tuo nome?');
const lastName = prompt('Qual è il tuo cognome?');
const favColor = prompt('Qual è il tuo colore preferito?');
const password = firstName + lastName + favColor + '21';

console.log(password);

document.getElementById('password').innerHTML = 'La tua password è: ' + password;