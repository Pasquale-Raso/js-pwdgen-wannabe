/*

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

*/

/* nome*/

var name = prompt('Inserisci il tuo nome');
console.log(name ); 


/* cognome*/

var cognome = prompt('Inserisci il tuo cognome');
console.log(cognome); 


/* colore*/

var color = prompt('Inserisci il tuo colore preferito');
console.log(color); 

var title= document.getElementById('title');
console.log(title);

var colorepreferito = document.getElementById('colorepreferito');
console.log(colorepreferito);

var password = document.getElementById('password');
console.log(password);

var risultato = name + cognome + color + '21';
console.log(risultato);


title.innerHTML = 'Benvenuto: ' + name + ' ' + cognome;
colorepreferito.innerHTML = 'il tuo colore preferito è: '+ color;
password.innerHTML = 'La tua password è: ' + risultato;