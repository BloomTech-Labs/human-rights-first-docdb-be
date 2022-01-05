const Bookmarks = require('./bookmarksModel');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  // console.log('this is req:', req); /* Ryan's request to console.log req */
  const id = req.profile.id;
  try {
    const bookmarks = await Bookmarks.getByUserId(id);
    res.status(200).json(bookmarks);
  } catch (err) {
    next(err);
  }
  // Below is the code we wrote to refactor the endpoint with .then &
  // .catch instead of try/catch
  //
  // const id = req.profile.id; /* <--- profile errors as undefined in testing */
  // const id = req.params.id;  /* <--- this works with testing */
  // Bookmarks.getByUserId(id)
  //   .then((bookmarks) => {
  //     console.log(bookmarks);
  //     res.status(200).json(bookmarks);
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error });
  //   });
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
