const faker = require('faker');

const profiles = [
  {
    id: 'abc123',
    email: 'abc@gmail.com',
    name: 'John Smith',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: '2h38dh',
    email: 'mary@gmail.com',
    name: 'Mary Pie',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: 'j3iasd',
    email: 'brian@gmail.com',
    name: 'Brian Cranston',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: '23jsbb',
    email: 'jessica@hotmail.com',
    name: 'Jessica Knowles',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: 'jsh123',
    email: 'erica@gmail.com',
    name: 'Erica Rhodes',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: 'bnsdj2',
    email: 'andrew@gmail.com',
    name: 'Andrew Farget',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: 'jpe12f',
    email: 'jpeck@gmail.com',
    name: 'Josh Peck',
    avatarUrl: faker.image.avatar(),
  },
  {
    id: '00ultx74kMUmEW8054x6',
    email: 'test_user@gmail.com',
    name: '003',
    avatarUrl: faker.image.avatar(),
  },
];

exports.profiles = profiles;

exports.seed = function (knex) {
  return knex('profiles').insert(profiles);
};
