/* console.log(JS OK);


TRACCIA:

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

/*
0 - Recuperare un elemento in pagina e preparare messaggio contenente Password

1 - Chiedere il nome all'utente
2 - Chiedere il cognome all'utente
3 - Chiedere il colore preferito all'utente
4 - Stampare nomeCognomeColorePreferito21
*/

// 0 - Recuperare un elemento in pagina e preparare un messaggio contenente Password

const passwordElement = document.getElementById('password');

// 1 - Chiedere il nome all'utente
const userName = prompt('Come ti chiami?');
console.log(userName);

// 2 - Chiedere il cognome all'utente
const userSecondName = prompt('Qual è il tuo cognome?');
console.log(userSecondName);

// 3 - Chiedere il colore preferito all'utente
const userFavColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavColor);