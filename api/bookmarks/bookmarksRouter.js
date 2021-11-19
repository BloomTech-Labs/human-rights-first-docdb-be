const Bookmarks = require('./bookmarksModel');
const router = require('express').Router();

router.get('/', (req, res) => {
  Bookmarks.getbookmarks()
    .then((bookmarks) => {
      res.status(200).json(bookmarks);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.get('/:id', async (req, res, next) => {
  const id = String(req.params.id);
  try {
    const bookmarks = await Bookmarks.getByUserId(id);
    res.status(200).json(bookmarks);
  } catch (err) {
    next(err);
  }
});

router.post('/:fileId', (req, res) => {
  Bookmarks.addbookmark(req.params.fileId)
  
    .then((bookmark) => {
      res.status(201).json(bookmark);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
