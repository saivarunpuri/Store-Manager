import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise();

const db = pgp({
    connectionString: process.env.DATABASE_URL,
    ssl: false  // ✅ Turn off SSL
});

export default db;
