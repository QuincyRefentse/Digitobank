import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// READ: Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ: Get a specific user by ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD: Register a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create the user with confirmPassword (virtual field for validation)
    const user = new User({
      name,
      email,
      password,
      confirmPassword
    });

    await user.save(); // Triggers validation and hashing

    // Generate JWT
    const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });

    // Send a response
    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        accountNumber: user.accountNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE: Update an existing user's details
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE: Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN: Authenticate user and generate a token
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });

    // Send the response with token and user details
    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        accountNumber: user.accountNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};