import express from 'express';
import {
  addStore,
  listStores,
  loginStore,
  changeStorePassword // ✅ added login controller
} from '../controllers/StoreController.js';

const router = express.Router();

router.post('/add', addStore);
router.get('/', listStores);
router.post('/login', loginStore);
router.put('/change-password', changeStorePassword); // ✅ login route added

export default router;
