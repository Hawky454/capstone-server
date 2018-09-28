exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pipes').del()
    .then(function() {
      // Inserts seed entries
      return knex('pipes').insert([{
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-575-0108.jpg',
          brand: 'Gamboni',
          pipemaker: 'Gian Maria Gamboni',
          year: 2016,
          price: 500,
          smooth: false,
          sandblasted: true,
          source: 'Smoking Pipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-361-0101.jpg',
          brand: 'Ivarsson',
          pipemaker: 'Nanna Ivarsson',
          year: 2017,
          price: 460,
          smooth: true,
          sandblasted: false,
          source: 'Smoking Pipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-497-0182_1.jpg',
          brand:'Grechukhin',
          pipemaker:'Vladmir Grechukhin',
          year: 2018,
          price: 1140,
          smooth: true,
          sandblasted: false,
          source: 'Smoking Pipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-034-8120.jpg',
          brand: 'Stanwell',
          pipemaker: 'Tom Eltang',
          year: 2015,
          price: 65,
          smooth: true,
          sandblasted: false,
          source: 'Pipes & Cigars',
          rating: 3
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-508-6869.jpg',
          brand: 'Nordning',
          pipemaker: 'Erik Nording',
          year: 2012,
          price: 74,
          smooth: true,
          sandblasted: false,
          source: 'Pipe World',
          rating: 3.5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-600-0012.jpg',
          brand: 'Shekita',
          pipemaker: 'Konstantin Shekita',
          year: 2018,
          price: 1995,
          smooth: false,
          sandblasted: false,
          source: 'Smoking Pipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-713-0006.jpg',
          brand: 'Liskey',
          pipemaker: 'Steven Liskey',
          year: 2017,
          price: 699,
          smooth: false,
          sandblasted: true,
          source: 'Steve Liskey',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-696-0181.jpg',
          brand: 'Briar Works',
          pipemaker: 'Adam Davidson',
          year: 2017,
          price: 269,
          smooth: false,
          sandblasted: true,
          source: 'Smoking Pipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/002-141-1138.jpg',
          brand: 'Tokutomi',
          pipemaker: 'Hiroyuki Tokutomi',
          year: 2017,
          price: 1700,
          smooth: false,
          sandblasted: true,
          source: 'Smoking Pipes',
          rating: 5
        },

      ]);
    });
};

