
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id:1,
          name: 'Garage',
        description:'hang shelves',
        completed:false},
        {id:2,
          name:'Kitchen',
        description:'put dishes away',
        completed:false},
        {id:3,
          name:'Study',
        description:'study API',
        completed:false}
      ]);
    });
};
