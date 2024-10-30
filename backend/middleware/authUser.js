import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const authUser = async (req, res, next) => {
    try {
        // Get token from the cookies
        const token = req.cookies.jwt;

        // Check if token exists
        if (!token) {
            return res.status(401).json({ error: 'Not authorized' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user information to req, excluding the password
        req.user = await User.findById(decoded.userId).select('-password');

        next(); // Continue to the next middleware or route
    } catch (error) {
        console.error('Not authorized, token failed');
        return res.status(401).json({ error: 'Not authorized, token verification failed' });
    }
};
