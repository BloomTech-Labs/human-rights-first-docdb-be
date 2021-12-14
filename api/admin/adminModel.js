const db = require('../../data/db-config');

const findAll = () => {
  return db('admins as ad')
    .leftJoin('profiles as pro', 'ad.id', 'pro.id')
    .select('ad.*', 'pro.name', 'pro.email');
};
const findById = (adminId) => {
  return db('admins as ad')
    .leftJoin('profiles as pro', 'ad.id', 'pro.id')
    .select('ad.*', 'pro.name', 'pro.email')
    .where('ad.adminId', adminId)
    .first();
};
const create = async (newAdmin) => {
  await db('admins').insert(newAdmin, 'id').returning('*');

  return db('admins as ad')
    .leftJoin('profiles as pro', 'ad.id', 'pro.id')
    .select('ad.*', 'pro.name', 'pro.email')
    .where('ad.id', newAdmin.id)
    .first();
};
module.exports = {
  findAll,
  findById,
  create,
};
