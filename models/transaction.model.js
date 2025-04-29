import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  senderAccountNumber: {
    type: String,
    required: true
  },
  receiverName: {
    type: String,
    required: true,
    trim: true
  },
  receiverAccountNumber: {
    type: String,
    required: true
  },
  swiftCode: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(v),
      message: props => `${props.value} is not a valid SWIFT code!`
    }
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    required: true,
    enum: ['USD', 'EUR', 'ZAR', 'GBP', 'JPY', 'AUD'] // extend as needed
  },
  provider: {
    type: String,
    default: 'SWIFT',
    enum: ['SWIFT'] // Add others if needed
  },
  status: {
    type: String,
    enum: ['Pending', 'Verified', 'SentToSWIFT'],
    default: 'Pending'
  },
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
