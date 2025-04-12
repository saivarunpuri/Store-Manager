import { createStore, getStores, findStoreByEmail } from '../models/Store.js'; // 👈 add this

export const addStore = async (req, res) => {
  const { name, email, address, rating, password } = req.body; // 👈 include password if needed
  try {
    const newStore = await createStore(name, email, address, rating, password);
    res.json({ message: 'Store created successfully', data: newStore });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating store', error });
  }
};

export const listStores = async (req, res) => {
  try {
    const stores = await getStores();
    res.json({ data: stores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching stores', error });
  }
};

// ✅ New Login Handler
export const loginStore = async (req, res) => {
  const { email, password } = req.body;
  try {
    const store = await findStoreByEmail(email);

    if (!store) {
      return res.status(404).json({ message: 'Store not found' });
    }

    if (store.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', data: store });
  } catch (error) {
    console.error("Login error stack trace:", error); // 🔍 full error
    res.status(500).json({ message: 'Login error', error: error.message }); // 👉 include error.message
  }
};

