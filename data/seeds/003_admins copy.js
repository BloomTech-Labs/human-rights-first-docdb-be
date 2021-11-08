const admins = [
  {
    id: -1,
    userId: '2h38dh',
  },
  {
    id: -2,
    userId: 'abc123',
  },
];

exports.admins = admins;

exports.seed = function (knex) {
  return knex('admins').insert(admins);
};
