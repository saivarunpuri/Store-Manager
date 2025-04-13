import { createUser, getUserByEmail, getUserById, updateUserPassword as updatePasswordInDB } from '../models/User.js';
import { body, validationResult } from 'express-validator';

// User Registration Controller with Validations
export const registerUser = [
    // Validate the fields
    body('name')
        .isLength({ min: 3, max: 60 })
        .withMessage('Name must be between 3 and 60 characters'),
    
    body('address')
        .isLength({ max: 400 })
        .withMessage('Address can have a maximum of 400 characters'),
    
    body('password')
        .isLength({ min: 6, max: 20 })
        .withMessage('Password must be between 6 and 20 characters'),
        // You can uncomment these lines below if you want stricter password rules
        // .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        // .matches(/[\W_]/).withMessage('Password must contain at least one special character'),

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

export const updateUserPassword = async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    if (!userId || !currentPassword || !newPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const user = await getUserById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (user.password !== currentPassword) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        await updatePasswordInDB(userId, newPassword);

        return res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error in controller:', error.message);
        return res.status(500).json({ message: 'Server error' });
    }
};
