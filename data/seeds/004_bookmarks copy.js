const bookmarks = [
  { bookmarkId: -100, id: 'abc123', fileId: '1' },
  { bookmarkId: -101, id: 'abc123', fileId: '2' },
  { bookmarkId: -102, id: 'abc123', fileId: '6' },
  { bookmarkId: -103, id: '23jsbb', fileId: '1' },
  { bookmarkId: -104, id: '23jsbb', fileId: '3' },
  { bookmarkId: -105, id: 'j3iasd', fileId: '4' },
  { bookmarkId: -106, id: 'jsh123', fileId: '9' },
  { bookmarkId: -107, id: 'jsh123', fileId: '8' },
  { bookmarkId: -108, id: 'jsh123', fileId: '7' },
  { bookmarkId: -109, id: 'bnsdj2', fileId: '2' },
  { bookmarkId: -110, id: 'jpe12f', fileId: '4' },
  { bookmarkId: -111, id: 'jpe12f', fileId: '6' },
  { bookmarkId: -112, id: 'jpe12f', fileId: '2' },
  { bookmarkId: -113, id: 'jpe12f', fileId: '9' },
];

exports.bookmarks = bookmarks;

exports.seed = function (knex) {
  return knex('bookmarks').insert(bookmarks);
};
