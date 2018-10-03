
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cellar').del()
    .then(function () {
      // Inserts seed entries
      return knex('cellar').insert([
        {
          image: 'http://i.imgur.com/MYmtexg.jpg',
          brand: 'Gallaher',
          blend: 'Condor Plug',
          weight: 4.4,
          purchased: '2016-05-01',
          age: 2.42,
          price: 12,
          available: true,
          source: 'James Fox of Dublin',
          rating: 5
        },
        {
          image: 'https://i.ytimg.com/vi/yKI8RyxkjL8/maxresdefault.jpg',
          brand: 'Gallaher',
          blend: 'Condor Ready Rubbed',
          weight: 2.6,
          purchased: '2016-05-01',
          age: 2.42,
          price: 12,
          available: true,
          source: 'James Fox of Dublin',
          rating: 4.5
        },
        {
          image: 'https://mrsnuff.com/images/condor_longcut_50g_big.jpg',
          brand: 'Gallaher',
          blend: 'Condor Flake',
          weight: 0.55,
          purchased: '2016-05-01',
          age: 2.42,
          price: 12,
          available: true,
          source: 'GQ Tobacconist',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-059-0002.jpg',
          brand: 'Samuel Gawith',
          blend: 'Skiff Mixture',
          weight: 5,
          purchased: '2018-01-15',
          age: 0.82,
          price: 31,
          available: true,
          source: 'SmokingPipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-059-0006.jpg',
          brand: 'Samuel Gawith',
          blend: '1792 Flake',
          weight: 5,
          purchased: '2017-07-15',
          age: 1.25,
          price: 31,
          available: true,
          source: 'SmokingPipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-059-0007.jpg',
          brand: 'Samuel Gawith',
          blend: 'Full Virginia Flake',
          weight: 6.0,
          purchased: '2012-03-15',
          age: 6.58,
          price: 28,
          available: true,
          source: 'SmokingPipes',
          rating: 4
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-059-0013.jpg',
          brand: 'Samuel Gawith',
          blend: 'Bracken Flake',
          weight: 0.55,
          purchased: '2017-01-15',
          age: 1.83,
          price: 15,
          available: false,
          source: 'Private sale',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-744-0001.jpg',
          brand: 'Ogdens',
          blend: 'St. Bruno Flake',
          weight: 10,
          purchased: '2016-01-01',
          age: 2.83,
          price: 12,
          available: true,
          source: 'SmokingPipes',
          rating: 5
        },
        {
          image: 'https://img.pipesandcigars.com/p/300/pt/c/cpf-tp-1000.png?v=310094&format=jpg',
          brand: 'Ogdens',
          blend: 'St. Bruno Ready Rubbed',
          weight: 20,
          purchased: '2016-05-15',
          age: 2.42,
          price: 9,
          available: true,
          source: 'SmokingPipes',
          rating: 5
        },
        {
          image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-024-0026.jpg',
          brand: 'JF Germain',
          blend: 'Stonehaven',
          weight: 1,
          purchased: '2012-01-01',
          age: 6.83,
          price: 39,
          available: true,
          source: 'Rich\'s Cigar Store',
          rating: 4.5
        }
       
      ]);
    });
};


