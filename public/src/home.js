function totalBooksCount(books) {
  //   let counter = 0
  //   for (book in books){
  //     counter = counter+1
  //   }
  //   return counter
  return books.length;
}

function totalAccountsCount(accounts) {
  //   let counter = 0
  //   for (account in accounts){
  //     counter = counter + 1
  //   }
  //   return counter
  return accounts.length;
}

function booksBorrowedCount(books) {
  let counter = 0;
  console.log(books);
  for (let book of books) {
    //changing book in to book of fixed it because books was an array for some reason
    if (book.borrows[0].returned === false) {
      counter = counter + 1;
    }
  }
  return counter;
}

function mostCommonGenres(books) {
  //sort from most common to least common genre
  //books is in an array, loop through books to get genre
  let countedBooks = books.reduce((acc, item) => {
    //     if (!acc[item.genre]){     //creates empty array, maybe not needed
    //       console.log('asdf')
    //       acc[item.genre] = []
    //     }
    if (acc[item.genre]) {
      console.log("123");
      acc[item.genre]++; //how do u do this with = + 1
    } else {
      acc[item.genre] = 1;
    }
    return acc;
  }, {});
  console.log(countedBooks); //gives an object {'Historical Fiction': 1,   Science: 3, etc}
  let keys = Object.keys(countedBooks); //pull out the keys [historical fiction, science] use this to loop!
  let sortedKeys = keys.sort((key1, key2) => {
    return countedBooks[key2] - countedBooks[key1]; //standard way to sort, trick is using countedBooks
    //sorted keys is order largest to smallest [science, classics, etc]
  });

  let mapped = sortedKeys.map((key) => {
    return { name: key, count: countedBooks[key] }; //turns array -> array of objects
  });
  console.log(sortedKeys);
  console.log(mapped);

  //   }, {})
  return mapped.slice(0, 5); //slice array from index 0 to index 5 not including index 5
}

function mostPopularBooks(books) {
  //return array with 5 or less objects, most popular to least.
  //popular = # of times book has been borrowed

  //use reduce to count # of borrows
  //use borrows.length
  let countedBorrows = books.reduce((acc, item) => {
    acc[item.title] = item.borrows.length; //adding the title and the count to the object
    return acc;
  }, {});
  console.log(countedBorrows, "yo");

  let keys = Object.keys(countedBorrows); //array of keys ['asdf','asdf']
  console.log(keys);
  let sortedKeys = keys.sort((key1, key2) => {
    return countedBorrows[key2] - countedBorrows[key1];
  });
  //now that keys are sorted, use map to create the object
  let mapped = sortedKeys.map((key) => {
    return { name: key, count: countedBorrows[key] };
  });

  console.log(mapped);
  return mapped.slice(0, 5);
}

function mostPopularAuthors(books, authors) {
  //find the most popular authors, popular = checked out the most
  // need to add up all the books with the same author

  //loop through books and total up amount of borrows
  let countedBorrows = books.reduce((acc, item) => {
    acc[item.authorId] = item.borrows.length; //adding the title and the count to the object
    return acc;
  }, {});

  console.log(countedBorrows, "line 113");
  //to reduce the array
  //   for (let id in countedBorrows){
  //     let sum = countedBorrows[id].reduce((acc,item)=> {
  //       return acc + item
  //     })
  //     countedBorrows[id] = sum
  //   }

  console.log(countedBorrows);
  let keys = Object.keys(countedBorrows);
  let sortedKeys = keys.sort((key1, key2) => {
    return countedBorrows[key2] - countedBorrows[key1]; //array of author ids sorted
  });
  console.log(sortedKeys);

  let mappedKeys = sortedKeys.map((key) => {
    const aut = authors.find((val) => {
      return val.id === Number(key);
    });
    return {
      name: `${aut.name.first} ${aut.name.last}`,
      count: countedBorrows[key],
    };
  });

  console.log(mappedKeys);
  return mappedKeys.slice(0, 5);
  //   for (let i =  0 ; i < authors.length; i++){
  //     let keyNames = []
  //     if (sortedKeys[i] === authors.id){
  //       keyNames.push('asdf')
  //       console.log(keyNames)
  //     }
  //   let filteredID  = authors.filter((name) =>{
  //     for (let i = 0 ; i < sortedKeys.length){
  //       if (sortedKeys[i] === authors)
  //     }

  //   })
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
