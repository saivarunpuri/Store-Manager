import db from '../configs/db.js';
import { findAdminByEmail, createAdmin } from '../models/Admin.js';
import { createUser, getUsers } from '../models/User.js';
import { createStore, getStores, findStoreByEmail } from '../models/Store.js';
import { getAllRatings } from '../models/Rating.js';

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await findAdminByEmail(email);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    if (admin.password !== password) return res.status(401).json({ message: 'Invalid password' });

    res.json({ message: 'Login successful', data: admin });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};

export const adminAddUser = async (req, res) => {
  const { name, email, address, password } = req.body;
  console.log("Request Body:", req.body);
  try {
    const newUser = await createUser(name, email, address, password);
    res.json({ message: 'User added', data: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Add user failed', error: err.message });
  }
};

export const adminAddStore = async (req, res) => {
  const { name, email, password, address, category } = req.body;

  try {
    const existingStore = await db.oneOrNone('SELECT * FROM stores WHERE email = $1', [email]);
    if (existingStore) {
      return res.status(400).json({ message: 'A store with this email already exists.' });
    }

    const newStore = await createStore(name, email, password, address, category);
    res.json({ message: 'Store created successfully', data: newStore });
  } catch (err) {
    console.error('Error creating store:', err);
    res.status(500).json({ message: 'Error creating store', error: err.message });
  }
};

export const adminListUsers = async (req, res) => {
  try {
    const users = await getUsers(); // Should return an array of user objects
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const adminListStores = async (req, res) => {
  try {
    const stores = await db.any("SELECT id, name, address, category, rating FROM stores");
    res.json({ data: stores });
  } catch (err) {
    res.status(500).json({ message: 'Fetch stores failed', error: err.message });
  }
};



export const adminGetRatings = async (req, res) => {
  try {
    const ratings = await db.any(`
      SELECT 
        r.id,
        u.name AS username,
        r.rating,
        r.store_id,
        s.name AS store_name
      FROM ratings r
      JOIN users u ON r.user_id = u.id
      JOIN stores s ON r.store_id = s.id
      ORDER BY r.id DESC
    `);

    res.json(ratings);
  } catch (error) {
    console.error("Error fetching all ratings:", error);
    res.status(500).json({ message: "Error fetching all ratings" });
  }
};