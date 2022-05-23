const express = require('express');
const router = express.Router();
const flipRaffle = require('../models/flip_raffle_list');
const flipRafflelist = require('../models/flip_raffle_ticket');

router.get('/', (req, res, next) => {
    res.send("App is working");
});

router.get('/find', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  flipRaffle.find()
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/findTicket', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  flipRafflelist.find()
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/register', (req, res, next) => {
  if (req.body) {
    flipRaffle.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.post('/update', (req, res, next) => {
  if (req.body) {
    flipRaffle.findByIdAndUpdate(req.body.id, {ticket_supply: req.body.ticket_supply}, function(err, response) {
      if(err) res.json({message: "Error in updateing ticket_supply"});
      res.json(response);
    })
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.post('/update1', (req, res, next) => {
  if (req.body) {
    flipRaffle.findByIdAndUpdate(req.body.id, {raffle_closed: true}, function(err, response) {
      if(err) res.json({message: "Error in updateing raffle_closed"});
      res.json(response);
    })
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.post('/update2', (req, res, next) => {
  if (req.body) {
    flipRaffle.findByIdAndUpdate(req.body.id, {winners: req.body.winners}, function(err, response) {
      if(err) res.json({message: "Error in updateing winners"});
      res.json(response);
    })
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.post('/registerTicket', (req, res, next) => {
  if (req.body) {
    flipRafflelist.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

module.exports = router;