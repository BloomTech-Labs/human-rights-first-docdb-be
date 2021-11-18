const express = require('express');
const router = express.Router();
const Admins = require('./adminModel');

router.get('/', (req, res) => {
  Admins.allAdmins()
    .then((admins) => {
      res.status(200).json(admins);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.get('/:adminId', (req, res) => {
  const { adminId } = req.params;
  Admins.adminById(adminId)
    .then((admin) => {
      res.json(admin);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.post('/', (req, res) => {
  Admins.createAdmin(req.body)
    .then((admin) => {
      res.status(201).json(admin);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
