import express from 'express';
import { rateStore,getRatingsForStore } from '../controllers/RatingController.js';

const router = express.Router();

router.post('/', rateStore); // POST /api/ratings
router.get('/store/:storeId', getRatingsForStore);

export default router;
