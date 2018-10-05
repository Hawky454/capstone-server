//! Holding this stuff for refrence

//!I think I might prefer to do it this way...
router.get('/', (req, res, next) => {
    knex('cellar')
        .orderBy('id')
        .then((cellar) => {
            console.log(cellar);
            res.send(cellar);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    //todo validate entries 
    queries.create(req.body).then(cellar => {
        res.json(cellar[0]);
        console.log('this is the request body', req.body);
    });
});

//!pipes
//? I'm going to hold on to this version as I may end up using it in the near future
router.get('/', (req, res, next) => {
    knex('pipes')
    .orderBy('id')
    .then((pipes) => {
        console.log(pipes);
        res.send(pipes);
      })
      .catch((err) => {
        next(err);
      });
  });