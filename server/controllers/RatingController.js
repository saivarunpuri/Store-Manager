import db from '../configs/db.js';

// POST /ratings
export const rateStore = async (req, res) => {
  const { user_id, store_id, rating } = req.body;

  try {
    // 1. Check if this user has already rated this store
    const existing = await db.oneOrNone(
      'SELECT * FROM ratings WHERE user_id = $1 AND store_id = $2',
      [user_id, store_id]
    );

    if (existing) {
      // 2a. Update the existing rating
      await db.none(
        'UPDATE ratings SET rating = $1 WHERE user_id = $2 AND store_id = $3',
        [rating, user_id, store_id]
      );
    } else {
      // 2b. Insert new rating
      await db.none(
        'INSERT INTO ratings (user_id, store_id, rating) VALUES ($1, $2, $3)',
        [user_id, store_id, rating]
      );
    }

    // 3. Recalculate the average rating for the store
    const avgResult = await db.one(
      'SELECT AVG(rating) AS avg FROM ratings WHERE store_id = $1',
      [store_id]
    );

    const averageRating = parseFloat(avgResult.avg).toFixed(2);

    // 4. Update the store's rating in the stores table
    await db.none(
      'UPDATE stores SET rating = $1 WHERE id = $2',
      [averageRating, store_id]
    );

    // 5. Respond with success
    res.json({
      message: 'Rating submitted and store rating updated.',
      averageRating: averageRating
    });

  } catch (err) {
    console.error('Error rating store:', err.message);
    res.status(500).json({ message: 'Rating failed', error: err.message });
  }
};
export const getRatingsForStore = async (req, res) => {
  const { storeId } = req.params;

  try {
    const ratings = await db.any(
      `
      SELECT r.rating, r.created_at, u.name AS username
      FROM ratings r
      JOIN users u ON r.user_id = u.id
      WHERE r.store_id = $1
      ORDER BY r.created_at DESC
      `,
      [storeId]
    );

    res.json({ success: true, data: ratings });
  } catch (error) {
    console.error("Failed to fetch store ratings:", error);
    res.status(500).json({
      message: "Failed to fetch store ratings",
      error: error.message,
    });
  }
};
