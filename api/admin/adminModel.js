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
    .where('ad.adminId', adminId);
};
const create = async (newAdmin) => {
  const admin = await db('admins').insert(newAdmin, 'id');
  return admin;
};
module.exports = {
  findAll,
  findById,
  create,
};
