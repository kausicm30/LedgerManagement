const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  ownerEmail:{ type: String, required: true},
  customer:{ type: String, required: true },
  phoneNumber:{type:Number, required: true},
  customerEmail:{ type: String, required: true},
  type:{ type: String, required: true },
  description:{type: String, required: true },
  amount:{ type: Number, required: true },

});

const transaction = mongoose.model('Transaction', transactionSchema,'TransactionDetails');

module.exports = transaction;