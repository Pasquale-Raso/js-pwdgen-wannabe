/*

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

*/

var name = prompt('Inserisci il tuo nome');
console.log(name); 

var title= document.getElementById('title');
console.log(title);

title.innerHTML = 'Benvenuto ' + name;

