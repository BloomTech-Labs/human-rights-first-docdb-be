const admins = [
  {
    adminId: -1,
    userId: '2h38dh',
  },
  {
    adminId: -2,
    userId: 'abc123',
  },
];

exports.admins = admins;

exports.seed = function (knex) {
  return knex('admins').insert(admins);
};
