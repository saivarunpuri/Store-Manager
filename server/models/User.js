import db from '../configs/db.js';

// Get User by Email
export const getUserByEmail = async (email) => {
    try {
        const result = await db.any('SELECT * FROM users WHERE email = $1', [email]);
        return result[0] || null;
    } catch (error) {
        console.error('Error getting user by email:', error.message, error.stack);
        throw error;
    }
};

// Create User
export const createUser = async (name, email, address, password) => {
    try {
        const result = await db.one(
            'INSERT INTO users(name, email, address, password) VALUES($1, $2, $3, $4) RETURNING *',
            [name, email, address, password]
        );
        return result;
    } catch (error) {
        console.error('Error creating user:', error.message, error.stack);
        throw error;
    }
};

// ✅ Add this missing function
export const getUsers = async () => {
    try {
        const result = await db.any('SELECT * FROM users');
        return result;
    } catch (error) {
        console.error('Error fetching users:', error.message, error.stack);
        throw error;
    }
};

export const updateUserPassword = async (userId, newPassword) => {
    try {
      await db.none('UPDATE users SET password = $1 WHERE id = $2', [newPassword, userId]);
      return true;
    } catch (error) {
      console.error('Error updating password in DB:', error.message);
      throw error;
    }
  };
  
  export const getUserById = async (id) => {
    try {
      const result = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
      return result;
    } catch (error) {
      console.error('Error getting user by ID:', error.message);
      throw error;
    }
  };
  