const admins = [
  {
    adminId: -1,
    id: '2h38dh',
  },
  {
    adminId: -2,
    id: 'abc123',
  },
];

exports.admins = admins;

exports.seed = function (knex) {
  return knex('admins').insert(admins);
};
