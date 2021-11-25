// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const studente = {
    nome: 'alberto',
    cognome: 'lisi',
    eta: 25
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(let key in studente) {
    console.log(studente[key]);
}

// Creare un array di oggetti di studenti.
const studenti = [
    {
        nome: 'alberto',
        cognome: 'lisi',
        eta: 25
    },
    {
        nome: 'alberto2',
        cognome: 'lisi2',
        eta: 22
    },
    {
        nome: 'alberto3',
        cognome: 'lisi3',
        eta: 33
    },
    {
        nome: 'alberto4',
        cognome: 'lisi4',
        eta: 102
    }
];
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(let i = 0; i < studenti.length; i++){
    const thisStudente = studenti[i];

    for(let item in thisStudente) {
        console.log(thisStudente[item]);
    }
}
// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.