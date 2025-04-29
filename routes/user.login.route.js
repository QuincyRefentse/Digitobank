import { loginUser } from '../controllers/user.controller.js';
import express from 'express';

router.post('/login', loginUser);
