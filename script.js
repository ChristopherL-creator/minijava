//* console.log('ciao node!'); 

//*   per mostrare codice in prompt, usando 
//*  node: PS C:\Users\user\Desktop\Corso_FrontEnd\minijava> node script.js; 

//*  Formato file .CSV (Comma Separated Values); 
//*  formato testo; 
//*  ci vogliono diversi steps: 

//*  1) leggere file: 

const fs = require('fs'); 
//  richiamo con file sistem;
const myArgs = process.argv.slice(2); 
//  argv mi da array in console prima di lanciare, con parole separate da spazi. slice rimuove gli spazi da (2) ./libri, l'indice 0 di args 
if (myArgs[0] === undefined) { 
  console.console.error('mi serve file input'); 
  process.exit();
} 
// sennò lo metto in inputUrl:
const inputUrl = myArgs[0]; 

let outputUrl; 

if (myArgs[1] === undefined) {
  outputUrl = './output.json'; //default se non trovassi myArgs[1]
} else { 
  outputUrl = myArgs[1];
} 

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

//faccio leggere input
let data; 

try {
    data = fs.readFileSync(inputUrl, 'utf8'); 
} catch (err) {
    console.log('file not found'); 
    process.exit();
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

//  per creare un array di tante righe;
let lines= data.split(/\r?\n/); 
lines = lines.filter(line => line!== '')
// per togliere stringa vuota
//*  b)  creo variabile chiamata properties, che conterrà array 
//*      con parole di cui è composta prima linea; 
//*      const properties = ['title', 'author', 'price', 'copies'];  

const properties = lines.shift().split(','); 
// properties diventa array

// console.log('lines + properties', lines, properties); 

//*      let lines = ['iliade, omero, 15.00, 5', 'odissea, omero, 12.00, 3', 'i promessi sposi, manzoni, 20.00, 10']; 
//*  se splitto lungo virgole, ottengo array con parole; 
//*  c)  creo array vuoto per gli oggetti; 
const objectsArray = []; 

//*  d)  ciclo su tutte le linee dentro lines; 
for ( const line of lines) { 

//*      creo nuovo oggetto vuoto; 
  const obj = {};

//*      trasformo linea in array di parole; 
//*      const lineArray = ['iliade', 'omero', '15.00', '5'];
  const lineArray = line.split(','); 
  // console.log('lineArray', lineArray);

//*      faccio ciclo interno per ogni parola dentro properties; 
  for (let i = 0, i < properties.lenght, i ++) { 
    const property = properties[i]; 
    let property = properties[i]; 
    let value = lineArray[i]; 

    property = property.trim(); 
    value = value.trim();  

    value = checkType(value)

    console.log('property', property);

//*      aggiungo a nuovo oggetto proprietà con nome della proprietà, 
//*      e associando valore corrispondente; 
    obj[property] = value;    
  } 

//*      infilo oggetto in array vuoto; 
  objectsArray.push(obj);
}

//*      prendo title con indice 0, dev'essere associato a oggetto 
//*      vuoto indice 0 di line array; 
//*  e)  console.log(array vuoto); 

//* cerco properties, prima properry che mi arriva è properrty con primo elemento 

const jsonArray = JSON.stringify(objectsArray);

console.log('json array',jsonArray); 

//* JSON 
//* lo usa javascript per comunicare con altre piattaforme; 

try {
  fs.writeFileSync(outputUrl, jsonArray);
} catch (err) {
  console.error('file not found'); 
  process.exit();
}

//  controllo stringa:
function checkType(value) { 
//  controlla se è numero o meno:
  if(!isNaN(value)) {  
//  se value è numero, faccio parseFloat: 
    return parseFloat(value);
  } else if(value === 'true' || value === 'false'){ 
           return value === 'true' ? true : false;
         } else { 
             return value;
           }
} 
//  se numero, lo trasformo in float; 