const express = require('express');
const router = express.Router();
const Admins = require('./adminModel');

router.get('/', (req, res) => {
  Admins.findAll()
    .then((admins) => {
      res.status(200).json(admins);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.get('/:adminId', (req, res) => {
  const { adminId } = req.params;
  Admins.findById(adminId)
    .then((admin) => {
      res.status(200).json(admin);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.post('/', (req, res) => {
  Admins.create(req.body)
    .then((admin) => {
      res.status(201).json(admin);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});
module.exports = router;
