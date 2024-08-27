// Fase di preparazione

// Strutture dati
const array01 = [1, 2, 3, 4, 5];
const array02 = [3, 4, 5, 6, 7];
const result = [];

// Fase di gestione eventi
// Fase di raccolta dati
// Fase di elaborazione

// Utilizzo un ciclo for per attraversare tutto il primo array
for (let i = 0; i < array01.length; i++) {
    // Creo una variabile per salvare l'elemento del primo array
    const element = array01[i];
    // Controllo se l'elemento nella variabile è incluso nel secondo array
    if (array02.includes(element)) {
        // Aggiungo l'elemento nel terzo array
        result.push(element);
    }
}

// Fase di produzione

// Stampo tutte le strutture dati in console
console.table(array01);
console.table(array02);
console.table(result);