/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import { UI, defaultBooks } from '../index.js';

const hanldRemove = (e) => {
  UI.deleteBook(e.target);
  localStorage.setItem('books', JSON.stringify(defaultBooks));
};

export { hanldRemove };
