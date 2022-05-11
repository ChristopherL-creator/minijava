console.log('ciao node!'); 

//   per mostrare codice in prompt, usando 
//  node: PS C:\Users\user\Desktop\Corso_FrontEnd\minijava> node script.js; 

//  Formato file .CSV (Comma Separated Values); 
//  formato testo; 
//  ci vogliono diversi steps: 

//  1) leggere file: 

const fs = require('fs');
//  richiedo un modulo fs(file system) per leggere e modificare 
//  file system;
//  cerca file in indirizzo, gli da formato utf8, e lo mette in 
//  data; 
//  Leggere file da pc è molto pericoloso, u sacco di cose possono 
//  adare storte; 
try {   
    const data = fs.readFileSync('./libri.csv', 'utf8'); 
    console.log(data); 
    } catch (err) {
        console.error(err.message); 
//  err.message è standard migliore;
    } 

//  try inserisco codice; catch inserisce cosa succede se lettura 
//  file non va a buon fine; evita che script crashi;

//  2) eseguire programma solo se data esiste;