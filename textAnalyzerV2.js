function getConsoleArguments() {
    return process.argv.slice(2);
} 

function getArgumentOrExitWithErrorAndIndex(errorString, index) {
//  2)  leggo argomenti inseriti da console; 
    const arguments = getConsoleArguments();
    let arg; 
    if (arguments[index]) {
        arg = arguments[index];
    } else { 
        console.error(errorString); 
        process.exit;
    } 
    return arg;
} 

function getOptionalArgumentWithIndex(index) {
    const arguments = getConsoleArguments(); 
    return arguments[index];
} 

function readFileDataWithUrl(inputUrl) {
    try { 
        fileData = fs.readFileSync(inputUrl, 'utf-8');
    } catch (error) { 
        console.log('errore rilettura', error.message); 
        process.exit;
    }  
    return fileData;
}
//  1)  importo file system (fs); 
const fs = require('fs'); 

//  3)  prendo il primo elemento come inputUrl(obbligatorio) e il 
//      secondo come outputUrl obbligatorio); parola da cercare ) 
//      non obbligatorio;
const inputUrl = getArgumentOrExitWithErrorAndIndex("inserire input url", 0);

const outputUrl = getArgumentOrExitWithErrorAndIndex("inserire output url", 1);

let searchWord = getOptionalArgumentWithIndex(2); 

//  4)  leggo contenuto file e loggo il numero di caratteri spazi 
//      compresi, e numero di caratteri spazi esclusi; 
let fileData = readFileDataWithUrl(inputUrl);
console.log('testo da analizzare: ', fileData); 

//  numero di caratteri: 12; 
const charNumber = fileData.length; 
console.log('numero caratteri', charNumber);

// numero di caratteri (spazi esclusi): 10; 
const noSpacesData = fileData.replaceAll(' ', ''); 
const noSpacesCharNumber = noSpacesData.length; 
console.log('numero di caratter spazi esclusi: ', noSpacesCharNumber); 

//  numero di parole; 
const cleanData = fileData.replaceAll("'", ' ') 
                          .replaceAll('.', '') 
                          .replaceAll(',', '') 
                          .replaceAll('!', ''); 

const wordArray = cleanData.split(' '); 
const wordNumber = wordArray.length; 

console.log('numero di parole', wordNumber); 

//  numero di occorrenze della parole da cercare (se c'è); 
let occurrenceString = ''; 
if (searchWord) {
        let occurrence = 0;  
    for (const word of wordArray) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
            occurrence++
        }
    } 

    console.log('parola: ' +  searchWord + '; numero occorrenze: ' + occurrence + (occurrence === 1 ? ' volta.' : ' volte.')); 
    occurrenceString = 'parola: ' +  searchWord + '; numero occorrenze: ' + occurrence + (occurrence === 1 ? ' volta.' : ' volte.');
}

//  5)  l'utente ha inserito l'output url, scrivo un nuovo file con testo dell'originale, più dati dell'analisi; 
const newFileData = fileData + 
                    '\n' + 
                    '\n' + 
                    'numero caratteri: ' + charNumber + '\n' + 
                    'numero di caratter spazi esclusi: ' + noSpacesCharNumber + '\n' + 
                    'numero di parole: ' + wordNumber + '\n' + 
                    occurrenceString; 

try {
    fs.writeFileSync(outputUrl, newFileData);
} catch (error) {
    'errore scrittura', error.message; 
    process.exit();
}
//     se utente non ha inserito output, url sovrascrive file originale;
//  es originale => viva il css! 
//  risultato => 
//  viva il css! 

