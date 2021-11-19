const db = require('../../data/db-config.js');

const getbookmarks = () => {
  return db('bookmarks');
};

const getByUserId = async (id) => {
  return await db('bookmarks').where('id', id);
};

const addbookmark = async (bookmark) => {
  await db('bookmarks').insert(bookmark);
  return await db('bookmarks').where('id', bookmark.id);
};
const removebookmark = async (bookmarkId) => {
  await db('bookmarks').where('bookmarkId', bookmarkId).del();
};

module.exports = {
  getByUserId,
  getbookmarks,
  addbookmark,
  removebookmark,
};
