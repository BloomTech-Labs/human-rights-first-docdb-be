const db = require('../../data/db-config');
const Bookmarks = require('../../api/bookmarks/bookmarksModel');

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

it('sanity test', () => {
  expect(true).toBe(true);
});

describe('getBookmarks', () => {
  let res;
  beforeEach(async () => {
    res = await Bookmarks.getBookmarks();
  });

  it('returns 19 bookmarks', () => {
    expect(res).toHaveLength(19);
  });

  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('getByUserId(id)', () => {
  let res;
  const id = 'abc123';
  beforeEach(async () => {
    res = await Bookmarks.getByUserId(id);
  });

  it('returns correct bookmarks of specific user', () => {
    expect(res).toHaveLength(3);
  });

  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});

describe('addBookmark(bookmark)', () => {
  let res;
  const newBookmark = {
    bookmarkId: -119,
    id: '00ultx74kMUmEW8054x6',
    fileId: '123456789',
  };

  beforeEach(async () => {
    res = await Bookmarks.addBookmark(newBookmark);
  });

  it('returns 20 bookmarks', async () => {
    const getAll = await db('bookmarks');

    expect(getAll).toHaveLength(20);
    expect(getAll[19]).toMatchObject(newBookmark);
  });

  it('returns the correct data shape', () => {
    expect(res).toMatchSnapshot();
  });
});
