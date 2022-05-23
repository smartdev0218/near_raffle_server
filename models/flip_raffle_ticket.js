const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raffles_list = new Schema({
  account_id: {
    type: String,
  },
  raffle_id: {
    type: Number,
  },
  ticket_supply: {
    type: Number,
  },
  Date: {
    type: Date,
    default: Date.now,
  }
});

const raffle_list = mongoose.model('flip_raffle_ticket', raffles_list);

module.exports = raffle_list;