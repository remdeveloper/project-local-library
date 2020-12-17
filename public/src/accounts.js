function findAccountById(accounts, id) {
  return finder(accounts, id);
}

function finder(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  let mapped = accounts.map((name) => name.name.last);
  // console.log(mapped)
  let sorted = mapped.sort((key1, key2) => {
    return key1.localeCompare(key2);
  });
  //  console.log(sorted)

  let test = sorted.map((lastName) => {
    return { name: { first: lastName, last: lastName } };
  });
  //console.log(test)
  let testMapped = accounts.map((name) => name.name);
  //console.log(testMapped)
  let testSort = testMapped.sort((key1, key2) => {
    return key1.last.localeCompare(key2.last);
  });

  //console.log(testSort)
  let superMap = testSort.map((name) => {
    //why does putting name put name:
    return { name };
  });
  return superMap;
}

function numberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      //access the array in the borrows
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + count;
  }, 0);
}

function booksInPossession(account, books, authors) {
  /*let possessedBooks = []
  for(let i = 0; i < books.length; i++){   //cycle through all books
    const {id, title, genre, borrows} = books[i] //destructuring
    for(let j = 0; j < borrows.length; j++) {   //go through borrowing info to see whats borrowed 
      if(borrows[j].id === account.id && borrows[j].returned ===false){ //if book is not returned, go through another loop
        for(let k = 0 ; k < authors.length; k++){
          let author = authors[k]
          //compare author id associate with the book
          if(author.id === books[i].authorId){ //compare author id to book id, create another object to push 
            let tempBook = {id, title, genre, author, borrows} //shorthand creating an object
            possessedBooks.push(tempBook)
          }
          
        }
      }
      
      
    }   
    
    
  }  
  
  return possessedBooks */
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
