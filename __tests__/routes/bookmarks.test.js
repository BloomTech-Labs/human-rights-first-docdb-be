// const request = require('supertest');
const express = require('express');
// const Bookmarks = require('../../api/bookmarks/bookmarksModel');
const bookmarksRouter = require('../../api/bookmarks/bookmarksRouter');
const server = express();
server.use(express.json());

// TO-DO:
// We learned that testing the bookmarks router endpoints
// is tricky since we need to mock the req body Okta is
// sending to our middleware authRequired (authenticating
// a user upon login) in order to show the profile id
// to the endpoint so we can receive a 200 success status
// response to pass the first of 3 endpoint tests below.
//
// here's the link Ryan found that might help us with this:
//https://javascript.plainenglish.io/how-to-unit-test-express-middleware-typescript-jest-c6a7ad166e74

// After the GET endpoint test is passing, the POST and DELETE
// endpoint tests might need some tweaking but I believe I set
// them up decently enough.

// Wishing the next person(s) to work on this a happy holiday season
// All the best! - Dom

jest.mock('../../api/bookmarks/bookmarksModel');
// mock the auth middleware completely
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => {
    req.profile = { id: 'abc123' };
    next();
  })
);

describe('bookmarks router endpoints', () => {
  beforeAll(() => {
    // This is the module/route being tested
    server.use('/bookmarks', bookmarksRouter);
    jest.clearAllMocks();
  });

  test('sanity check', async () => {
    expect(true).toBeTruthy();
  });

  // describe('GET /bookmarks', () => {
  //   it('should return 200 when bookmarks are found', async () => {
  //     Bookmarks.getByUserId.mockResolvedValue([
  //       { bookmarkId: -100, id: 'abc123', fileId: '1' },
  //       { bookmarkId: -101, id: 'abc123', fileId: '2' },
  //       { bookmarkId: -102, id: 'abc123', fileId: '6' },
  //     ]);
  //     const res = await request(server).get('/bookmarks');
  //     // console.log(res);
  //     expect(res.status).toBe(200);
  //     expect(res.body.length).toBe(3);
  //     expect(Bookmarks.getByUserId.mock.calls.length).toBe(1);
  //   });
  // });

  // describe('POST /bookmarks/:fileId', () => {
  //   it('should return 200 when a bookmark is added', async () => {
  //     const bookmark = {
  //       id: '00ultx74kMUmEW8054x6',
  //       fileId: '123456789',
  //     };
  //     Bookmarks.getByUserId.mockResolvedValue('00ultx74kMUmEW8054x6');
  //     Bookmarks.addBookmark.mockResolvedValue([
  //       Object.assign({ id: '00ultx74kMUmEW8054x6' }, bookmark),
  //     ]);
  //     const res = await request(server).post('/bookmarks').send(bookmark);

  //     expect(res.status).toBe(200);
  //     expect(res.body.bookmark.bookmarkId).toBe(-119);
  //     expect(Bookmarks.create.mock.calls.length).toBe(1);
  //   });
  // });

  // describe('DELETE /bookmarks/:fileId', () => {
  //   let bookmark = {
  //     bookmarkId: '',
  //     id: '',
  //     fileId: '',
  //   };

  //   it('should return 200 when bookmark is deleted', async () => {
  //     Bookmarks.getByUserId.mockResolvedValue(bookmark);
  //     Bookmarks.removeBookmark.mockResolvedValue({
  //       message: `bookmark deleted`,
  //       bookmark: bookmark,
  //     });

  //     const res = await request(server).delete('/bookmarks/97898');

  //     expect(res.status).toBe(200);
  //     expect(res.body.message).toBe('bookmark deleted');
  //   });
  // });
});
