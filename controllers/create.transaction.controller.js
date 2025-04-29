import Transaction from '../models/transaction.model.js';
import User from '../models/user.model.js';

export const createTransaction = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      senderAccountNumber,
      receiverName,
      receiverAccountNumber,
      swiftCode,
      amount,
      currency,
      provider
    } = req.body;

    // Find sender and receiver
    const sender = await User.findById(userId);
    const receiver = await User.findOne({ accountNumber: receiverAccountNumber });

    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    if (sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Create transaction
    const transaction = new Transaction({
      sender: sender._id,
      senderAccountNumber,
      receiverName,
      receiverAccountNumber,
      swiftCode,
      amount,
      currency,
      provider
    });

    // Save transaction
    await transaction.save();

    // Update balances
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    res.status(201).json({
      message: "Transaction successful",
      transaction
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
