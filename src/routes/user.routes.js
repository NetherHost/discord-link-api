import express from 'express';
import UserController from '../controllers/user.controller.js';
import authenticateBot from '../middleware/auth.js';

const router = express.Router();

router.get('/clients', authenticateBot, UserController.getClients);

export default router;
