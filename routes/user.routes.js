import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from '../controllers/user.controller.js';

const router = express.Router();

// POST /api/users/login (Authenticate user)
router.post('/login', loginUser);

// Other user routes
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
