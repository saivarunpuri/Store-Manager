import express from 'express';
import { registerUser, loginUser } from '../controllers/UserController.js';

const router = express.Router();

// Register User route with validation
router.post('/register', registerUser);

// Login User route
router.post('/login', loginUser);

export default router;
