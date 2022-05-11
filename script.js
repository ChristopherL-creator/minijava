// const libro1 = {title: 'odissea', copies: 5}; 
// const libro2 = {title: 'iliade', copies: 15}; 
// const libro3 = {title: 'i promessi sposi', copies: 3}; 

// let bookList = [libro1, libro2, libro3]; 

// function displayBooks() { 

//     const template = ` 
//         <span><strong> #TITLE </strong> </span> <br> 
//         <span> copie: #COPIES </span>      
//     ` 
    
//     const bookListContainer = document.getElementById('book-list-container'); 

//     bookListContainer.innerHTML = '';

//     for (const book of bookList) {
        
//         const bookContainer = document.createElement('div'); 

//         const replacedTemplate = template.replace('#TITLE', book.title).replace('#COPIES', book.copies); 

//         bookContainer.innerHTML = replacedTemplate; 

//         const button = document.createElement('button'); 
//         button.appendChild(document.createTextNode('vendi'));  
//         button.addEventListener('click', () => sellBook(book)); 
//         //  trasformo metodo in lambda, così posso passare tutti iparametri che voglio;
//         bookContainer.appendChild(button);

//         bookListContainer.appendChild(bookContainer)
//     }
// } 

// displayBooks(); 

// function sellBook(book) {
//     book.copies = book.copies - 1; 
//     if (book.copies === 0) { 
// //  creo nuovo array, in cui inserisco book con copie superiori a 0;
//         const tempArray = []; 
//         for (let i = 0; i < bookList.length; i++) {
//             const b = bookList[i];
//             if (b.copies > 0) {
//                 tempArray.push(b);
//             }
//         } 
//         bookList = tempArray;
//     }
//     displayBooks(); 
// //  citando funzione, forzo riscrittura;
// } 

