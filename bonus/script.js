// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// Variabili generali
var newArray = [];
var numeriRand;
var finish = false;
var numeroUt = [];
var giocatore;
var punteggio = 0;
var nomeUt = prompt('Ciao utente, come ti chiami?');
var dimensioneTot = sceltaDifficolta();
var numeriTot = dimesioneTot - newArray;

// Definire il ciclo per generare i 16 numeri randomici nell'Array
while (newArray.length < 16) {
  numeriRand = getRandom(1, 101);
  if (newArray.includes(numeriRand) == false) {
    newArray.push(numeriRand);
  }
  console.log(numeriRand);
}

console.log('Deadly numbers: ' + newArray);
console.log('Nome Giocatore: ' + nomeUt);

// Ciclo per far inserire i numeri all'utente
while (finish == false && punteggio < 84) {
  giocatore = parseInt(prompt('Ciao ' + nomeUt + ', scegli un numero da 1 a 100!'));
  if (giocatore > 0 && giocatore < 101 && !isNaN(giocatore)) {
    if (numeroUt.includes(giocatore) == true) {
      alert('Questo numero è stato già inserito!');
    } else if (newArray.includes(giocatore) == true) {
      alert('Hai beccato il numero sbagliato, hai perso!');
      finish = true;
      numeroUt.push(giocatore);
    } else {
      alert('Stai andando bene ' + nomeUt + ' ;)');
      numeroUt.push(giocatore);
      punteggio++;
    }
  } else {
    alert('Inserisci un numero.');
  }
}

// Condizioni finali per concludere il gioco
if (finish == true) {
  console.log('Punteggio totale: ' + punteggio + ' Punto/i');
  console.log('Il numero che ti ha fatto perdere: ' + (numeroUt.slice(-1)));
} else {
  console.log('Hai finito il gioco, ' + nomeUt + 'sei molto fortunato/a!');
}

// Funzioni
function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function sceltaDifficolta() {
  var scelta = parseInt(prompt('Inserisci la difficoltà(0 - 1 - 2)'));
  switch (scelta) {
    case 1:
      var dimTot = 100;
      break;
    case 2:
      var dimTot = 80;
      break;
    case 3:
      var dimTot = 50;
      break;
    default:
      var dimTot = 100;
      alert('La difficoltà verrà impostata su 0.')
  }
}
