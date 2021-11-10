const db = require('../../data/db-config.js');

const getByUserId = async (userId) => {
  return await db('bookmarks').where('userId', userId);
};

module.exports = {
  getByUserId,
};
