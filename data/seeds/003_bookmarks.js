const bookmarks = [
  { bookmarkId: -100, userId: 'abc123', documentId: '1' },
  { bookmarkId: -101, userId: 'abc123', documentId: '2' },
  { bookmarkId: -102, userId: 'abc123', documentId: '6' },
  { bookmarkId: -103, userId: '23jsbb', documentId: '1' },
  { bookmarkId: -104, userId: '23jsbb', documentId: '3' },
  { bookmarkId: -105, userId: 'j3iasd', documentId: '4' },
  { bookmarkId: -106, userId: 'jsh123', documentId: '9' },
  { bookmarkId: -107, userId: 'jsh123', documentId: '8' },
  { bookmarkId: -108, userId: 'jsh123', documentId: '7' },
  { bookmarkId: -109, userId: 'bnsdj2', documentId: '2' },
  { bookmarkId: -110, userId: 'jpe12f', documentId: '4' },
  { bookmarkId: -111, userId: 'jpe12f', documentId: '6' },
  { bookmarkId: -112, userId: 'jpe12f', documentId: '2' },
  { bookmarkId: -113, userId: 'jpe12f', documentId: '9' },
];

exports.bookmarks = bookmarks;

exports.seed = function (knex) {
  return knex('bookmarks').insert(bookmarks);
};
