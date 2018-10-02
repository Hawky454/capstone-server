// let express = require('express');
// let router = express.Router();
// let env = process.env.NODE_ENV || 'development';
// let config = require('../knexfile.js')[env];
// let knex = require('knex')(config);

// let app = express();

// //! testing this out from stack overflow
// global.bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//   extended: true,
//   limit: '50mb',
//   parameterLimit: 100000
// }))
// app.use(bodyParser.json({
//   limit: '50mb',
//   parameterLimit: 100000
// }))


// //!


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// router.post('/add', (req, res, next) => {
//   knex('cellar')
//   .insert({
//       image: req.body.imgUrl,
//       age: req.body.age,
//       brand: req.body.brand,
//       price: req.body.price,
//       blend: req.body.blend,
//       weight: req.body.weight,
//       purchased: req.body.date,
//       Available: req.body.available,
//       source: req.body.source,
//       rating: req.body.rating
//   }, '*')

//   .then(() => {
//       res.render('add');
//   })

//   .catch((err) => {
//       next(err);
//   });
// });

// module.exports = router;
