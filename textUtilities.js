
function getCharNumber(string) {
    return string.length;
} 

function getCharNumberWithoutSpaces(string){ 
    let stringWithoutSpaces = string.replaceAll(' ', ''); 
    return getCharNumber(stringWithoutSpaces);
} 

function cleanString(string) {
    const cleanedString = string.replaceAll("'", ' ') 
                                .replaceAll('.', '') 
                                .replaceAll(',', '') 
                                .replaceAll('!', '') 
                                .replaceAll('\n', ' ') 
                                .replaceAll('\r', ''); 
    return cleanedString;
} 

function createArrayOfWordsFromString(string) {
    const cleanedString = cleanString(string); 
    return cleanedString.split(' ');
} 

function getWordnNumberFromString(string){ 
    const wordArray = createArrayOfWordsFromString(string); 
    return wordArray.length;
} 

function getOccurrenceOfWordInString(searchWord, string) {
    let occurrence = 0;  
    const wordArray = createArrayOfWordsFromString(string); 
    for (const word of wordArray) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
            occurrence++;
        } 
    } 
    return occurrence;
} 

function countOccurrenciesOfEachWord(string) {
    const obj = {};
    const wordArray = createArrayOfWordsFromString(string);
    wordArray.forEach(function(el, i, arr) {
      obj[el] = obj[el] ? ++obj[el] : 1;
    });
    
    return obj;
} 

// function occurrenciesOfEachWordToPercentage(obj) {
//     let total = 0;

//     for (var i in obj) { // we find the total here
//         total += parseInt(myObj[i], 10); 
//     }

//     for (var i in myObj) { // we do the conversion here
//         myObj[i] = (myObj[i] / total * 100) + "%";
//         res.innerHTML += "<br>" + i + ": " + myObj[i]; // html output
//     }
// } 

function fromFrequencyObjToArray (obj) {
        const frequencyArray = []; 
//   funzione for in:
    for (const property in obj) { 
        if (Object.hasOwnProperty.call(obj, property)) { 
           const values = obj[property]; 
           const object = {word: property, frequency: values}; 
           frequencyArray.push(object);
        }
    } 

    return frequencyArray;
} 

function createFrequencyData(string) {
    const freqObj = wordsFrequency(string); 
    const freqArray = fromFrequencyObjToArray(freqObj); 
    freqArray.sort(compareFrequency); 

    let frequencyData = 'Frequenza parole \n';

    for (const freq of freqArray) {
        frequencyData = frequencyData + freq.Array.word + ': ' + freq.frequency + '\n';
    } 

    return frequencyData;
} 

function compareFrequency(freq1, freq2) {
    return freq2.frequency - freq1.frequency;
} 

// function sortOccurencesByMostRecurring(frequencyArray) { 
      
//     let entries = Object.entries(frequencyArray);
    
//     let sorted = entries.sort((a, b) => b[1] - a[1]);
    
//     return sorted;
// }

// function occurenciesofEachWordToJson(sorted) {
//     const jsonEachWordOccurrences = JSON.stringify(sorted, null, 2); 
//     return jsonEachWordOccurrences; 
// } 

function createReportString(originalText, searchWord, charNumber, noSpacesCharNumber, wordNumber, occurrence, jsonEachWordOccurrences) {
    let occurrenceString = '';
    if (occurrence >= 0) {
        occurrenceString = 'parola: ' +  searchWord + '; numero occorrenze: ' + occurrence + (occurrence === 1 ? ' volta.' : ' volte.')
    }
    const report = originalText + 
                        '\n' + 
                        '\n' + 
                        'numero caratteri: ' + charNumber + '\n' + 
                        'numero di caratter spazi esclusi: ' + noSpacesCharNumber + '\n' + 
                        'numero di parole: ' + wordNumber + '\n' + 
                        occurrenceString + '\n' + 
                        createFrequencyData + '\n' +
                        jsonEachWordOccurrences; 

    return report;
} 

exports.getCharNumber = getCharNumber; 
exports.getCharNumberWithoutSpaces = getCharNumberWithoutSpaces; 
exports.getWordnNumberFromString = getWordnNumberFromString; 
exports.getOccurrenceOfWordInString = getOccurrenceOfWordInString; 
exports.createReportString = createReportString;  
exports.countOccurrenciesOfEachWord = countOccurrenciesOfEachWord; 
exports.sortOccurencesByMostRecurring = sortOccurencesByMostRecurring;
exports.occurenciesofEachWordToJson = occurenciesofEachWordToJson;