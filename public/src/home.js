

const getTotalBooksCount = (books) => {
  return books.length;
};

const getTotalAccountsCount = accounts => accounts.length;

function getBooksBorrowedCount(books) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].borrows.length; j++) {
        const borrows = books[i].borrows[j];
        if (borrows.returned === false) {
          count++;
        }
      }
    }
  return count;
}


function getMostCommonGenres(books) {
    let countObj = {};
    books.forEach(book => {
    if(countObj[book.genre]) {
       countObj[book.genre]++
      } else {
       countObj[book.genre] = 1
     }
    });
    const mapBooks = Object.entries(countObj).map(([name, count]) => {
      return {name, count};
    });
    const sortBooks = mapBooks.sort((genreA, genreB) => {
      return genreB.count - genreA.count;
    });
   return sortBooks.slice(0,5);
  }




function getMostPopularBooks(books) {
    const popBookList = [];
    for (let item in books) {
      const book = books[item];
      const name = book.title;
      const count = book.borrows.length;
      const newObj = {name, count} 
      popBookList.push(newObj);
      }
      const sortPopBooks = popBookList.sort((bookA, bookB) => {
      return bookB.count - bookA.count;
    });
    return sortPopBooks.slice(0,5);
  }

 
 

  function getMostPopularAuthors(books, authors) {
    const authorsList = [];
    for (let i = 0; i < authors.length; i++) {
      const firstName = authors[i].name.first;
      const lastName = authors[i].name.last
      for (let j = 0; j < books.length; j++) {
        if (authors[i].id === books[j].authorId) {
          const name = `${firstName} ${lastName}`;
          const count = books[i].borrows.length;
          const newObj = {name, count}
          authorsList.push(newObj);
         }
        }
      }
    const popAuthors = authorsList.sort((authorA, authorB) => {
    return authorB.count - authorA.count
    });
  return popAuthors.slice(0, 5);
}
   
  
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
