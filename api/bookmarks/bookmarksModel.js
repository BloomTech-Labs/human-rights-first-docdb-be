const db = require('../../data/db-config.js');

const getBookmarks = () => {
  return db('bookmarks');
};

const getByUserId = async (id) => {
  return await db('bookmarks').where('id', id);
};

const addBookmark = async (bookmark) => {
  await db('bookmarks').insert(bookmark);
  return await db('bookmarks').where('id', bookmark.id);
};

const removeBookmark = async (bookmark) => {
  await db('bookmarks').where(bookmark).del();
};

module.exports = {
  getByUserId,
  getBookmarks,
  addBookmark,
  removeBookmark,
};
