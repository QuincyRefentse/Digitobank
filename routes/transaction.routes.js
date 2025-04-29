import express from 'express';
import { createTransaction, getUserTransactions } from '../controllers/transaction.controller.js';
import { protect } from '../middleware/authMiddleware.js'; // We'll create this next

const router = express.Router();

router.post('/', protect, createTransaction);
router.get('/', protect, getUserTransactions);

export default router;
