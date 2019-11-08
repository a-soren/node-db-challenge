
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id:1,
         ResourceName: 'Garage',
         ResourceDescription: 'tools are on the right'},
        {id:2,
          ResourceName: 'Kitchen',
        ResourceDescription: 'cups go above the dishwasher'},
        {id:3,
          ResourceName: 'Study',
        ResourceDescription: 'books are in the backpack'}
      ]);
    });
};
