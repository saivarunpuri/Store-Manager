import db from '../configs/db.js';

export const findAdminByEmail = async (email) => {
  const result = await db.any('SELECT * FROM admins WHERE email = $1', [email]);
  return result[0];
};

export const createAdmin = async (name, email, password) => {
  const result = await db.one(
    'INSERT INTO admins(name, email, password) VALUES($1, $2, $3) RETURNING *',
    [name, email, password]
  );
  return result;
};
