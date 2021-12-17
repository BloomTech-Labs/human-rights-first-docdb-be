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
      Admins.findAll.mockResolvedValue(allAdmins);
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
      expect(Admins.findAll.mock.calls.length).toBe(1);
    });
  });

  describe('[GET] /admins/:adminId -- gets admin by ID', () => {
    let res;
    const testAdmin = {
      adminId: 231412,
      id: 'mk10231',
    };
    beforeEach(async () => {
      Admins.findById.mockResolvedValue(testAdmin);
      res = await request(server).get('/admins/231412');
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should return 200', () => {
      expect(res.status).toBe(200);
    });
    it('should return a single admin', () => {
      expect(res.body.id).toBe('mk10231');
      expect(Admins.findById.mock.calls.length).toBe(1);
    });
  });

  describe('[POST] /admins -- creates new admin', () => {
    let res;
    const newAdmin = {
      id: 'j3iasd',
      name: 'Brian Cranston',
      email: 'brian@gmail.com',
    };
    beforeEach(async () => {
      Admins.findById.mockResolvedValue(undefined);
      Admins.create.mockResolvedValue([
        Object.assign({ adminId: 231412 }, newAdmin),
      ]);
      res = await request(server).post('/admins').send(newAdmin);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should return 201', () => {
      expect(res.status).toBe(201);
    });
    it('should return new admin', () => {
      expect(res.body[0]).toMatchObject({
        id: 'mk10231',
        adminId: 231412,
      });
      expect(Admins.create.mock.calls.length).toBe(1);
    });
  });
});
