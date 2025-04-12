import db from '../configs/db.js'; // Use only one db import

// Find a store by email
// For pg-promise
export const findStoreByEmail = async (email) => {
    const result = await db.oneOrNone('SELECT * FROM stores WHERE email = $1', [email]);
    return result; // already returns the store object or null
  };
  
// Create a new store
export const createStore = async (name, email, password, address, category) => {
  const rating = 0;
  console.log("Inserting store:", { name, email, password, address, category }); // Add this line!
  return db.one(
    'INSERT INTO stores(name, email, password, rating, category, address) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    [name, email, password, rating, category, address]
  );
};

// Get all stores
export const getStores = async () => {
  try {
    const stores = await db.any('SELECT * FROM stores');
    return stores;
  } catch (error) {
    throw new Error('Error fetching stores');
  }
};
