import { Book, UI, defaultBooks } from '../index.js';

const hanldRemove = (e) => {
  UI.deleteBook(e.target);
  localStorage.setItem('books', JSON.stringify(defaultBooks));
};

export { hanldRemove };
