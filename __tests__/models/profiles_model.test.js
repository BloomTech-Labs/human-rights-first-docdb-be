const db = require('../../data/db-config');
const Profiles = require('../../api/profile/profileModel');

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
    res = await Profiles.findAll();
  });

  it('returns 8 profiles', () => {
    expect(res).toHaveLength(8);
  });

  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('findById(id)', () => {
  let res;
  const id = 'abc123';
  beforeEach(async () => {
    res = await Profiles.findById(id);
  });
  it('returns correct profile by id', () => {
    expect(res.name).toBe('John Smith');
    expect(res.email).toBe('abc@gmail.com');
  });
  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('create(profile)', () => {
  let res;
  const newProfile = {
    id: '0630SM',
    email: 'rabbit@moon.com',
    name: 'Usagi Tsukino',
    avatarUrl: 'https://tinyurl.com/y7adbfe8',
  };

  beforeEach(async () => {
    res = await Profiles.create(newProfile);
  });

  it('returns newly created profile', () => {
    expect(res[0]).toMatchObject(newProfile);
  });

  it.todo('returns 9 profiles');
  it.todo('returns the correct data shape');
});

describe('update(id, profile)', () => {
  it.todo('placeholder');
  it.todo('returns the correct data shape');
});

describe('remove()', () => {
  it.todo('placeholder');
  it.todo('returns the correct data shape');
});

describe('findOrCreateProfile()', () => {
  it.todo('placeholder');
  it.todo('returns the correct data shape');
});
