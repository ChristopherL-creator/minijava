
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
                                .replaceAll('\n', '') 
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

function occurenciesofEachWordToJson(obj) {
    const jsonEachWordOccurrences = JSON.stringify(obj, null, 2); 
    return jsonEachWordOccurrences; 
} 

function createReportString(originalText, searchWord, charNumber, noSpacesCharNumber, wordNumber, occurrence, occurenciesofEachWordToJson) {
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
                        occurenciesofEachWordToJson; 

    return report;
} 

exports.getCharNumber = getCharNumber; 
exports.getCharNumberWithoutSpaces = getCharNumberWithoutSpaces; 
exports.getWordnNumberFromString = getWordnNumberFromString; 
exports.getOccurrenceOfWordInString = getOccurrenceOfWordInString; 
exports.createReportString = createReportString;  
exports.countOccurrenciesOfEachWord = countOccurrenciesOfEachWord;
exports.occurenciesofEachWordToJson = occurenciesofEachWordToJson;