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

  it('returns 9 profiles', async () => {
    const getAll = await db('profiles');

    expect(getAll).toHaveLength(9);
    expect(getAll[8]).toMatchObject(newProfile);
  });
  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('update(id, profile)', () => {
  let res;
  const oldProfile = {
    id: 'bnsdj2',
    email: 'Rei@gmail.com',
    name: 'Rei Hino',
    avatarUrl: 'https://tinyurl.com/4pf7d3v6',
  };

  const updatedProfile = {
    id: 'bnsdj2',
    email: 'Minako@gmail.com',
    name: 'Minako Aino',
    avatarUrl: 'https://tinyurl.com/4pf7d3v6',
  };
  beforeEach(async () => {
    res = await Profiles.update(oldProfile.id, updatedProfile);
  });
  it('finds and returns correct profile with updated information', async () => {
    const findById = await db('profiles')
      .where({ id: 'bnsdj2' })
      .select('*')
      .first();
    expect(res[0].name).toBe('Minako Aino');
    expect(findById).toMatchObject(updatedProfile);
  });
  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('remove(id)', () => {
  const profileToRemove = {
    id: 'bnsdj2',
    email: 'Rei@gmail.com',
    name: 'Rei Hino',
    avatarUrl: 'https://tinyurl.com/4pf7d3v6',
  };
  it('removes a profile from the db', async () => {
    await Profiles.remove(profileToRemove.id);
    const findAll = await db('profiles');
    expect(findAll).toHaveLength(7);
  });
  it('finds and removes the correct profile', async () => {
    const findProfileBeforeRemove = await db('profiles')
      .where({ id: profileToRemove.id })
      .select('*')
      .first();
    expect(findProfileBeforeRemove.name).toBe('Rei Hino');

    await Profiles.remove(profileToRemove.id);

    const findProfileAfterRemoval = await db('profiles')
      .where({ id: profileToRemove.id })
      .select('*')
      .first();

    expect(findProfileAfterRemoval).not.toBeDefined();
  });

  it('returns the correct data shape', async () => {
    let res = await Profiles.remove(profileToRemove.id);

    expect(res).toBe(1);
  });
});

describe('findOrCreateProfile()', () => {
  it.todo('placeholder');
  it.todo('returns the correct data shape');
});
