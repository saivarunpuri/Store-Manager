import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';  // Import the user routes
import storeRoutes from './routes/storeRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';


dotenv.config();  // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 4000;

// Allowed origins for CORS (make sure this matches the frontend URL)
const allowedOrigins = ['http://localhost:5173'];

// Middleware configuration
app.use(express.json());  // Parse incoming JSON requests
app.use(cookieParser());  // Parse cookies attached to requests
app.use(cors({ 
  origin: allowedOrigins,  // Only allow the specified origins
  credentials: true  // Allow credentials (cookies) to be sent with requests
}));

// API route to check if the server is working
app.get("/", (req, res) => res.send("API is working"));

// Test route to check database connection
app.get("/test-db", async (req, res) => {
  try {
    // Query the database to ensure connection is working
    const result = await db.any('SELECT NOW()');  // This query returns the current timestamp from the database
    res.json({ message: 'Database connected successfully!', data: result });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ message: 'Error connecting to the database', error });
  }
});

// Use the user routes
app.use('/api/users', userRoutes);  // Endpoint for user-related actions
app.use('/api/stores', storeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/ratings', ratingRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
