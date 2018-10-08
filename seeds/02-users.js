
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'hawky454@gmail.com',
          username: 'Hawky454',
          password: 'abc123',
          password2: 'abc123',
          address: '10707 Lake Creak Parkway',
          city: 'Austin',
          state: 'TX',
          zip: 78750
        },
        {
          email: 'dummy123@email.com',
          username: 'HappyDoggie',
          password: 'HappyDoggie33',
          password2: 'HappyDoggie33',
          address: '3434 Haven Oak Dr',
          city: 'Portland',
          state: 'OR',
          zip: 97990
        },
        {
          email: 'sillyBread@gmail.com',
          username: 'SillyBread1232',
          password: 'SillyBread!@',
          password2: 'SillyBread!@',
          address: '1028 Colombia Circle',
          city: 'Flagastaff',
          state: 'AZ',
          zip: 89839
        },
        
      ]);
    });
};
