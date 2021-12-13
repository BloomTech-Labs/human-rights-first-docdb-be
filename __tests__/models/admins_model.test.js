const db = require('../../data/db-config');
const Admins = require('../../api/admin/adminModel');

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
  expect(true).toBeTruthy();
});

describe('allAdmins()', () => {
  it.todo('returns 2 admins');
  it.todo('returns the correct data shape');
});

describe('adminById(adminId)', () => {
  it.todo('returns correct profile by adminId');
  it.todo('returns the correct data shape');
});

describe('createAdmin(newAdmin)', () => {
  it.todo('returns newly created admin');
  it.todo('returns 3 admins');
  it.todo('returns the correct data shape');
});
