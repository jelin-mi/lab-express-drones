const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
  .then((drones) => {
    console.log(`${drones.length} drones were successfully created.`);
    res.render('drones/list', { drones });
  })
  .catch(error => {
    console.log('Error while getting the drones from the DB: ', error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(dronesfromDB => console.log(`New drone created: ${dronesfromDB.name}.`))
  .then(() => res.redirect('/drones'))
  .catch(error => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
