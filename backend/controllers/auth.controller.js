import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmpassword, email } = req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "password and confirm password do not match" }); 
        }

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ error: "username already exists" }); 
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            email,
        });

        if (newUser) {
            await newUser.save();
            generateTokenAndSetCookie(newUser._id, res);
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                email: newUser.email,
            }); 
        } else {
            return res.status(400).json({ error: "Invalid user data" }); 
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        return res.status(500).json({ error: "Internal server error" }); 
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!email || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid email or Password" }); 
        }

        generateTokenAndSetCookie(user._id, res);
        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
        }); 
    } catch (error) {
        console.log("Error in login controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" }); 
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({ message: "Logged out successfully" }); 
    } catch (error) {
        console.log("Error in Logout controller", error.message);
        return res.status(500).json({ error: "Internal server error" }); 
    }
};