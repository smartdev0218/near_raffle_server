const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flip_list = new Schema({
  raffle_title: {
    type: String,
  },
  raffle_description: {
    type: String,
  },
  raffle_id: {
    type: Number,
  },  
  ticket_price: {
    type: Number,
  },
  ticket_supply: {
    type: Number,
  },
  win_ticket: {
    type: Number,
  },
  raffle_closed: {
    type: Boolean
  },
  start_raffle: {
    type: Number,
  },
  start_year: {
    type: Number,
  },
  start_month: {
    type: Number,
  },
  start_day: {
    type: Number,
  },
  start_hour: {
    type: Number,
  },
  start_min: {
    type: Number,
  },
  base64String: {
    type: String,
  },
  winners: {
    type: Array,
  },
  Date: {
    type: Date,
    default: Date.now,
  }
});

const coin_list = mongoose.model('flip_raffle', flip_list);

module.exports = coin_list;