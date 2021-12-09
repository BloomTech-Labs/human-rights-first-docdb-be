const profiles = [
  {
    id: 'abc123',
    email: 'abc@gmail.com',
    name: 'John Smith',
    avatarUrl: 'tinyurl.com/2p8bsvbz',
  },
  {
    id: '2h38dh',
    email: 'mary@gmail.com',
    name: 'Mary Berry',
    avatarUrl: 'tinyurl.com/mph27afd',
  },
  {
    id: 'j3iasd',
    email: 'brian@gmail.com',
    name: 'Brian Cranston',
    avatarUrl: 'https://tinyurl.com/4ffmpmxu',
  },
  {
    id: '23jsbb',
    email: 'jessica@hotmail.com',
    name: 'Jessica Rabbit',
    avatarUrl: 'https://tinyurl.com/2p9a9bmm',
  },
  {
    id: 'jsh123',
    email: 'Santa@gmail.com',
    name: 'Santa Claus',
    avatarUrl: 'https://tinyurl.com/ycktu39j',
  },
  {
    id: 'bnsdj2',
    email: 'Rei@gmail.com',
    name: 'Rei Hino',
    avatarUrl: 'https://tinyurl.com/4pf7d3v6',
  },
  {
    id: 'jpe12f',
    email: 'jpeck@gmail.com',
    name: 'Josh Peck',
    avatarUrl: 'https://tinyurl.com/2hy5at25',
  },
  {
    id: '00ultx74kMUmEW8054x6',
    email: 'test_user@gmail.com',
    name: '003',
    avatarUrl: 'https://tinyurl.com/488ef4xm',
  },
];

exports.profiles = profiles;

exports.seed = function (knex) {
  return knex('profiles').insert(profiles);
};
