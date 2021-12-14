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

describe('findById(adminId)', () => {
  let res;
  const adminId = 23423;
  beforeEach(async () => {
    res = await Admins.findById(adminId);
  });
  it('returns correct profile by findById', () => {
    expect(res.name).toBe('John Smith');
    expect(res.id).toBe('abc123');
  });
  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('create(newAdmin)', () => {
  let res;
  const newAdmin = {
    id: 'j3iasd',
  };
  const newlyCreatedAdmin = {
    adminId: 1,
    id: 'j3iasd',
    name: 'Brian Cranston',
    email: 'brian@gmail.com',
  };

  beforeEach(async () => {
    res = await Admins.create(newAdmin);
  });
  it('returns newly created admin', () => {
    expect(res.name).toBe(newlyCreatedAdmin.name);
    expect(res.email).toBe(newlyCreatedAdmin.email);
  });
  it('returns 3 admins', async () => {
    const getAll = await db('admins');
    expect(getAll).toHaveLength(3);
  });
  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});
