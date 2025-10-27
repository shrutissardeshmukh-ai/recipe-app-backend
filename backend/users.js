import express from 'express';
import { addFavorite, getFavorites } from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/favorites', verifyToken, addFavorite);
router.get('/favorites', verifyToken, getFavorites);

export default router;
