const db = require('../../data/db-config');

const allAdmins = () => {
  return db('admins as ad')
    .leftJoin('profiles as pro', 'ad.id', 'pro.id')
    .select('ad.*', 'pro.name', 'pro.email');
};
const adminById = (adminId) => {
  return db('admins as ad')
    .leftJoin('profiles as pro', 'ad.id', 'pro.id')
    .select('ad.*', 'pro.name', 'pro.email')
    .where('ad.adminId', adminId);
};
const createAdmin = async (newAdmin) => {
  const admin = await db('admins').insert(newAdmin, 'id');
  return admin;
};
module.exports = {
  allAdmins,
  adminById,
  createAdmin,
};
