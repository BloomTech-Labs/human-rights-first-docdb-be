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

    .createTable('admins', function (table) {
      table.increments('adminId');
      table
        .string('userId')
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
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
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('bookmarks')
    .dropTableIfExists('admins')
    .dropTableIfExists('profiles');
};
