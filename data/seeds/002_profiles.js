const faker = require('faker');

// const profiles = [...new Array(5)].map((i, idx) => ({
//   id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
//   avatarUrl: faker.image.avatar(),
//   email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
//   name:
//     idx === 0
//       ? 'Test001 User'
//       : `${faker.name.firstName()} ${faker.name.lastName()}`,
// }));

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex('profiles')
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('profiles').insert(profiles);
//     });
// };

const profiles = [
  {
    id: 'abc123',
    email: 'abc@gmail.com',
    name: 'John Smith',
    avatarUrl: faker.image.avatar(),
    admin: true,
  },
  {
    id: '2h38dh',
    email: 'mary@gmail.com',
    name: 'Mary Pie',
    avatarUrl: faker.image.avatar(),
    admin: false,
  },
  {
    id: 'j3iasd',
    email: 'brian@gmail.com',
    name: 'Brian Cranston',
    avatarUrl: faker.image.avatar(),
    admin: false,
  },
  {
    id: '23jsbb',
    email: 'jessica@hotmail.com',
    name: 'Jessica Knowles',
    avatarUrl: faker.image.avatar(),
    admin: false,
  },
  {
    id: 'jsh123',
    email: 'erica@gmail.com',
    name: 'Erica Rhodes',
    avatarUrl: faker.image.avatar(),
    admin: true,
  },
  {
    id: 'bnsdj2',
    email: 'andrew@gmail.com',
    name: 'Andrew Farget',
    avatarUrl: faker.image.avatar(),
    admin: false,
  },
  {
    id: 'jpe12f',
    email: 'jpeck@gmail.com',
    name: 'Josh Peck',
    avatarUrl: faker.image.avatar(),
    admin: false,
  },
];

exports.profiles = profiles;

exports.seed = function (knex) {
  return knex('profiles').insert(profiles);
};
