import db from '../configs/db.js';

export const createRating = async (username, store_id, rating) => {
    try {
        const newRating = await db.one(
            'INSERT INTO ratings(username, store_id, rating) VALUES($1, $2, $3) RETURNING *',
            [username, store_id, rating]
        );
        return newRating;
    } catch (error) {
        throw new Error('Error creating rating');
    }
};

export const getRatingsByStoreId = async (store_id) => {
    try {
        const ratings = await db.any('SELECT * FROM ratings WHERE store_id = $1', [store_id]);
        return ratings;
    } catch (error) {
        throw new Error('Error fetching ratings');
    }
};

export const getAllRatings = async () => {
    try {
        const ratings = await db.any('SELECT * FROM ratings');
        return ratings;
    } catch (error) {
        throw new Error('Error fetching all ratings');
    }
};

