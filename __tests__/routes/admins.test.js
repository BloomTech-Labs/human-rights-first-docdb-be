const request = require('supertest');
const express = require('express');
const Admins = require('../../api/admin/adminModel');
const adminsRouter = require('../../api/admin/adminRouter');
const server = express();
server.use(express.json());

jest.mock('../../api/admin/adminModel');

// mock the auth middleware completely
jest.mock('../../api/middleware/authRequired', () => {
  jest.fn((req, res, next) => next());
});

describe('admins router endpoints', () => {
  // This is the module/route being tested
  server.use(['/admin', 'admins'], adminsRouter);
  jest.clearAllMocks();
});

describe('[GET] /admins -- get all profiles');

describe('[GET] /admins/:adminId -- get admin profile by ID');

describe('[POST] /admins -- create a new admin account');
