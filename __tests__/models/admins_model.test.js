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

describe('findAll()', () => {
  let res;
  beforeEach(async () => {
    res = await Admins.findAll();
  });
  it('returns 2 admins', () => {
    expect(res).toHaveLength(2);
  });
  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
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
