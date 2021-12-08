const request = require('supertest');
const server = require('../api/app');
const db = require('../data/db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

it('sanity check', () => {
  expect(true).toBe(true);
});

describe('[GET] /profiles', () => {
  it.todo('returns 7 profiles');
  it.todo('returns the correct data shape');
});

describe('[GET] /profiles/:id', () => {
  it.todo('returns 1 profile');
  it.todo('returns correct name');
  it.todo('returns the correct data shape');
  it.todo('returns correct error message if the profile is not found');
});

describe('[POST] /profiles', () => {
  it.todo('creates a new profile');
  it.todo('returns the correct data shape');
});

describe('[POST] /profiles', () => {
  it.todo('creates a new profile');
  it.todo('returns the correct data shape');
});

describe('[PUT] /profiles', () => {
  it.todo('updates an existing profile');
  it.todo('returns the correct data shape');
});

describe('[DELETE] /profiles/:id', () => {
  it.todo('deletes profile');
  it.todo('returns the right message')
  it.todo('returns the correct data shape');
});