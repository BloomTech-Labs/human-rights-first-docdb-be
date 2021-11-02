exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })

    .createTable('bookmarks', function (table) {
      table.increments('bookmarkId');
      table
        .string('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
      table
        .integer('documentId')
        .notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('bookmarks')
    .dropTableIfExists('profiles');
};
