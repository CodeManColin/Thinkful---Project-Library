

function findAccountById(accounts, id) {
  const result = accounts.find(account => account.id === id);
  return result;
};


function sortAccountsByLastName(accounts) {
    const result = accounts.sort((accountA, accountB) => 
    accountA.name.last > accountB.name.last ? 1 : -1);
    return result;
}


const getTotalNumberOfBorrows = (account, books) => {
    let total = 0;
    for (let i = 0; i < books.length; i++) {
      const borrows = books[i].borrows;
      for (let j = 0; j < borrows.length; j++){
        const borrowsId = borrows[j].id;
        if (account.id === borrowsId) {
          total++;
        }
      }
    }
  return total;
}


function getBooksPossessedByAccount(account, books, authors) {
      const booksCheckedOut = [];
      books.forEach(book => {
        if (!book.borrows[0].returned && book.borrows[0].id === account.id) {
          const author = authors.find(author => book.authorId === author.id)
          const result = {...book, author};
          booksCheckedOut.push(result);
      }
    });
    return booksCheckedOut;
  }
   
  

 module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
