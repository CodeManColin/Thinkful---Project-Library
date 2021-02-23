

const findAuthorById = (authors, id) => {
  const result = authors.find(author => author.id === id);
  return result;
}


function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
    let result = [];
    const borrowed = books.filter(book => {
      return book.borrows[0].returned === false;
  });
    const returned = books.filter(book => {
      return book.borrows[0].returned === true;
  });
    result.push(borrowed);
    result.push(returned);
    return result;
  }


function getBorrowersForBook(book, accounts) {
  const borrowsList = []; 
  const borrows = book.borrows; 
  for (let i = 0; i < accounts.length; i ++) {
    const account = accounts[i];
    const accountId = accounts[i].id;
    for (let j = 0; j < borrows.length; j++) {
      const borrowed = borrows[j];
      const borrowsId = borrows[j].id;
      if (accountId === borrowsId) {
       const result = {...borrowed, ...account};
       borrowsList.push(result);
      }   
    }
  }
  return borrowsList.slice(0,10);
}
   
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
