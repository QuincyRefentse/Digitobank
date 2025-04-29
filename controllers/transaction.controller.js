import Transaction from '../models/transaction.model.js';

export const createTransaction = async (req, res) => {
  try {
    const userId = req.user.id; // You need to get this from a verified JWT
    const { senderAccountNumber, receiverName, receiverAccountNumber, swiftCode, amount, currency, provider } = req.body;

    const transaction = new Transaction({
      sender: userId,
      senderAccountNumber,
      receiverName,
      receiverAccountNumber,
      swiftCode,
      amount,
      currency,
      provider
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ sender: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
