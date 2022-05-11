//* console.log('ciao node!'); 

//*   per mostrare codice in prompt, usando 
//*  node: PS C:\Users\user\Desktop\Corso_FrontEnd\minijava> node script.js; 

//*  Formato file .CSV (Comma Separated Values); 
//*  formato testo; 
//*  ci vogliono diversi steps: 

//*  1) leggere file: 

const fs = require('fs');
//*  richiedo un modulo fs(file system) per leggere e modificare 
//*  file system;
//*  cerca file in indirizzo, gli da formato utf8, e lo mette in 
//*  data; 
//*  Leggere file da pc è molto pericoloso, u sacco di cose possono 
//*  adare storte; 
//* try { 
//* //  try inserisco codice;  
//*     const data = fs.readFileSync('./libri.csv', 'utf8'); 
//*     console.log(data); 
//*     } catch (err) { 
// //*  catch inserisce cosa succede se lettura file non va a buon 
// //*  fine; evita che script crashi;
//   *      console.error(err.message); 
// //*  err.message è standard migliore;
//   *  } finally { 
// //*  funziona se try funziona o meno;
//   *      console.log('sono nel blocco finally');
//   *  }

//*function readCsv() {
//*    try {
//*        const data = fs.readFileSync('./libri.csv', 'utf8'); 
//*        console.log(data);
//*    } catch (err) {
//*      throw err;  
//*    }
//*} 

//*try {
//*    readCsv();
//*} catch (error) {
//*    console.log('la funzione non funziona');
//*} 

let data; 

try {
    const data = fs.readFileSync('./libri.csv', 'utf8'); 
    console.log(data);
} catch (err) {
    console.log('file not found');
  } 

//* let pippo = { 
//*     nome: 'pippo', 
//*     dob: 2021
//* }; 

//* console.log(pippo['nome']); 
//* //  altro modo di accedere a proprietà elemento, funziona sia in 
//* //  lettura che scrittura;
//* pippo['cognome'] = 'de pippis'; 

//* console.log(pippo.cognome);

//*  2) eseguire programma solo se data esiste; 

//*  a)  spezzare stringa con array di linee; 
//*      let lines = ['title, author, price, copies', 'iliade, omero, 15.00, 5', 'odissea, omero, 12.00, 3', 'i promessi sposi, manzoni, 20.00, 10']; 
//*  b)  creo variabile chiamata properties, che conterrà array 
//*      con parole di cui è composta prima linea; 
//*      const properties = ['title', 'author', 'price', 'copies']; 
//*      let lines = ['iliade, omero, 15.00, 5', 'odissea, omero, 12.00, 3', 'i promessi sposi, manzoni, 20.00, 10']; 
//*  se splitto lungo virgole, ottengo array con parole; 
//*  c)  creo array vuoto per gli oggetti;
//*  d)  ciclo su tutte le linee dentro lines; 
//*      creo nuovo oggetto vuoto; 
//*      trasformo linea in array di parole; 
//*      const lineArray = ['iliade', 'omero', '15.00', '5'];
//*      faccio ciclo interno per ogni parola dentro properties; 
//*      aggiungo a nuovo oggetto proprietà con nome della proprietà, 
//*      e associando valore corrispondente; 
//*      prendo title con indice 0, dev'essere associato a oggetto 
//*      vuoto indice 0 di line array; 
//*      infilo oggetto in array vuoto; 
//*  e)  console.log(array vuoto); 

//* cerco properties, prima properry che mi arriva è properrty con primo elemento 

const pippoJson = JSON.stringify(pippo);

console.log(pippoJson); 

//* JSON 
//* lo usa javascript per comunicare con altre piattaforme;