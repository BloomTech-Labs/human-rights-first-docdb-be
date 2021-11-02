exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.boolean('admin').defaultTo('false');
      table.timestamps(true, true);
    })

    .createTable('bookmarks', function (table) {
      table.increments('bookmarkId');
      table
        .string('userId')
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('documentId').notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('bookmarks')
    .dropTableIfExists('profiles');
};
