const files = [
  {
    fileId: '1',
    fileTitle: 'Title1',
  },
  {
    fileId: '2',
    fileTitle: 'Title2',
  },
];

exports.files = files;

exports.seed = function (knex) {
  return knex('files').insert(files);
};
