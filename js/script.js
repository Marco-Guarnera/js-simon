// Fase di preparazione

// Recupero gli elementi dal DOM
const timerElement = document.getElementById("timer");
console.log(timerElement);

const tipElement = document.getElementById("tip");
console.log(tipElement);

const randomNumbersElement = document.getElementById("random-numbers");
console.log(randomNumbersElement);

const formElement = document.getElementById("form");
console.log(formElement);

const userNumbersElement = formElement.querySelectorAll("input");
console.log(userNumbersElement);

const resultElement = document.getElementById("result");
console.log(resultElement);

// Strutture dati
const randomNumbers = [1, 2, 3, 4, 5];
const userNumbers = [];
const commonNumbers = [];

// Variabili
let time = 30;

// Fase di gestione eventi

// Aggiungo un EventListener all'elemento form
formElement.addEventListener("submit", function (event) {
    // Blocco l'invio del form e il reloading della pagina
    event.preventDefault();
    // Utilizzo un ciclo for per riempire l'array con i numeri scelti dall'utente
    for (let i = 0; i < userNumbersElement.length; i++) {
        userNumbers.push(parseInt(userNumbersElement[i].value));
    }
    // Utilizzo un ciclo for per attraversare tutto l'array dei numeri casuali
    for (let i = 0; i < randomNumbers.length; i++) {
        // Creo una variabile per salvare l'elemento dell'array
        const element = randomNumbers[i];
        // Controllo se l'elemento nella variabile è incluso nell'array dei numeri scelti dall'utente
        if (userNumbers.includes(element)) {
            // Aggiungo l'elemento nell'array dei numeri in comune
            commonNumbers.push(element);
        }
    }
    // Stampo il risultato
    const result = `Hai indovinato ${commonNumbers.length} numeri! (${commonNumbers.join(", ")})`
    resultElement.innerText = result;
});

// Fase di elaborazione

// Costruisco il timer
const timer = setInterval(() => {
    // Decremento il tempo
    timerElement.innerText = --time;
    // Controllo quando arriva a 0
    if (time === 0) {
        // Interrompo il timer
        clearInterval(timer);
        // Modifico il testo dell'elemento tip
        tipElement.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
        // Aggiungo all'elemento dei numeri casuali la classe "d-none" per non visualizzarlo
        randomNumbersElement.classList.add("d-none");
        // Rimuovo all'elemento form la classe "d-none" per visualizzarlo
        formElement.classList.remove("d-none");
    }
}, 1000);

// Fase di produzione

// Stampo i numeri casuali in pagina
randomNumbersElement.innerText = randomNumbers.join(" ");