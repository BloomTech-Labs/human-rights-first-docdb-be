const admins = [
  {
    adminId: 3424,
    id: '2h38dh',
  },
  {
    adminId: 23423,
    id: 'abc123',
  },
];

exports.admins = admins;

exports.seed = function (knex) {
  return knex('admins').insert(admins);
};
