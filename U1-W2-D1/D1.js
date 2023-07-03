/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// I principali datatype in JS sono cinque:
// 1. String: identifica una riga di testo, che può contenere caratteri alfanumerici e simboli, ma verrà sempre interpretata come testo dal sistema;
// 2. Number: serve ad identificare valori numerici interi, positivi, negativi o fluttuanti;
// 3. Boolean: rappresenta i valori "Vero e "Falso";
// 4. Undefined: ci informa dell'assenza di un valore distintivo per quel dato;
// 5. Null: ci informa che quel dato non ha alcun valore (come se fosse uno 0);

//I datatype servono ad aiutare il sistema ad interpretare i dati ricevuti. Potremmo paragonarli agli accenti che ci aiutano a capire come pronunciare una parola: pésca (lo sport) sarà infatti diverso da pèsca (il frutto). L'accento sulla lettera "e" in questo caso ci aiuta ad interpretare la pronuncia della parola, e di conseguenza il suo significato.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Alessia";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const plus1 = 12;
const plus2 = 20;
console.log("Sum", plus1 + plus2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = "12";

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const name = Cesaroni;
console.log("Cesaroni");

// Uncaught SyntaxError: Identifier 'name' has already been declared

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const minus = "4";
console.log("Substract", x - minus);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";

console.log(name1 != name2); // => true

console.log(name1 === name2.toLowerCase()); // => true

//

console.log(
  "primo nome: " + name1 + ", ",
  "secondo nome:" + name2 + ". ",
  name1 !== name2 ? "Il primo nome è diverso dal secondo nome" : "I due nomi sono uguali"
);

console.log(
  "Verifica dell'uguaglianza dei due nomi in lowercase: ",
  name1.toLowerCase() === name2.toLowerCase() ? true : false
);
