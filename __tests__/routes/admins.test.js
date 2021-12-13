const request = require('supertest');
const express = require('express');
const Admins = require('../../api/admin/adminModel');
const adminRouter = require('../../api/admin/adminRouter');
const server = express();
server.use(express.json());

jest.mock('../../api/admin/adminModel');
// mock the auth middleware completely
jest.mock('../../api/middleware/authRequired', () =>
  jest.fn((req, res, next) => next())
);

describe('admins router endpoints', () => {
  beforeAll(() => {
    // This is the module/route being tested
    server.use(['/admin', '/admins'], adminRouter);
    jest.clearAllMocks();
  });

  describe('[GET] /admins -- gets all admins', () => {
    let res;
    const allAdmins = [
      {
        adminId: -1,
        id: '2h38dh',
      },
      {
        adminId: -2,
        id: 'abc123',
      },
    ];

    beforeEach(async () => {
      Admins.allAdmins.mockResolvedValue(allAdmins);
      res = await request(server).get('/admins');
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should return 200', () => {
      expect(res.status).toBe(200);
    });
    it('should return a list of admins', () => {
      expect(res.body.length).toBe(2);
      expect(Admins.allAdmins.mock.calls.length).toBe(1);
    });
  });

  describe('[GET] /admins/:adminId -- gets admin by ID', () => {
    let res;
    const testAdmin = {
      adminId: 231412,
      id: 'makoto',
    };
    beforeEach(async () => {
      Admins.adminById.mockResolvedValue(testAdmin);
      res = await request(server).get('admins/231412');
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it.todo('should return 200');
    it.todo('should return a single admin');
  });

  describe('[POST] /admins -- creates new admin', () => {
    it.todo('should return 201');
    it.todo('should return new admin');
  });
});
