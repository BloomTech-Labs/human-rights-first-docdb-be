const Bookmarks = require('./bookmarksModel');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  const id = req.profile.id;
  try {
    const bookmarks = await Bookmarks.getByUserId(id);
    res.status(200).json(bookmarks);
  } catch (err) {
    next(err);
  }
});

router.post('/:fileId', (req, res) => {
  const { fileId } = req.params;
  const { id } = req.profile;
  Bookmarks.addBookmark({ fileId, id })
    .then((bookmark) => {
      res.status(201).json(bookmark);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.delete('/:fileId', (req, res) => {
  const { fileId } = req.params;
  const { id } = req.profile;

  Bookmarks.removeBookmark({ fileId, id })
    .then((bookmark) => {
      res.status(200).json(bookmark);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
