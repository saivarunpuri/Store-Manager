import express from 'express';
import {
  addStore,
  listStores,
  loginStore, // ✅ added login controller
} from '../controllers/StoreController.js';

const router = express.Router();

router.post('/add', addStore);
router.get('/', listStores);
router.post('/login', loginStore); // ✅ login route added

export default router;
