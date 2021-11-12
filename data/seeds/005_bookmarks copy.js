const bookmarks = [
  { bookmarkId: -100, userId: 'abc123', fileId: '1' },
  { bookmarkId: -101, userId: 'abc123', fileId: '2' },
  { bookmarkId: -102, userId: 'abc123', fileId: '6' },
  { bookmarkId: -103, userId: '23jsbb', fileId: '1' },
  { bookmarkId: -104, userId: '23jsbb', fileId: '3' },
  { bookmarkId: -105, userId: 'j3iasd', fileId: '4' },
  { bookmarkId: -106, userId: 'jsh123', fileId: '9' },
  { bookmarkId: -107, userId: 'jsh123', fileId: '8' },
  { bookmarkId: -108, userId: 'jsh123', fileId: '7' },
  { bookmarkId: -109, userId: 'bnsdj2', fileId: '2' },
  { bookmarkId: -110, userId: 'jpe12f', fileId: '4' },
  { bookmarkId: -111, userId: 'jpe12f', fileId: '6' },
  { bookmarkId: -112, userId: 'jpe12f', fileId: '2' },
  { bookmarkId: -113, userId: 'jpe12f', fileId: '9' },
];

exports.bookmarks = bookmarks;

exports.seed = function (knex) {
  return knex('bookmarks').insert(bookmarks);
};
