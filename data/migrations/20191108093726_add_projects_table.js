
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments();
      table.string('Name', 165).notNullable();
      table.string('Description', 255);
      table.boolean('false').notNullable();
  })
  .createTable('resource', table => {
      table.increments();
      table.string('ResourceName', 165)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('ResourceDescription', 255);
  })
  .createTable('tasks', table => {
      table.increments();
      table.string('TaskDescription', 255).notNullable();
      table.string('Notes', 255);
      table.boolean('false').notNullable();
  })
};

exports.down = function(knex) {
  
};
