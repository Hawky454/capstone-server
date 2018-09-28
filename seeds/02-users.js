
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          fullname: 'David Miller',
          username: 'Hawky454',
          password: 'Billygoat173@'
        },
        {
          fullname: 'Vlad Drac',
          username: 'Bloodsucker69',
          password: 'suckySucky123#'
        },
        {
          fullname: 'Bela Lugosi',
          username: 'TheBelMeister',
          password: 'sharpTeeth669'
        },
        
      ]);
    });
};
