const request = require('supertest');
const express = require('express');
const Bookmarks = require('../../api/bookmarks/bookmarksModel');
const bookmarksRouter = require('../../api/bookmarks/bookmarksRouter');
const server = express();
server.use(express.json());
// const server = require('../../api/app.js');
// const db = require('../../data/db-config');

jest.mock('../../api/bookmarks/bookmarksModel');
// mock the auth middleware completely
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
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

  // describe('[GET] /:id', () => {
  //   test('abc123 returns 3 bookmarks', async () => {
  //     const res = await request(server).get('/bookmarks/abc123');
  //     console.log(res.body);
  //     expect(res.status).toBe(200);
  //     expect(res.body).toHaveLength(3);
  //   });
  // });
});
