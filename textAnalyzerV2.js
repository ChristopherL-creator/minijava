const textUtilities = require('./textUtilities.js'); 

const inputOutput = require('./inputOutputUtilities.js'); 

const consoleUtilities = require('./consoleUtilities.js');

//  3)  prendo il primo elemento come inputUrl(obbligatorio) e il 
//      secondo come outputUrl obbligatorio); parola da cercare ) 
//      non obbligatorio;
const inputUrl = consoleUtilities.getArgumentOrExitWithErrorAndIndex("inserire input url", 0);

const outputUrl = consoleUtilities.getArgumentOrExitWithErrorAndIndex("inserire output url", 1);

let searchWord = consoleUtilities.getOptionalArgumentWithIndex(2); 

//  4)  leggo contenuto file e loggo il numero di caratteri spazi 
//      compresi, e numero di caratteri spazi esclusi; 
let fileData = inputOutput.readFileDataWithUrl(inputUrl);
console.log('testo da analizzare: ', fileData); 

//  numero di caratteri: 12; 
const charNumber = textUtilities.getCharNumber(fileData); 
console.log('numero caratteri', charNumber);

// numero di caratteri (spazi esclusi): 10; 
const noSpacesCharNumber = textUtilities.getCharNumberWithoutSpaces(fileData); 
console.log('numero di caratter spazi esclusi: ', noSpacesCharNumber); 

//  numero di parole; 
const wordNumber = textUtilities.getWordnNumberFromString(fileData); 
console.log('numero di parole', wordNumber); 

//  numero di occorrenze della parole da cercare (se c'è); 
let occurrence = -1; 
if (searchWord) {
    occurrence = textUtilities.getOccurrenceOfWordInString(searchWord, fileData);
} 

if (occurrence >= 0) {
    console.log('parola: ' +  searchWord + '; numero occorrenze: ' + occurrence + (occurrence === 1 ? ' volta.' : ' volte.')); 
} 

const sortOccurrencesOfArray = textUtilities.sortOccurrencesOfArray(fileData); 
console.log(sortOccurrencesOfArray); 

const occurenciesofEachWordToJson = textUtilities.occurenciesofEachWordToJson(sortOccurrencesOfArray)

//  5)  l'utente ha inserito l'output url, scrivo un nuovo file con testo dell'originale, più dati dell'analisi; 
const report = textUtilities.createReportString(fileData, searchWord, charNumber, noSpacesCharNumber, wordNumber, occurrence, occurenciesofEachWordToJson);

inputOutput.writeReportInFile(outputUrl, report); 

//     se utente non ha inserito output, url sovrascrive file originale;
//  es originale => viva il css! 
//  risultato => 
//  viva il css!  

const obj = {}; 

obj.pipo = 3; 
obj['pluto'] = 2; 

//  nome proprietà non può solo essere composto da lettere;
//  obj.3pippo = true;

const contenitore = new Map(); 

//  per impostare valore 'ciao' in proprietà 3:
contenitore.set(3, 'ciao'); 

//  per leggere 'ciao': 
console.log(contenitore.get(3)); 

//  restituisce array con tutte le chiavi: 
console.log(contenitore.keys()); 

//  resituisce array con tutti i valori: 
console.log(contenitore.values());