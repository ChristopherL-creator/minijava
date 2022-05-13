

function countOccurrenciesOfEachWord(string) {
    var obj = {};
    
    str.split(" ").forEach(function(el, i, arr) {
      obj[el] = obj[el] ? ++obj[el] : 1;
    });
    
    return obj;
  }
  
  console.log(countOccurrenciesOfEachWord(fileData));

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
                              .replaceAll('!', ''); 
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

function createReportString(originalText, searchWord, charNumber, noSpacesCharNumber, wordNumber, occurrence) {
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
                        occurrenceString;  

    return report;
} 

exports.getCharNumber = getCharNumber; 
exports.getCharNumberWithoutSpaces = getCharNumberWithoutSpaces; 
exports.getWordnNumberFromString = getWordnNumberFromString; 
exports.getOccurrenceOfWordInString = getOccurrenceOfWordInString; 
exports.createReportString = createReportString; 
exports.countOccurrenciesOfEachWord = countOccurrenciesOfEachWord;