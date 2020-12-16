function findAuthorById(authors, id) {
  //find the author object with the right ID
  for (person of authors){
    if ( id === person.id){
      return person
    }
  }  
}

function findBookById(books, id) {
  for (book of books){
    if(book.id === id){
      return book
    }
  }
  
  
}

function partitionBooksByBorrowedStatus(books) {
  let borrowBooks = books.filter(book => {
    return book.borrows[0].returned == false
})
let returnedBooks = books.filter(book=>{
  return book.borrows[0].returned == true
})
return [borrowBooks,  returnedBooks]

}

function getBorrowersForBook(book, accounts) {
  let borrowers = []
  //console.log(book)
  //console.log(accounts)
  accounts.forEach((account) => {
    book.borrows.forEach(transaction => { //compare all the instances of borrows with all the instances of accounts
      if(transaction.id === account.id){
        let accountObj = {...account}  //takes everything in the account object and puts it in. going to create an object with key value pairs. later we will add addtional properties to the object
        accountObj.returned = transaction.returned
        borrowers.push(accountObj)
      }
      
    })
    
  })
  console.log(borrowers)
  return  borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
