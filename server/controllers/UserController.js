import { createUser, getUserByEmail } from '../models/User.js';
import { body, validationResult } from 'express-validator';

// User Registration Controller with Validations
export const registerUser = [
    // Validate the fields
    body('name')
        .isLength({ min: 20, max: 60 })
        .withMessage('Name must be between 20 and 60 characters'),
    
    body('address')
        .isLength({ max: 400 })
        .withMessage('Address can have a maximum of 400 characters'),
    
    body('password')
        .isLength({ min: 8, max: 16 })
        .withMessage('Password must be between 8 and 16 characters')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[\W_]/)
        .withMessage('Password must contain at least one special character'),
    
    body('email')
        .isEmail()
        .withMessage('Invalid email format'),

    // Middleware to check validation results
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, address, password } = req.body;

        try {
            // Check if email already exists
            const existingUser = await getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: 'Email already in use' });
            }

            // Proceed to create the user
            const newUser = await createUser(name, email, address, password);
            res.json({ message: 'User created successfully', data: newUser });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating user', error });
        }
    }
];

// User Login Controller
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if (user && user.password === password) {
            res.json({ message: 'Login successful', data: user });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in', error });
    }
};
