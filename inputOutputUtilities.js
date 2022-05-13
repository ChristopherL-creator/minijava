//  1)  importo file system (fs); 
const fs = require('fs'); 


function readFileDataWithUrl(inputUrl) {
    let fileData; 
    try { 
        fileData = fs.readFileSync(inputUrl, 'utf-8');
    } catch (error) { 
        console.log('errore rilettura', error.message); 
        process.exit;
    }  
    return fileData;
} 

function writeReportInFile(outputUrl, report) {
    try {
        fs.writeFileSync(outputUrl, report);
    } catch (error) {
        'errore scrittura', error.message; 
        process.exit();
    }
} 

exports.readFileDataWithUrl = readFileDataWithUrl; 
exports.writeReportInFile = writeReportInFile; 