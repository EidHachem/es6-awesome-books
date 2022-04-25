import { Book, UI, defaultBooks } from '../index.js';

const addBook = (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    return;
  }

  const book = new Book(title, author);

  defaultBooks.push(book);
  localStorage.setItem('books', JSON.stringify(defaultBooks));

  UI.addBookToList(book);

  UI.clearFields();
};

export { addBook };
