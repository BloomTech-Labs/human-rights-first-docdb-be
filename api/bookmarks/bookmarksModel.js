const db = require('../../data/db-config.js');

const getbookmarks = () => {
  return db('bookmarks');
};

const getByUserId = async (id) => {
  return await db('bookmarks').where('id', id);
};

module.exports = {
  getByUserId,
  getbookmarks,
};
