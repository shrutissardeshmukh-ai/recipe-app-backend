import express from 'express';
import authRoutes from './auth.js';
import userRoutes from './users.js';
import recipeRoutes from './recipes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);

export default router;
