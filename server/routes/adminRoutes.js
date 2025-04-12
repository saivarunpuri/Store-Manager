import express from 'express';
import {
  loginAdmin,
  adminAddUser,
  adminAddStore,
  adminListUsers,
  adminListStores,
  adminGetRatings
} from '../controllers/AdminController.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/add-user', adminAddUser);
router.post('/add-store', adminAddStore);
router.get('/users', adminListUsers);
router.get('/stores', adminListStores);
router.get('/ratings', adminGetRatings);

export default router;
