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

describe('getBookmarks', () => {
  let res;
  beforeEach(async () => {
    res = await Bookmarks.getBookmarks();
  });

  it('returns 14 bookmarks', () => {
    expect(res).toHaveLength(14);
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
});

describe('addBookmark(bookmark)', () => {
  let res;
});
